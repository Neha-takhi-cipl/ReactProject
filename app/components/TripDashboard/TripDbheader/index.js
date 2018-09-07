/**
*
* TripDbheader
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { USER_TYPE } from 'appConfig';
import './style/style.css';
import Book from '../Book';
import Trip from '../Trip';
import EditProfile from '../EditProfile';
import Invite from '../Invite';
import AddTraveler from '../AddTraveler';
import Notification from '../Notification';
import MobileMenu from '../../MobileMenu';
import images from '../../../images';

class TripDbheader extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const {
      editProfileOpen,
      profileData,
      onClick,
      history,
      createNewTrip,
      defaultTrip,
      updateTrip,
      allTrips,
      updateTripName,
      selectTrip,
      auth,
      updateProfilePicture,
      updateData,
      welcomePopup,
    } = this.props;
    const addTraveler = (<AddTraveler
      defaultTrip={defaultTrip}
    />);
    const currentTripPrefrance = (<Invite
      defaultTrip={defaultTrip}
      updateTrip={updateTrip}
    />);
    const editProfile = (<EditProfile
      history={history}
      onClick={onClick}
      profileData={profileData}
      editProfileOpen={editProfileOpen}
      updateProfilePicture={updateProfilePicture}
      updateData={updateData}
    />);
    const notification = (<Notification />);
    return (
      <div>
        <div className="tripHeader Dashboard_Desktop">
          <div className="book">
            {(auth.defaultTripId !== '') && (auth.userType === USER_TYPE.admin) && <div> <div onClick={() => { history.goBack(); }} role="button" tabIndex={0} className="backIcon"><img src={images.backIcon} className="bookImg" alt="book" /></div><Book cardInfo /></div>}
            {(auth.defaultTripId !== '') && (auth.userType === USER_TYPE.agent) && <div onClick={() => { history.goBack(); }} role="button" tabIndex={0} className="backIcon"><img src={images.backIcon} className="bookImg" alt="book" /></div>}
            {(auth.defaultTripId === '') && (auth.userType === USER_TYPE.agent) && <Book cardInfo={false} />}
            {(auth.userType === USER_TYPE.traveller) && <Book cardInfo={false} />}
          </div>
          <div className="trip">
            {!welcomePopup && <Trip
              auth={auth}
              defaultTrip={defaultTrip}
              allTrips={allTrips}
              selectTrip={selectTrip}
              updateTripName={updateTripName}
              createNewTrip={createNewTrip}
              history={history}
            />}
          </div>
          <div className="updates">
            <div className="updatedate">
              <ul className="updateList">
                <li className="bell">{notification}</li>
                <li className="addUser">
                  {addTraveler}
                </li>
                <li className="info">
                  {currentTripPrefrance}
                </li>
              </ul>
              <div className="profile">
                {editProfile}
              </div>
            </div>
          </div>
        </div>
        <div className="tripHeader Dashboard_Mobile">
          <div className="book">
            {(auth.defaultTripId !== '') && (auth.userType === USER_TYPE.admin) && <div> <div onClick={() => { history.goBack(); }} role="button" tabIndex={0} className="backIcon"><img src={images.backIcon} className="bookImg" alt="book" /></div><Notification /></div>}
            {(auth.defaultTripId !== '') && (auth.userType === USER_TYPE.agent) && <div onClick={() => { history.goBack(); }} role="button" tabIndex={0} className="backIcon"><img src={images.backIcon} className="bookImg" alt="book" /></div>}
            {(auth.defaultTripId === '') && (auth.userType === USER_TYPE.agent) && <Notification />}
            {(auth.userType === USER_TYPE.traveller) && <Notification />}
          </div>
          <div className="trip">
            <Trip
              auth={auth}
              defaultTrip={defaultTrip}
              allTrips={allTrips}
              selectTrip={selectTrip}
              updateTripName={updateTripName}
              createNewTrip={createNewTrip}
              history={history}
            />
          </div>
          <div className="updates">
          </div>
        </div>
        <MobileMenu
            defaultTrip={defaultTrip}
            editProfile={editProfile}
            currentTripPrefrance={currentTripPrefrance}
            addTraveler={addTraveler}
            history={history}
            auth={auth}
          />
      </div>
    );
  }
}

TripDbheader.propTypes = {
  editProfileOpen: PropTypes.bool,
  profileData: PropTypes.object,
  onClick: PropTypes.func,
  history: PropTypes.object,
  createNewTrip: PropTypes.func,
  updateTrip: PropTypes.func,
  allTrips: PropTypes.array,
  updateTripName: PropTypes.func,
  defaultTrip: PropTypes.object,
  selectTrip: PropTypes.func,
  auth: PropTypes.object,
  updateProfilePicture: PropTypes.func,
  updateData: PropTypes.func,
  welcomePopup: PropTypes.bool,
};

export default TripDbheader;
