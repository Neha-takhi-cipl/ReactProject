/**
*
* AgentHeader
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
// import PersonalTrip from '../PersonalTrip';
import AgentEditProfile from '../AgentEditProfile';
import MobileMenu from '../MobileMenu';
import './style/style.css';

class AgentHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { history } = this.props;
    return (
      <div>
        <div className="AgentHeader  Dashboard_Desktop">
          <div className="Personal">
            {/* <PersonalTrip history={history} /> */}
            {/* <MobileMenu /> */}
          </div>
          <div className="Agent">
            <FormattedMessage {...messages.AgentDashboard} />
          </div>
          <div className="AgentEdit">
            <AgentEditProfile history={history} />
          </div>
        </div>
        <div className="AgentHeader Dashboard_Mobile">
          <div className="Agent">
            <FormattedMessage {...messages.AgentDashboard} />
          </div>
          <MobileMenu
            history={history}
          />
        </div>
      </div>
    );
  }
}

AgentHeader.propTypes = {
  history: PropTypes.object,
};

export default AgentHeader;
