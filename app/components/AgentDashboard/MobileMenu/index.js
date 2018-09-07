/**
*
* MobileMenu
*
*/

import React from 'react';
// import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Dialog from 'rc-dialog';
import auth from 'utils/auth';
import messages from './messages';
import AgentEditProfile from '../AgentEditProfile';
// import PersonalTrip from '../PersonalTrip';
import './style/style.css';

class MobileMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      logoutModal: false,
    };
  }
  logout = () => {
    auth.clearAppStorage();
    this.props.history.push('/');
  }
  closeLogoutModal = () => {
    this.setState({ logoutModal: !this.state.logoutModal });
  }
  render() {
    const { history } = this.props;
    return (
      <Menu right >
        <Dialog title={'Logout Here'} onClose={this.closeLogoutModal} visible={this.state.logoutModal}>
          <p><FormattedMessage {...messages.ConformationMsg} /></p>
          <div className="rc-dialog-footer">
            <div className="rc-scaller"></div>
            <button className="rc-btn rc-btn-ghost" onClick={this.closeLogoutModal} type="ghost"><FormattedMessage {...messages.Cancel} /></button>
            <button className="rc-btn rc-btn-primary" onClick={this.logout} type="primary"><FormattedMessage {...messages.logout} /></button>
          </div>
        </Dialog>
        <ul className="MobileMenu">
          <li className="MobileMenulist"><AgentEditProfile history={history} /></li>
        </ul>
        <div className="MobileBook">
          {/* <div><PersonalTrip /></div> */}
        </div>
        <button type="button" onClick={this.closeLogoutModal} className="logout">logout</button>
      </Menu>
    );
  }
}

MobileMenu.propTypes = {
  // editProfileOpen: PropTypes.bool,
  // profileData: PropTypes.object,
  // onClick: PropTypes.func,
  history: PropTypes.object,
};

export default MobileMenu;
