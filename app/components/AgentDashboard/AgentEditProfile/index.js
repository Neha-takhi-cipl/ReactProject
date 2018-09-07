/**
*
* AgentEditProfile
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import LogoutDialog from 'components/LogoutDialog';
import auth from 'utils/auth';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import images from '../../../images';
import './style/style.css';
// import UserPopup from '../../UserPopup';

class AgentEditProfile extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      logoutModal: false,
    };
  }
  toggle = () => {
    this.setState({
      show: !this.state.show,
    });
  }
  logout = () => {
    const { history } = this.props;
    auth.clearAppStorage();
    history.push('/');
  }
  closeLogoutModal = () => {
    this.setState({ logoutModal: !this.state.logoutModal });
  }
  render() {
    const hide = {
      display: !this.state.show ? 'none' : 'block',
    };
    return (
      <div>
        <div className="AgentEditProfile desktop">
          <LogoutDialog visible={this.state.logoutModal} closeLogoutModal={this.closeLogoutModal} logout={this.logout} />
          <div onClick={this.toggle} role="button" tabIndex={0} className="profilePic">
            <img className="profilepic" src={images.userPic} alt="userPic" />
          </div>
          <div style={hide} className="dropDown">
            <ul>
              <li><button><FormattedMessage {...messages.editProfile} /></button></li>
              <li><button onClick={this.closeLogoutModal} ><FormattedMessage {...messages.logout} /></button></li>
            </ul>
          </div>
        </div>

        <div className="AgentEditProfile mobile">
          {/* <LogoutDialog visible={this.state.logoutModal} closeLogoutModal={this.closeLogoutModal} logout={this.logout} /> */}
          <div onClick={this.toggle} role="button" tabIndex={0}>
            <div className="profilePic">
              <img className="profilepic" src={images.userPic} alt="userPic" />
            </div>
            <span className="NavList">My Profile</span>
          </div>
          {/* <div style={hide} className="dropDown">
            <div><UserPopup /></div>
          </div> */}
        </div>
      </div>
    );
  }
}

AgentEditProfile.propTypes = {
  history: PropTypes.object,
};

export default AgentEditProfile;
