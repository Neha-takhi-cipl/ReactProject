/**
*
* AddTraveler
*
*/

import React from 'react';

import { BASE_URL } from 'appConfig';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import images from 'images';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { getInitials } from 'appFunctions';
import ProfileInfo from 'components/ProfileInfo';
import messages from './messages';
import './style/style.css';

class AddTraveler extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      copied: false,
      showDetails: false,
    };
  }
  toggle = () => {
    this.setState({
      show: !this.state.show,
      copied: false,
      showDetails: false,
    });
  }
  toggleDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails,
    });
  }
  render() {
    const { defaultTrip } = this.props;
    const {
      copied,
      showDetails,
    } = this.state;
    const inviteURL = (defaultTrip && defaultTrip._id) ? `${BASE_URL}/invite/${defaultTrip._id}` : '';
    const isAgent = (defaultTrip && defaultTrip.assignedTo && defaultTrip.assignedTo.length > 0);
    const Users = (defaultTrip && defaultTrip.invitedFriend && defaultTrip.invitedFriend.length) && defaultTrip.invitedFriend.length;
    const joinedUsers = isAgent ? (Users + 1) : Users;
    const copyLink = (<div className="copyLink">
      <p><FormattedMessage {...messages.copy_share} /></p>
      <input value={inviteURL} readOnly type="text" className="linkInput" />
      <CopyToClipboard
        text={inviteURL}
        onCopy={() => this.setState({ copied: true })}
      >
        <input type="submit" value="copy" className="copy" />
      </CopyToClipboard>
      <span style={copied ? { visibility: 'visible' } : { visibility: 'hidden' }} className="textOne">Copied</span>
    </div>);
    const joinedMamber = (<div className={(joinedUsers > 0) ? 'joined' : 'centerContent joined'} >
      {isAgent && showDetails && <div className="detailsWrapper"><button className="backIconWrapper" onClick={this.toggleDetails} ><img className="backIcon" src={images.whiteBack} alt="Back" /></button>{ProfileInfo(defaultTrip.assignedTo[0])}</div>}
      {(joinedUsers > 0) ? <span className="joinedCount">{joinedUsers}<span>&nbsp;<FormattedMessage {...messages.Joined} /></span></span> : <p className="texTwo"><FormattedMessage {...messages.inviteLabel} /></p>}
      <span className="joinedMember">
        <ul>
          <li className="ajoined">
            {isAgent && <div role="button" tabIndex={0} onClick={this.toggleDetails} className="joinedPic"><img src={defaultTrip.assignedTo[0].picture} alt="userPic1" /></div>}
            {isAgent && <p className="agent"><FormattedMessage {...messages.Agent} /></p>}
          </li>
          {(Users > 0) && defaultTrip.invitedFriend.map((item) => (<li key={item._id} className="mJoined"><div className="joinedPic">{((item.picture !== undefined) && (item.picture !== '')) ? <img src={item.picture} alt="Profile" /> : <p >{item.fullName !== '' ? getInitials(item.fullName) : ''}</p>}</div></li>))}
        </ul>
      </span>
    </div>);
    return (
      <div>
        <div className="addTraveler desktop">
          <div onClick={this.toggle} role="button" tabIndex={0}>
            <img className="addImg" src={images.Adduser} alt="Adduser" />
          </div>
          {this.state.show && <div className="addDropdown">
            {joinedMamber}
            {copyLink}
          </div>}
        </div>
        <div className="addTraveler mobile">
          <div onClick={this.toggle} role="button" tabIndex={0}>
            <img className="addImg" src={images.adduser_mobile} alt="Adduser" />
            <span className="NavList"><FormattedMessage {...messages.Addusers} /></span>
          </div>
          {this.state.show && <div className="addDropdown">
            <button onClick={this.toggle} className="BackArrow"><img src={images.MobBack} alt="backIcon" /></button>
            <p className="popupHeading"><FormattedMessage {...messages.Adduserstrip} /></p>
            {joinedMamber}
            {copyLink}
          </div>}
        </div>
      </div>
    );
  }
}

AddTraveler.propTypes = {
  defaultTrip: PropTypes.object,

};

export default AddTraveler;
