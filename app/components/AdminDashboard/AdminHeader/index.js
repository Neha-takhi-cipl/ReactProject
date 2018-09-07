/**
*
* AdminHeader
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './style/style.css';
import Agents from '../Agents';
import AdminEditProfile from '../AdminEditProfile';
import MobileMenu from '../MobileMenu';

class AdminHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      history,
      agentsdata,
      addAgentAction,
      updateAgentAction,
      agentResponse,
      uploadPicture,
      pictureResponse,
    } = this.props;
    const agents = (<Agents
      agentsdata={agentsdata}
      agentResponse={agentResponse}
      addAgentAction={addAgentAction}
      updateAgentAction={updateAgentAction}
      uploadPicture={uploadPicture}
      pictureResponse={pictureResponse}
    />);
    return (
      <div>
        <div className="AdminHeader Dashboard_Desktop">
          <div className="Agents">
            {agents}
          </div>
          <div className="Admin">
            <FormattedMessage {...messages.AdminDashboard} />
          </div>
          <div className="AgentEdit">
            <AdminEditProfile history={history} />
          </div>
        </div>
        <div className="AdminHeader Dashboard_Mobile">
          <div className="Admin">
            <FormattedMessage {...messages.AdminDashboard} />
          </div>
          <MobileMenu Agents={agents} history={history} />
        </div>
      </div>
    );
  }
}

AdminHeader.propTypes = {
  history: PropTypes.object,
  agentsdata: PropTypes.array,
  addAgentAction: PropTypes.func,
  updateAgentAction: PropTypes.func,
  agentResponse: PropTypes.object,
  uploadPicture: PropTypes.func,
  pictureResponse: PropTypes.object,
};

export default AdminHeader;
