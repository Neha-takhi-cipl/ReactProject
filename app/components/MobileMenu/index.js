/**
*
* MobileMenu
*
*/

import React from 'react';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { slide as Menu } from 'react-burger-menu';
import PropTypes from 'prop-types';
import Dialog from 'rc-dialog';
import authLib from 'utils/auth';
import { USER_TYPE } from 'appConfig';
import messages from './messages';
import Book from './../TripDashboard/Book';
import './style/style.css';

class MobileMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      logoutModal: false,
    };
  }
  logout = () => {
    authLib.clearAppStorage();
    this.props.history.push('/');
  }
  closeLogoutModal = () => {
    this.setState({ logoutModal: !this.state.logoutModal });
  }
  render() {
    const {
      defaultTrip,
      addTraveler,
      currentTripPrefrance,
      editProfile,
      auth,
    } = this.props;
    return (
      <Menu right >
        <Dialog title={'Logout Here'} onClose={this.closeLogoutModal} visible={this.state.logoutModal}>
          <p><FormattedMessage {...messages.ConformationMsg} /></p>
          <div className="rc-dialog-footer">
            <div className="rc-scaller"></div>
            <button className="rc-btn rc-btn-ghost rightSpace" onClick={this.closeLogoutModal} type="ghost"><FormattedMessage {...messages.Cancel} /></button>
            <button className="rc-btn rc-btn-primary" onClick={this.logout} type="primary"><FormattedMessage {...messages.logout} /></button>
          </div>
        </Dialog>
        <span className="TripName">{defaultTrip && defaultTrip.tripName}</span>
        <ul className="MobileMenu">
          <li className="MobileMenulist">{editProfile}</li>
          <li className="MobileMenulist">{currentTripPrefrance}</li>
          <li className="MobileMenulist">{addTraveler}</li>
        </ul>
        <div className="MobileBook">
          <div>
            {auth && (auth.defaultTripId !== '') && (auth.userType === USER_TYPE.admin) && <Book cardInfo />}
            {auth && (auth.userType === USER_TYPE.traveller) && <Book cardInfo={false} />}
          </div>
        </div>
        <div role="button" tabIndex={0} onClick={this.closeLogoutModal} className="logout">logout</div>
      </Menu>
    );
  }
}

MobileMenu.propTypes = {
  addTraveler: PropTypes.object,
  currentTripPrefrance: PropTypes.object,
  editProfile: PropTypes.object,
  history: PropTypes.object,
  defaultTrip: PropTypes.object,
  auth: PropTypes.object,
};

export default MobileMenu;
