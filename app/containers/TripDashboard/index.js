/**
 *
 * TripDashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import Dialog from 'rc-dialog';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import UserPopup from 'components/UserPopup';
import ProfileInfo from 'components/ProfileInfo';
import TripDbheader from 'components/TripDashboard/TripDbheader';
import BottomBox from 'components/BottomBox';
import ChatTab from 'components/TripDashboard/ChatTab';
import Itinerary from 'components/TripDashboard/Itinerary';
import TripDate from 'components/TripDashboard/TripDate';
import TripChecklist from 'components/TripDashboard/TripChecklist';
import TripDashboardTutorial from 'components/TripDashboardTutorial';
import ItiFlights from 'components/TripDashboard/ItiFlights';
import ItiAccom from 'components/TripDashboard/ItiAccom';
import ItiTransport from 'components/TripDashboard/ItiTransport';
import ItiActivities from 'components/TripDashboard/ItiActivities';
import ItiOther from 'components/TripDashboard/ItiOther';
import { SOCKET_EVENT, SOCKET_URL, CHAT_TYPE, ITINERARY_TYPE, ITINERARY_ACTION_TYPE, USER_TYPE } from 'appConfig';
import auth from 'utils/auth';
import { getInitials, scrollToBottom } from 'appFunctions';
// import trip from './responseJson/trip.json';
import {
  makeSelectTripType,
  makeSelectInvitedTrip,
  makeSelectTripByUrl,
} from 'containers/App/selectors';
import {
  closeTutorial,
  tripPlanTypeChange,
  invitedTrip,
} from 'containers/App/actions';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import moment from 'moment';
// import { congnito } from './forms/congnitobookform.cjs';
import images from 'images';
import * as io from 'socket.io-client';

import {
  getUserData,
  updateUserData,
  updateProfilePicture,
  createTrip,
  createTripPopupIsOpen,
  getTrips,
  getTripById,
  addItinerary,
  updateTrip,
  updateItinerary,
  removeItinerary,
  updateTripName,
  uploadAttachment,
  addtripToUser,
} from './actions';
import {
  // makeSelectIsOpenNewTripPopup,
  makeSelectCreatedTripLoading,
  makeSelectCreatedTripError,
  makeSelectCreatedTripResponse,
  makeSelectGetTripListLoading,
  makeSelectGetTripListError,
  makeSelectGetTripList,
  makeSelectGetTripDetails,
  makeSelectGetTripLoading,
  makeSelectGetTripError,
  makeSelectAddItineraryReponse,
  makeSelectAddItineraryLoading,
  makeSelectAddItineraryError,
  makeSelectUpdateTripResponse,
  makeSelectUpdateTripLoading,
  makeSelectUpdateTripError,
  makeSelectGetUserLoading,
  makeSelectGetUserError,
  makeSelectGetUserResponse,
  makeSelectPictureLoading,
  makeSelectPictureError,
  makeSelectPictureResponse,
  makeSelectUpdateItineraryLoading,
  makeSelectUpdateItineraryError,
  makeSelectUpdateItineraryResponse,
  makeSelectRemoveItineraryLoading,
  makeSelectRemoveItineraryError,
  makeSelectRemoveItineraryResponse,
  makeSelectUpdateTripNameLoading,
  makeSelectUpdateTripNameError,
  makeSelectUpdateTripNameResponse,
  makeSelectUploadAttachmentLoading,
  makeSelectUploadAttachmentError,
  makeSelectUploadAttachmentResponse,
  makeSelectTripToUsertLoading,
  makeSelectTripToUserError,
  makeSelectTripToUserResponse,
} from './selectors';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import './style/style.css';
export class TripDashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    const {
      tripType,
    } = this.props;
    const userInfo = auth.get('userInfo');
    this.state = {
      error: '',
      profileData: {},
      isOpenProfile: false,
      welcomePopup: (userInfo && userInfo.userType && (userInfo.userType === USER_TYPE.traveller)) ? (tripType !== -1) : false,
      tripName: '',
      tripNameError: '',
      chatSection: false,
      isTutorial: false,
      isOpenTutorial: false,
      OpenItineraryType: false,
      itineraryFormName: '',
      defaultTrip: {},
      itineraries: [],
      itineraryCost: 0,
      defaultTripId: '',
      allTrips: [],
      itineraryData: {},
      userType: userInfo && userInfo.userType,
      chatMessages: [],
      uploadAttachmentResponseState: {},
      typingUsers: '',
      onlineUsers: [],
      windowWidth: 0,
    };
    this.oneTimeDayInChat = {};
    this.itineraryHeaderDateGroup = {};
    this.client = {};
    this.callAlltripCheck = true;
  }
  componentWillMount() {
    const loggedInUser = auth.getUserInfo();
    const {
      invitedTripId,
      addtripToUserProps,
    } = this.props;
    if (invitedTripId !== '') {
      addtripToUserProps({
        tripId: invitedTripId,
        userId: loggedInUser._id,
      });
    }
    this.updateDimensions();
  }
  componentDidMount() {
    const {
      getUserDataProp,
      getTripByIdProp,
      location,
      invitedTripId,
      tripByUrlId,
    } = this.props;
    let defaultTripId = '';
    if (invitedTripId !== '') {
      defaultTripId = invitedTripId;
    } else if (tripByUrlId !== '') {
      defaultTripId = tripByUrlId;
    } else {
      defaultTripId = (location && location.state && location.state.tripId) ? location.state.tripId : '';
    }
    getUserDataProp();
    getTripByIdProp(defaultTripId);
    scrollToBottom(this.messageListRef);
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillReceiveProps(nextProps) {
    const {
      getTripByIdProp,
      getTripsProp,
      tripType,
      invitedTripId,
      tripPlanTypeChangeProp,
    } = this.props;
    const {
      defaultTripId,
      isTutorial,
      profileData,
    } = this.state;
    const {
      getUserLoading,
      getUserError,
      getUserResponse,
      profilePictureLoading,
      profilePictureError,
      profilePictureResponse,
      getTripListLoading,
      getTripListError,
      getTripListResponse,
      getTripLoading,
      getTripError,
      getTripDetails,
      addItineraryReponse,
      addItineraryLoading,
      addItineraryError,
      createTripLoading,
      createTripError,
      createTripResponse,
      UpdateTripResponse,
      UpdateTripLoading,
      UpdateTripError,
      updateItineraryLoading,
      updateItineraryError,
      updateItineraryResponse,
      removeItineraryLoading,
      removeItineraryError,
      removeItineraryResponse,
      updateTripNameLoading,
      updateTripNameError,
      updateTripNameResponse,
      uploadAttachmentLoading,
      uploadAttachmentError,
      uploadAttachmentResponse,
      tripToUsertLoading,
      tripToUserError,
      tripToUserResponse,
    } = nextProps;

    if (tripToUserResponse !== this.props.tripToUserResponse && !tripToUsertLoading && !tripToUserError) {
      getTripsProp();
      this.client.emit(SOCKET_EVENT.detailsUpdated, defaultTripId);
    }
    if (getUserResponse !== this.props.getUserResponse && !getUserLoading && !getUserError) {
      this.setState({
        profileData: getUserResponse.data,
        isOpenProfile: false,
        isTutorial: getUserResponse.data.isPopupEnabled,
      });      
    }
    if (getTripListResponse !== this.props.getTripListResponse && !getTripListLoading && !getTripListError) {
      if (getTripListResponse.data.length > 0 && defaultTripId === '') {
        getTripByIdProp(getTripListResponse.data[0]._id);
        this.callAlltripCheck = false;
      } else if (tripType === -1 && defaultTripId === '') {
        this.props.history.replace('/choose');
      } else {
        this.callAlltripCheck = true;
      }
      this.setState({
        allTrips: getTripListResponse.data,
      });
    }
    if (((getTripDetails !== this.props.getTripDetails)) && !getTripLoading && !getTripError) {
      const tripId = (getTripDetails.data && getTripDetails.data[0] && getTripDetails.data[0].trip && getTripDetails.data[0].trip[0]) ? getTripDetails.data[0].trip[0]._id : '';
      if (tripId !== '') {
        this.setState({ defaultTripId: tripId, defaultTrip: getTripDetails.data[0].trip[0], itineraries: getTripDetails.data[0].itinerary, itineraryCost: getTripDetails.data[0].itineraryCost, itineraryFormName: '', OpenItineraryType: false });
        if (this.client && this.client.connected) {
          this.client.emit(SOCKET_EVENT.offline, { socketId: this.client.id, userId: profileData._id, roomId: defaultTripId });
        }
        this.client = this.configSocket(tripId, profileData);
        if (isTutorial && (invitedTripId !== '')) {
          this.setState({ isOpenTutorial: isTutorial });
        }
      }
      if (this.callAlltripCheck) {
        getTripsProp();
      }
    }
    if ((addItineraryReponse !== this.props.addItineraryReponse) && !addItineraryLoading && !addItineraryError) {
      getTripByIdProp(defaultTripId);
      this.client.emit(SOCKET_EVENT.detailsUpdated, defaultTripId);
    }
    if ((updateItineraryResponse !== this.props.updateItineraryResponse) && !updateItineraryLoading && !updateItineraryError) {
      getTripByIdProp(defaultTripId);
      this.client.emit(SOCKET_EVENT.detailsUpdated, defaultTripId);
    }
    if ((removeItineraryResponse !== this.props.removeItineraryResponse) && !removeItineraryLoading && !removeItineraryError) {
      getTripByIdProp(defaultTripId);
      this.client.emit(SOCKET_EVENT.detailsUpdated, defaultTripId);
    }
    if (profilePictureResponse !== this.props.profilePictureResponse && !profilePictureLoading && !profilePictureError) {
      this.props.getUserDataProp();
    }
    if (createTripResponse !== this.props.createTripResponse && !createTripLoading && !createTripError) {
      tripPlanTypeChangeProp(-1);
      getTripByIdProp(createTripResponse.data._id);
      this.callAlltripCheck = true;
      if (isTutorial) {
        this.setState({ isOpenTutorial: isTutorial });
      }
    }
    if (UpdateTripResponse !== this.props.UpdateTripResponse && !UpdateTripLoading && !UpdateTripError) {
      this.props.getTripByIdProp(defaultTripId);
      this.client.emit(SOCKET_EVENT.detailsUpdated, defaultTripId);
      console.log('update');
    }
    if (updateTripNameResponse !== this.props.updateTripNameResponse && !updateTripNameLoading && !updateTripNameError) {
      this.props.getTripByIdProp(defaultTripId);
      this.client.emit(SOCKET_EVENT.detailsUpdated, defaultTripId);
    }
    if (uploadAttachmentResponse !== this.props.uploadAttachmentResponse && !uploadAttachmentLoading && !uploadAttachmentError) {
      this.sendData(uploadAttachmentResponse.data);
      this.setState({ uploadAttachmentResponseState: uploadAttachmentResponse });
    }
  }
  componentDidUpdate() {
    scrollToBottom(this.messageListRef);
  }
  componentWillUnmount() {
    const {
      defaultTripId,
      profileData,
    } = this.state;
    if (this.client && this.client.connected) {
      this.client.emit(SOCKET_EVENT.offline, { socketId: this.client.id, userId: profileData._id, roomId: defaultTripId });
    }
    window.removeEventListener('resize', this.updateDimensions);
  }
  updateDimensions = () => {
    this.setState({ windowWidth: window.innerWidth });
  }
  configSocket(defaultTripId, profileData) {
    const {
      getTripByIdProp,
      location
    } = this.props;
    const client = io(SOCKET_URL);
    client.on('connect', () => {
      client.emit(SOCKET_EVENT.online, { socketId: client.id, userId: profileData._id, roomId: defaultTripId });
      if((location && location.state && location.state.tripId) && profileData.userType === USER_TYPE.agent){
        this.client.emit(SOCKET_EVENT.detailsUpdated, location.state.tripId);
      }
    });
    client.on(SOCKET_EVENT.online, (data) => {
      this.setState({ onlineUsers: data });
    });
    client.emit(SOCKET_EVENT.room, defaultTripId);
    client.on(SOCKET_EVENT.chat, (data) => {
      this.state.chatMessages.push(data);

      this.setState({ chatMessages: this.state.chatMessages, typingUsers: '' });
    });
    client.on(SOCKET_EVENT.history, (data) => {
      // console.log(data);
      this.setState({ chatMessages: data });
    });
    client.on(SOCKET_EVENT.typing, (data) => {
      this.setState({ typingUsers: data.fullName });
    });
    client.on(SOCKET_EVENT.detailsUpdated, () => {
      getTripByIdProp(defaultTripId);
    });
    client.emit(SOCKET_EVENT.history, defaultTripId);
    return client;
  }
  submitTrip = (e) => {
    e.preventDefault();
    let flag = 1;
    if (!this.state.tripName) {
      flag = 0;
      this.setState({ tripNameError: <FormattedMessage {...messages.fieldWarning} /> });
    } else {
      this.setState({ tripNameError: '' });
    }
    if (flag) {
      this.setState({ welcomePopup: false });
      this.props.createTripProp(this.state.tripName);
    }
  }
  sendData = (data) => {
    const {
      defaultTripId,
      profileData,
      defaultTrip,
      onlineUsers,
    } = this.state;

    const offlineUser = defaultTrip.userList.filter((item) => (onlineUsers.findIndex((itemIn) => itemIn.userId === item) === -1));
    const chatBody = {
      message: {
        message: '',
        roomId: defaultTripId,
        type: data.type,
        sender: {
          userId: profileData._id,
          fullName: profileData.fullName,
          picture: profileData.picture ? profileData.picture : '',
          email: profileData.email ? profileData.email : '',
          userType: profileData.userType,
          from: profileData.from ? profileData.from : '',
          location: profileData.location ? profileData.location : '',
          activity: profileData.activity ? profileData.activity : profileData.activity,
        },
        attachment: {
          url: data.url,
          name: data.name,
        },
      },
      offlineUser,
    };
    // console.log(chatBody);
    this.client.emit(SOCKET_EVENT.chat, chatBody);
  }
  sendMessage = (e, message) => {
    e.preventDefault();
    if (message === '') {
      return;
    }
    const {
      defaultTripId,
      profileData,
      defaultTrip,
      onlineUsers,
    } = this.state;

    const offlineUser = defaultTrip.userList.filter((item) => (onlineUsers.findIndex((itemIn) => itemIn.userId === item) === -1));
    // console.log(onlineUsers, defaultTrip.userList, offlineUser);
    const chatBody = {
      message: {
        message,
        roomId: defaultTripId,
        type: CHAT_TYPE.message,
        sender: {
          userId: profileData._id,
          fullName: profileData.fullName,
          picture: profileData.picture ? profileData.picture : '',
          email: profileData.email ? profileData.email : '',
          userType: profileData.userType,
          from: profileData.from ? profileData.from : '',
          location: profileData.location ? profileData.location : '',
          activity: profileData.activity ? profileData.activity : profileData.activity,
        },
        attachment: {
          url: '',
          name: '',
        },
      },
      offlineUser,
    };
    this.client.emit(SOCKET_EVENT.chat, chatBody);
    this.setState({ message: '' });
  }
  isTutorial = () => {
    const {
      closeTutorialProp,
      invitedTripProps,
    } = this.props;
    this.setState({ isOpenTutorial: false });
    invitedTripProps('');
    closeTutorialProp(this.state.profileData._id);
  }
  formShow = (name) => {
    this.setState({ itineraryFormName: name });
  }
  actionsItinerary = (formData, actionName) => {
    const {
      itineraryFormName,
      defaultTrip,
    } = this.state;
    const {
      addItineraryProp,
      updateItineraryProp,
      removeItineraryProp,
    } = this.props;
    let data = {
      tripId: defaultTrip._id,
      book: formData.book,
      name: itineraryFormName,
      actionDate: formData.actionDate,
      actionTimeStamp: formData.actionTimeStamp,
      miscellaneous: formData,
    };
    switch (actionName) {
      case ITINERARY_ACTION_TYPE.add:
        addItineraryProp(data);
        break;
      case ITINERARY_ACTION_TYPE.edit:
        data = { ...data, ...{ itineraryId: formData.itineraryId, action: 'all' } };
        this.setState({ itineraryData: {}, itineraryFormName: '' });
        updateItineraryProp(data);
        break;
      case ITINERARY_ACTION_TYPE.remove:
        data = { itineraryId: formData.itineraryId };
        this.setState({ itineraryData: {}, itineraryFormName: '' });
        removeItineraryProp(data);
        break;
      case ITINERARY_ACTION_TYPE.back:
        this.setState({ itineraryData: {}, itineraryFormName: '' });
        break;
      default:
        break;
    }
    this.setState({ itineraryFormName: '', OpenItineraryType: false });
  }

  updateTrip = (data) => {
    this.props.updateTripProp(data);
  }
  selectTrip = (tripId) => {
    this.props.getTripByIdProp(tripId);
  }
  updateTripName = (data) => {
    this.props.updateTripNameProp(data);
  }
  editItinerary = (data, type) => {
    this.setState({ itineraryData: data, itineraryFormName: type });
  }
  bookItinerary = (data) => {
    const {
      updateItineraryProp,
    } = this.props;
    const dataModify = {
      itineraryId: data._id,
      book: (!data.book),
      action: 'book',
    };
    updateItineraryProp(dataModify);
  }
  addFirstitinerary = (defaultTrip) => {
    if (defaultTrip._id) {
      this.setState({ OpenItineraryType: true });
    }
  }
  chatbody = () => {
    const {
      uploadAttachmentProp,
    } = this.props;

    const {
      profileData,
      defaultTripId,
      uploadAttachmentResponseState,
      typingUsers,
      chatMessages,
      welcomePopup,
    } = this.state;
    return (<div className="leftContainer">
      <div className="leftContainerInner" ref={(el) => { this.messageListRef = el; }} >
        {this.state.chatMessages.length < 1 && <div className="middleText">
          <p className="rightText"><FormattedMessage {...messages.Collabrate} /></p>
        </div>}
        {!welcomePopup && (chatMessages.length > 0) && chatMessages.map((item) => (this.renderRow(item)))}
      </div>
      <BottomBox>
        <ChatTab
          client={this.client}
          profileData={profileData}
          defaultTripId={defaultTripId}
          getAllMessage={(data) => { this.setState({ chatMessages: data }); }}
          uploadAttachmentResponse={uploadAttachmentResponseState}
          uploadAttachment={uploadAttachmentProp}
          sendMessage={this.sendMessage}
          typingUsers={typingUsers}
        />
      </BottomBox>
    </div>);
  }
  renderRow = (item) => {
    const {
      profileData,
      defaultTrip,
    } = this.state;
    // console.log(defaultTrip);
    const time = Date.now();
    let todayStartLimit = new Date(time);
    let todayEndLimit = new Date(time);
    todayStartLimit.setHours(0);
    todayStartLimit.setMinutes(0);
    todayStartLimit.setSeconds(1);

    todayEndLimit.setHours(23);
    todayEndLimit.setMinutes(59);
    todayEndLimit.setSeconds(59);
    const yesterdayStartlimit = parseInt(todayStartLimit.getTime() / 1000, 10) - (24 * 60 * 60);
    todayStartLimit = parseInt(todayStartLimit.getTime() / 1000, 10);
    todayEndLimit = parseInt(todayEndLimit.getTime() / 1000, 10);
    const addedOn = parseInt(item.addedOn / 1000, 10);
    let dateLabel = '';
    if ((addedOn >= todayStartLimit) && (addedOn <= todayEndLimit)) {
      dateLabel = `${moment(addedOn, 'X').format('hh:mm A')}`;
      if (!this.oneTimeDayInChat.today) {
        dateLabel = `Today ${dateLabel}`;
      }
      this.oneTimeDayInChat.today = true;
    } else if ((addedOn >= yesterdayStartlimit) && (addedOn <= todayStartLimit)) {
      dateLabel = `${moment(addedOn, 'X').format('hh:mm A')}`;
      if (!this.oneTimeDayInChat.yesterday) {
        dateLabel = `Yesterday ${dateLabel}`;
      }
      this.oneTimeDayInChat.yesterday = true;
    } else {
      const dayCheck = moment(addedOn, 'X').format('DoMMMYYYY');
      if (!this.oneTimeDayInChat[dayCheck]) {
        dateLabel = ` ${moment(addedOn, 'X').format('Do MMM YYYY hh:mm A')}`;
      } else {
        dateLabel = ` ${moment(addedOn, 'X').format('hh:mm A')}`;
      }
      this.oneTimeDayInChat[dayCheck] = true;
    }
    let chatRow = (<div className={(item.sender.userId === profileData._id) ? 'whiteBox' : 'greenBox'} ><p className="messageText">{item.message}</p></div>);
    if (item.message === '' && item.type === CHAT_TYPE.image) {
      chatRow = (<div className={(item.sender.userId === profileData._id) ? 'whiteBox' : 'greenBox'} ><a download={item.attachment.name} target="_blank" href={item.attachment.url} ><img className="sharedImage" alt="sharedImage" src={item.attachment.url} /></a></div>);
    } else if (item.message === '' && item.type === CHAT_TYPE.file) {
      chatRow = (<div className="documentWrap" >
        <a href={item.attachment.url} target="_default" >
          <img className="documentIcon" alt="documentIcon" src={images.document} />
          <div className="nameDownloadIconWrap">
            <p className="fileName" >{item.attachment.name}</p>
            <div className="downloadIconWrap" ><img className="downloadIcon" alt="downloadIcon" src={images.download} /></div>
          </div>
        </a>
      </div>);
    }
    const isOnline = this.state.onlineUsers.filter((itemIn) => (itemIn.userId === item.sender.userId));
    let sender = defaultTrip.invitedFriend.filter((itemIn) => (itemIn._id === item.sender.userId));
    if ((sender.length < 1) && defaultTrip.assignedTo[0] && (item.sender.userId === defaultTrip.assignedTo[0]._id)) {
      sender = defaultTrip.assignedTo[0];
    } else if ((sender.length < 1) && (item.sender.userId === profileData._id)) {
      sender = profileData;
    } else if (sender.length < 1) {
      sender = item.sender;
    }
    if (sender[0]) {
      sender = sender[0];
    }
    return (<div key={item.addedOn} className="fullwidth rowWrapper">
      <div className="timeRow">{dateLabel}</div>
      <div className="fullwidth">
        <div className="pictureWrapper">
          <div className="upperDp">
            {(sender.userType === USER_TYPE.agent) && ProfileInfo(defaultTrip.assignedTo[0])}
            {(sender && sender.picture) ? <img className="profilePic" src={sender.picture} alt="userPic" /> : <div className="profilePic"><div className="userPic">{getInitials(sender.fullName)}</div></div>}
            {isOnline.length > 0 && <span className="onlineWrap"><p className="onlineIcon"></p></span>}
          </div>
        </div>
        <div className="messageBoxWrapper">
          <p className="fullName">{sender.fullName}</p>
          {chatRow}
        </div>
      </div>
    </div>);
  }
  renderItineraryRow(item) {
    let oneTimeRow = '';
    if (!this.oneTimeDayInChat[item.actionDate]) {
      oneTimeRow = <TripDate headerDate={item.actionDate} />;
    }
    this.oneTimeDayInChat[item.actionDate] = true;
    return (<div className="itineraryRowItem fullWidth" >
      {oneTimeRow}
      <TripChecklist editAction={(data, type) => { this.editItinerary(data, type); }} bookAction={(data) => { this.bookItinerary(data); }} itinerary={item} />
    </div>);
  }
  render() {
    this.oneTimeDayInChat = {};
    this.oneTimeDayInChat = {};
    const {
      history,
      tripType,
      invitedTripId,
    } = this.props;

    const {
      tripName,
      tripNameError,
      isTutorial,
      itineraryFormName,
      defaultTrip,
      allTrips,
      itineraries,
      itineraryCost,
      itineraryData,
      isOpenTutorial,
      welcomePopup,
      profileData,
      isOpenProfile,
      defaultTripId,
      userType,
      windowWidth,
    } = this.state;
    const itineraryAddEdit = (
      <div className="rightContainer">
        <div className="rightContainerInner" >
          {!(itineraries && (itineraries.length > 0)) && (itineraryFormName === '') && <div className="middleText">
            <p className="rightText"><FormattedMessage {...messages.buildText} /></p>
          </div>}
          {!welcomePopup && itineraries && (itineraries.length > 0) && itineraries.map((item) => (this.renderItineraryRow(item)))}
          {itineraryFormName === ITINERARY_TYPE.flights && <ItiFlights itineraryCost={itineraryCost} itineraryData={itineraryData} returnAction={this.actionsItinerary} />}
          {itineraryFormName === ITINERARY_TYPE.accommodation && <ItiAccom itineraryCost={itineraryCost} itineraryData={itineraryData} returnAction={this.actionsItinerary} />}
          {itineraryFormName === ITINERARY_TYPE.transport && <ItiTransport itineraryCost={itineraryCost} itineraryData={itineraryData} returnAction={this.actionsItinerary} />}
          {itineraryFormName === ITINERARY_TYPE.activities && <ItiActivities itineraryCost={itineraryCost} itineraryData={itineraryData} returnAction={this.actionsItinerary} />}
          {itineraryFormName === ITINERARY_TYPE.other && <ItiOther itineraryCost={itineraryCost} itineraryData={itineraryData} returnAction={this.actionsItinerary} />}
        </div>
        {itineraryFormName === '' && <BottomBox>
          {this.state.OpenItineraryType && <div className="absoluteContainer"><Itinerary formName={(name) => { this.formShow(name); }} /></div>}
          {!this.state.OpenItineraryType ?
            <div className="addIcon" onClick={() => { this.addFirstitinerary(defaultTrip); }} role="button" tabIndex="0" ><FormattedMessage {...messages.addIcon} /></div> : <div className="addText" ><FormattedMessage {...messages.addText} /></div>}
          {!this.state.OpenItineraryType && <div className="addAmountInfo">{(itineraryCost > 0) && (<span>$ {itineraryCost} <FormattedMessage {...messages.currencyAud} /></span>)}</div>}
        </BottomBox>}
      </div>);
    if (isOpenTutorial) {
      return (<TripDashboardTutorial invitedUser={(invitedTripId !== '')} tutorialOpen={this.isTutorial} profileData={profileData} />);
    }
    return (
      <div className="TripDashboard">
        <Helmet>
          <title>TripDashboard</title>
          <meta name="description" content="Description of TripDashboard" />
          {/* {congnito} */}
        </Helmet>
        {/* <div className="cognito">{Cognito.load("forms", { id: "1", entry: { AgentName: 'PRAVIN KUMAR'}})}</div> */}
        <Dialog prefixCls="WelcomePopup" onClose={this.toggle} closable={false} maskClosable={false} visible={welcomePopup}>
          <div className="welcomePop">
            <p className="mainHeading"><FormattedMessage {...messages.mainHeading} /></p>
            <p className="subHeading">{(tripType === 1) && <FormattedMessage {...messages.subHeading} />}</p>
            <div className="middlePart">
            {isTutorial &&<p><FormattedMessage {...messages.text1} />,</p>}
            {isTutorial && <p><FormattedMessage {...messages.text2} />  <FormattedMessage {...messages.text3} /></p>}
            {!isTutorial && <p> <FormattedMessage {...messages.text1} />, <FormattedMessage {...messages.text2} /></p>}
            </div>
            <form onSubmit={this.submitTrip}>
              <div className="bottomPart">
                <div className="bottomLeft">
                  <input value={tripName} onChange={(evt) => { this.setState({ tripName: evt.target.value, tripNameError: '' }); }} type="text" className="tripName" placeholder="Trip name..." />
                  <span className="warning">{tripNameError}</span>
                </div>
                <button type="submit" className="Done">Done</button>
              </div>
            </form>
          </div>
        </Dialog>
        <div>
          <TripDbheader
            auth={{ defaultTripId, userType }}
            selectTrip={this.selectTrip}
            updateTripName={this.updateTripName}
            allTrips={allTrips}
            updateTrip={(data) => { this.updateTrip(data); }}
            defaultTrip={defaultTrip}
            createNewTrip={() => { this.props.createTripPopupIsOpenProp(true); }}
            history={history}
            editProfileOpen={isOpenProfile}
            profileData={profileData}
            onClick={() => { this.setState({ isOpenProfile: !isOpenProfile }); }}
            updateProfilePicture={(file) => { this.props.updateProfilePictureProp(file); }}
            updateData={(data) => { this.props.updateUserDataProp(data); }}
            welcomePopup={welcomePopup}
          />
        </div>
        {(windowWidth > 767) && <div className="container desktop">
          {this.chatbody()}
          {itineraryAddEdit}
        </div>}
        {this.state.isOpenProfile && <UserPopup profileData={profileData} updateProfilePicture={(file) => { this.props.updateProfilePictureProp(file); }} updateData={(data) => { this.props.updateUserDataProp(data); }} />}
        {(windowWidth < 768) && <div className="container mobile">
          <Tabs onSelect={() => { this.client.emit(SOCKET_EVENT.history, defaultTripId); }} >
            <TabList className="TripDashTab">
              <Tab><FormattedMessage {...messages.Chat} /></Tab>
              <Tab><FormattedMessage {...messages.Itinerary} /></Tab>
            </TabList>
            <TabPanel>
              {this.chatbody()}
            </TabPanel>
            <TabPanel>
              {itineraryAddEdit}
            </TabPanel>
          </Tabs>
        </div>}
      </div>
    );
  }
}

TripDashboard.propTypes = {
  getUserDataProp: PropTypes.func,
  updateUserDataProp: PropTypes.func,
  updateProfilePictureProp: PropTypes.func,
  getUserLoading: PropTypes.bool,
  getUserError: PropTypes.bool,
  getUserResponse: PropTypes.object,
  profilePictureLoading: PropTypes.bool,
  profilePictureError: PropTypes.bool,
  profilePictureResponse: PropTypes.object,
  history: PropTypes.object,
  createTripProp: PropTypes.func,
  createTripPopupIsOpenProp: PropTypes.func,
  createTripLoading: PropTypes.bool,
  createTripError: PropTypes.bool,
  createTripResponse: PropTypes.object,
  getTripsProp: PropTypes.func,
  getTripListLoading: PropTypes.bool,
  getTripListError: PropTypes.bool,
  getTripListResponse: PropTypes.object,
  getTripByIdProp: PropTypes.func,
  getTripLoading: PropTypes.bool,
  getTripError: PropTypes.bool,
  getTripDetails: PropTypes.object,
  addItineraryProp: PropTypes.func,
  addItineraryReponse: PropTypes.object,
  addItineraryLoading: PropTypes.bool,
  addItineraryError: PropTypes.bool,
  UpdateTripResponse: PropTypes.object,
  UpdateTripLoading: PropTypes.bool,
  UpdateTripError: PropTypes.bool,
  closeTutorialProp: PropTypes.func,
  updateTripProp: PropTypes.func,
  updateItineraryProp: PropTypes.func,
  updateItineraryLoading: PropTypes.bool,
  updateItineraryError: PropTypes.bool,
  updateItineraryResponse: PropTypes.object,
  removeItineraryProp: PropTypes.func,
  removeItineraryLoading: PropTypes.bool,
  removeItineraryError: PropTypes.bool,
  removeItineraryResponse: PropTypes.object,
  updateTripNameLoading: PropTypes.bool,
  updateTripNameError: PropTypes.bool,
  updateTripNameResponse: PropTypes.object,
  updateTripNameProp: PropTypes.func,
  location: PropTypes.object,
  tripType: PropTypes.any,
  tripPlanTypeChangeProp: PropTypes.func,
  uploadAttachmentLoading: PropTypes.bool,
  uploadAttachmentError: PropTypes.bool,
  uploadAttachmentResponse: PropTypes.object,
  uploadAttachmentProp: PropTypes.func,
  invitedTripId: PropTypes.string,
  tripToUsertLoading: PropTypes.bool,
  tripToUserError: PropTypes.bool,
  tripToUserResponse: PropTypes.object,
  invitedTripProps: PropTypes.func,
  addtripToUserProps: PropTypes.func,
  tripByUrlId: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  getUserLoading: makeSelectGetUserLoading(),
  getUserError: makeSelectGetUserError(),
  getUserResponse: makeSelectGetUserResponse(),
  profilePictureLoading: makeSelectPictureLoading(),
  profilePictureError: makeSelectPictureError(),
  profilePictureResponse: makeSelectPictureResponse(),
  createTripLoading: makeSelectCreatedTripLoading(),
  createTripError: makeSelectCreatedTripError(),
  createTripResponse: makeSelectCreatedTripResponse(),
  getTripListLoading: makeSelectGetTripListLoading(),
  getTripListError: makeSelectGetTripListError(),
  getTripListResponse: makeSelectGetTripList(),
  getTripLoading: makeSelectGetTripLoading(),
  getTripError: makeSelectGetTripError(),
  getTripDetails: makeSelectGetTripDetails(),
  addItineraryReponse: makeSelectAddItineraryReponse(),
  addItineraryLoading: makeSelectAddItineraryLoading(),
  addItineraryError: makeSelectAddItineraryError(),
  updateTripResponse: makeSelectUpdateTripResponse(),
  updateTripLoading: makeSelectUpdateTripLoading(),
  updateTripError: makeSelectUpdateTripError(),
  updateItineraryLoading: makeSelectUpdateItineraryLoading(),
  updateItineraryError: makeSelectUpdateItineraryError(),
  updateItineraryResponse: makeSelectUpdateItineraryResponse(),
  removeItineraryLoading: makeSelectRemoveItineraryLoading(),
  removeItineraryError: makeSelectRemoveItineraryError(),
  removeItineraryResponse: makeSelectRemoveItineraryResponse(),
  updateTripNameLoading: makeSelectUpdateTripNameLoading(),
  updateTripNameError: makeSelectUpdateTripNameError(),
  updateTripNameResponse: makeSelectUpdateTripNameResponse(),
  tripType: makeSelectTripType(),
  uploadAttachmentLoading: makeSelectUploadAttachmentLoading(),
  uploadAttachmentError: makeSelectUploadAttachmentError(),
  uploadAttachmentResponse: makeSelectUploadAttachmentResponse(),
  invitedTripId: makeSelectInvitedTrip(),
  tripByUrlId: makeSelectTripByUrl(),
  tripToUsertLoading: makeSelectTripToUsertLoading(),
  tripToUserError: makeSelectTripToUserError(),
  tripToUserResponse: makeSelectTripToUserResponse(),
});

function mapDispatchToProps(dispatch) {
  return {
    getUserDataProp: () => dispatch(getUserData()),
    updateUserDataProp: (data) => dispatch(updateUserData(data)),
    createTripPopupIsOpenProp: (tripName) => dispatch(createTripPopupIsOpen(tripName)),
    updateProfilePictureProp: (file) => dispatch(updateProfilePicture(file)),
    createTripProp: (tripName) => dispatch(createTrip(tripName)),
    getTripsProp: () => dispatch(getTrips()),
    getTripByIdProp: (tripId) => dispatch(getTripById(tripId)),
    addItineraryProp: (data, tripId) => dispatch(addItinerary(data, tripId)),
    closeTutorialProp: (userId) => dispatch(closeTutorial(userId)),
    updateTripProp: (userId) => dispatch(updateTrip(userId)),
    updateItineraryProp: (data) => dispatch(updateItinerary(data)),
    removeItineraryProp: (data) => dispatch(removeItinerary(data)),
    updateTripNameProp: (data) => dispatch(updateTripName(data)),
    tripPlanTypeChangeProp: (data) => dispatch(tripPlanTypeChange(data)),
    uploadAttachmentProp: (data) => dispatch(uploadAttachment(data)),
    invitedTripProps: (data) => dispatch(invitedTrip(data)),
    addtripToUserProps: (data) => dispatch(addtripToUser(data)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'tripDashboard', reducer });
const withSaga = injectSaga({ key: 'tripDashboard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TripDashboard);
