/**
*
* EditProfile
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Dialog from 'rc-dialog';
import auth from 'utils/auth';
import messages from './messages';
import UserPopup from '../../UserPopup';
import { getInitials } from '../../../appFunctions';
import './style/style.css';

class EditProfile extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      logoutModal: false,
    };
  }
  toggle = () => {
    if (!this.props.editProfileOpen) {
      this.setState({ show: !this.state.show });
    } else {
      this.props.onClick();
    }
  }
  openEditProfile = () => {
    this.props.onClick();
    this.toggle();
  }
  logout = () => {
    auth.clearAppStorage();
    this.props.history.push('/');
  }
  closeLogoutModal = () => {
    this.setState({ logoutModal: !this.state.logoutModal });
  }
  render() {
    const {
      profileData,
      updateProfilePicture,
      updateData,
    } = this.props;
    const nameInitials = (profileData && profileData.fullName) ? getInitials(profileData.fullName) : '';
    return (
      <div>
        <div className="EditProfile desktop">
          <Dialog title={'Logout Here'} onClose={this.closeLogoutModal} visible={this.state.logoutModal}>
            <p><FormattedMessage {...messages.ConformationMsg} /></p>
            <div className="rc-dialog-footer">
              <div className="rc-scaller"></div>
              <button className="rc-btn rc-btn-ghost rightSpace" onClick={this.closeLogoutModal} type="ghost"><FormattedMessage {...messages.Cancel} /></button>
              <button className="rc-btn rc-btn-primary" onClick={this.logout} type="primary"><FormattedMessage {...messages.logout} /></button>
            </div>
          </Dialog>
          <div onClick={this.toggle} role="button" tabIndex={0} className="profilePicHeader">
            {(profileData && profileData.picture) ? <img className="profilepic" src={profileData.picture} alt="userPic" /> : <p className="userPicHeader">{nameInitials}</p>}
          </div>
          {this.state.show && <div className="dropDown">
            <ul>
              <li><button onClick={this.openEditProfile}><FormattedMessage {...messages.editProfile} /></button></li>
              <li><button onClick={this.closeLogoutModal}><FormattedMessage {...messages.logout} /></button></li>
            </ul>
          </div>}
        </div>
        <div className="EditProfile mobile">
          <div onClick={this.toggle} role="button" tabIndex={0}>
            <div className="profilePic">
              {(profileData && profileData.picture) ? <img className="profilepic" src={profileData.picture} alt="userPic" /> : <div ><span className="userPic">{nameInitials}</span></div>}
            </div>
            <span className="NavList"><FormattedMessage {...messages.MyProfile} /></span>
          </div>
          {this.state.show && <div className="dropDown">
            <div>
              <UserPopup
                profileData={profileData}
                updateProfilePicture={updateProfilePicture}
                updateData={(data) => { this.toggle(); updateData(data); }}
                cancel={this.toggle}
              />
            </div>
          </div>}
        </div>
      </div>
    );
  }
}

EditProfile.propTypes = {
  onClick: PropTypes.func,
  history: PropTypes.object,
  profileData: PropTypes.object,
  editProfileOpen: PropTypes.bool,
  updateProfilePicture: PropTypes.func,
  updateData: PropTypes.func,
};

export default EditProfile;
