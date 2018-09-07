/**
*
* AgentInfo
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import CropViewer from 'rc-cropping';
import Dialog from 'rc-dialog';
import { FormattedMessage } from 'react-intl';
import { getInitials } from 'appFunctions';
import { USER_TYPE } from 'appConfig';
import images from 'images';
import DivClick from '../../DivClick';
import messages from './messages';
import './style/style.css';

class AgentInfo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    const {
      agentdata,
    } = this.props;
    this.state = {
      tempPic: '',
      cropPic: '',
      fullNameError: '',
      emailError: '',
      passwordError: '',
      responseError: '',
      uploading: false,
      editMode: (agentdata && agentdata.email),
      formData: {
        picture: agentdata && agentdata.picture ? agentdata.picture : '',
        fullName: agentdata && agentdata.fullName ? agentdata.fullName : '',
        email: agentdata && agentdata.email ? agentdata.email : '',
        from: agentdata && agentdata.from ? agentdata.from : '',
        location: agentdata && agentdata.location ? agentdata.location : '',
        activity: agentdata && agentdata.activity ? agentdata.activity : '',
        password: '',
        userType: USER_TYPE.agent,
        facebookLogin: false,
      },
    };
  }
  componentWillReceiveProps(nextProps) {
    const { agentResponse, pictureResponse } = nextProps;
    const {
      toggle,
    } = this.props;
    if (this.props.agentResponse !== agentResponse) {
      if (agentResponse.status === 422) {
        this.setState({ responseError: <FormattedMessage {...messages.emailalreadyregistered} /> });
      } else if (agentResponse.status === 400) {
        this.setState({ responseError: <FormattedMessage {...messages.emailFieldWarning} /> });
      } else {
        toggle();
      }
    }
    if (this.props.pictureResponse !== pictureResponse) {
      if (pictureResponse.imageURL) {
        this.changeValue(pictureResponse.imageURL, 'picture');
      }
    }
  }
  onSubmit = (evt) => {
    evt.preventDefault();
    const {
      formData,
      editMode,
    } = this.state;
    const {
      agentdata,
    } = this.props;
    let flag = 1;
    const emailRegx = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegx = /^([a-zA-Z]{6,10}|[a-zA-Z\d]{6,10}|[\d]{6,10})$/;
    if (!formData.fullName) {
      flag = 0;
      this.setState({ fullNameError: <FormattedMessage {...messages.fieldWarning} /> });
    } else {
      this.setState({ fullNameError: '' });
    }
    if (!formData.email) {
      flag = 0;
      this.setState({ emailError: <FormattedMessage {...messages.fieldWarning} /> });
    } else if (!emailRegx.test(formData.email)) {
      flag = 0;
      this.setState({ emailError: <FormattedMessage {...messages.emailFieldWarning} /> });
    } else {
      this.setState({ emailError: '' });
    }
    if (editMode && (!formData.password || formData.password === '')) {
      this.setState({ passwordError: '' });
    } else if (!passwordRegx.test(formData.password)) {
      flag = 0;
      this.setState({ passwordError: <FormattedMessage {...messages.passwordFieldWarning} /> });
    } else {
      this.setState({ passwordError: '' });
    }
    if (flag && !editMode) {
      this.props.addAgentAction(formData);
    } else if (flag && editMode) {
      this.props.updateAgentAction(formData, agentdata._id);
    }
  }
  onSelectImage = (file) => {
    if (file) {
      this.props.uploadPicture(file);
    }
  }
  changeValue = (value, key) => {
    const formData = { ...this.state.formData };
    formData[key] = value;
    this.setState({ formData });
  }
  emptyFunction = () => { }
  render() {
    const {
      toggle,
    } = this.props;
    const { formData } = this.state;
    return (
      <div className="clearBoth">
        <div className="AdminAgentInfo desktop">
          <form onSubmit={this.onSubmit}>
            <div className="topPart">
              <div className="leftPart">
                <label htmlFor="file-input" className="inputfile">
                  {!this.state.uploading && <CropViewer
                    getSpinContent={this.emptyFunction}
                    size={[106, 106]}
                    thumbnailSizes={[[106, 106], [64, 64]]}
                    renderModal={() => <Dialog closable={false} />}
                    locale="en-US"
                    ref={(ele) => { this.cropper = ele; }}
                    circle={false}
                    onChange={(file) => { this.onSelectImage(file); }}
                    showSelected={false}
                    resetPreviewAfterSelectImage
                    accept="image/jpeg,image/png,image/jpg"
                  />}
                  {((formData.picture !== undefined) && (formData.picture !== '')) ? <img className="profilepic" src={formData.picture} alt="Profile" /> : <DivClick ><p >{formData.fullName !== '' ? getInitials(formData.fullName) : ''}</p></DivClick>}
                </label>
              </div>
              <div className="RightPart">
                <p className="Agentinfo_para"><FormattedMessage {...messages.Agentinfo} /></p>
                <div className="groupForm noBottom">
                  <label htmlFor="Name"><FormattedMessage {...messages.name} />:</label>
                  <input type="text" value={formData.fullName} onChange={(evt) => { this.changeValue(evt.target.value, 'fullName'); this.setState({ fullNameError: '' }); }} placeholder="Name" className="formInput cpitalize" />
                  <div className="warning">{this.state.fullNameError}</div>
                </div>
                <div className="groupForm">
                  <label htmlFor="From"><FormattedMessage {...messages.From} />:</label>
                  <input value={formData.from} onChange={(evt) => { this.changeValue(evt.target.value, 'from'); }} type="text" placeholder="" className="formInput" />
                </div>
                <div className="groupForm noBottom">
                  <label htmlFor="Email"><FormattedMessage {...messages.email} />:</label>
                  <input type="email" value={formData.email} onChange={(evt) => { this.changeValue(evt.target.value, 'email'); this.setState({ emailError: '', responseError: '' }); }} placeholder="Email" className="formInput" />
                  <div className="warning">{this.state.emailError}</div>
                  <div className="warning">{this.state.responseError}</div>
                </div>
                <div className="groupForm">
                  <label htmlFor="Password"><FormattedMessage {...messages.password} />:</label>
                  <input type="password" value={formData.password} onChange={(evt) => { this.changeValue(evt.target.value, 'password'); this.setState({ passwordError: '' }); }} placeholder="********" className="formInput" />
                  <div className="warning">{this.state.passwordError}</div>
                </div>
              </div>
            </div>
            <div className="expertise">
              <p className="exp_Para" ><FormattedMessage {...messages.Expertise} /></p>
              <div className="groupForm">
                <label htmlFor="Location"><FormattedMessage {...messages.Locations} />:</label>
                <input value={formData.location} onChange={(evt) => { this.changeValue(evt.target.value, 'location'); }} type="text" placeholder="" className="formInput" />
              </div>
              <div className="groupForm">
                <label htmlFor="Activity"><FormattedMessage {...messages.Activites} />:</label>
                <input value={formData.activity} onChange={(evt) => { this.changeValue(evt.target.value, 'activity'); }} type="text" placeholder="" className="formInput" />
              </div>
            </div>
            <div className="bottomPart">
              <input onClick={toggle} type="button" value="Cancel" className="confirm cancel" />
              <input type="submit" value="Confirm" className="confirm" />
            </div>
          </form>
        </div>
        <div className="AdminAgentInfo mobile">
          <button onClick={toggle} className="BackArrow"><img src={images.MobBack} alt="backIcon" /></button>
          <p className="popupHeading">Edit Profile</p>
          <form onSubmit={this.onSubmit}>
            <div className="topPart">
              <div className="leftPart">
                <label htmlFor="file-input" className="inputfile">
                  {!this.state.uploading && <CropViewer
                    getSpinContent={this.emptyFunction}
                    size={[106, 106]}
                    thumbnailSizes={[[106, 106], [64, 64]]}
                    renderModal={() => <Dialog closable={false} />}
                    locale="en-US"
                    ref={(ele) => { this.cropper = ele; }}
                    circle={false}
                    onChange={(file) => { this.onSelectImage(file); }}
                    showSelected={false}
                    resetPreviewAfterSelectImage
                    accept="image/jpeg,image/png,image/jpg"
                  />}
                  {((formData.picture !== undefined) && (formData.picture !== '')) ? <img className="profilepic" src={formData.picture} alt="Profile" /> : <DivClick ><p >{formData.fullName !== '' ? getInitials(formData.fullName) : ''}</p></DivClick>}
                </label>
              </div>
              <div className="RightPart">
                <p className="Agentinfo_para"><FormattedMessage {...messages.Agentinfo} /></p>
                <div className="groupForm noBottom">
                  <label htmlFor="Name"><FormattedMessage {...messages.name} />:</label>
                  <input type="text" value={formData.fullName} onChange={(evt) => { this.changeValue(evt.target.value, 'fullName'); this.setState({ fullNameError: '' }); }} placeholder="Name" className="formInput cpitalize" />
                  <div className="warning">{this.state.fullNameError}</div>
                </div>
                <div className="groupForm">
                  <label htmlFor="From"><FormattedMessage {...messages.From} />:</label>
                  <input value={formData.from} onChange={(evt) => { this.changeValue(evt.target.value, 'from'); }} type="text" placeholder="" className="formInput" />
                </div>
                <div className="groupForm noBottom">
                  <label htmlFor="Email"><FormattedMessage {...messages.email} />:</label>
                  <input type="email" value={formData.email} onChange={(evt) => { this.changeValue(evt.target.value, 'email'); this.setState({ emailError: '', responseError: '' }); }} placeholder="Email" className="formInput" />
                  <div className="warning">{this.state.emailError}</div>
                  <div className="warning">{this.state.responseError}</div>
                </div>
                <div className="groupForm">
                  <label htmlFor="Password"><FormattedMessage {...messages.password} />:</label>
                  <input type="password" value={formData.password} onChange={(evt) => { this.changeValue(evt.target.value, 'password'); this.setState({ passwordError: '' }); }} placeholder="********" className="formInput" />
                  <div className="warning">{this.state.passwordError}</div>
                </div>
              </div>
            </div>
            <div className="expertise">
              <p className="exp_Para" ><FormattedMessage {...messages.Expertise} /></p>
              <div className="groupForm">
                <label htmlFor="Location"><FormattedMessage {...messages.Locations} />:</label>
                <input value={formData.location} onChange={(evt) => { this.changeValue(evt.target.value, 'location'); }} type="text" placeholder="" className="formInput" />
              </div>
              <div className="groupForm">
                <label htmlFor="Activity"><FormattedMessage {...messages.Activites} />:</label>
                <input value={formData.activity} onChange={(evt) => { this.changeValue(evt.target.value, 'activity'); }} type="text" placeholder="" className="formInput" />
              </div>
            </div>
            <div className="bottomPart">
              <input onClick={toggle} type="button" value="Cancel" className="confirm cancel" />
              <input type="submit" value="Confirm" className="confirm" />
            </div>
          </form>
        </div>
      </div >
    );
  }
}

AgentInfo.propTypes = {
  uploadPicture: PropTypes.func,
  agentResponse: PropTypes.object,
  pictureResponse: PropTypes.object,
  toggle: PropTypes.func,
  agentdata: PropTypes.object,
  addAgentAction: PropTypes.func,
  updateAgentAction: PropTypes.func,
};

export default AgentInfo;
