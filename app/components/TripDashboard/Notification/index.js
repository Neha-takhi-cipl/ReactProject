/**
*
* Notification
*
*/

import React from 'react';
// import styled from 'styled-components';
// import { FormattedMessage } from 'react-intl';
import images from 'images';
// import messages from './messages';
import './style/style.css';

class Notification extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  toggle = () => {
    this.setState({
      show: !this.state.show,
    });
  }
  render() {
    const hide = {
      display: !this.state.show ? 'none' : 'block',
    };
    return (
      <div>
        <div className="Notifications desktop">
          <div onClick={this.toggle} role="button" tabIndex={0}>
            <img className="addImg" src={images.Bell} alt="bell" />
          </div>
          <div style={hide} className="addDropdown">
            <p className="topHeading">Updates</p>
            <ul>
              <li><img className="addImg" src={images.chat} alt="bell" /> 8 new messages</li>
              <li><img className="addImg" src={images.changes} alt="bell" /> 3 Itinerary changes</li>
              <li><img className="addImg" src={images.Info} alt="bell" /> Trip preferances updated</li>
              <li><img className="addImg" src={images.Adduser} alt="bell" /> Sarah smith joined</li>
            </ul>
          </div>
        </div>

        <div className="Notifications mobile">
          <div onClick={this.toggle} role="button" tabIndex={0}>
            <img className="addImg" src={images.Bell} alt="bell" />
          </div>
          <div style={hide} className="addDropdown">
            <p className="topHeading">Updates</p>
            <ul>
              <li ><img className="addImg" src={images.chat} alt="bell" /> 8 new messages</li>
              <li ><img className="addImg" src={images.changes} alt="bell" /> 3 Itinerary changes</li>
              <li ><img className="addImg" src={images.Info} alt="bell" /> Trip preferances updated</li>
              <li ><img className="addImg" src={images.Adduser} alt="bell" /> Sarah smith joined</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

Notification.propTypes = {

};

export default Notification;
