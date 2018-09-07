/**
*
* Agents
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import messages from './messages';
import './style/style.css';
import AgentInfoList from './../AgentInfoList';

class Agents extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
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
    const {
      agentsdata,
      addAgentAction,
      updateAgentAction,
      agentResponse,
      uploadPicture,
      pictureResponse,
    } = this.props;

    return (
      <div className="Agents">
        <div role="button" tabIndex={0} onClick={this.toggle} className="Heading">
          <FormattedMessage {...messages.Agents} />
        </div>
        {this.state.show && <div className="AgentInfo">
          <AgentInfoList
            closeLeftSideBar={this.toggle}
            agentsdata={agentsdata}
            addAgentAction={addAgentAction}
            updateAgentAction={updateAgentAction}
            agentResponse={agentResponse}
            uploadPicture={uploadPicture}
            pictureResponse={pictureResponse}
          />
        </div>}
      </div>
    );
  }
}

Agents.propTypes = {
  agentsdata: PropTypes.array,
  addAgentAction: PropTypes.func,
  updateAgentAction: PropTypes.func,
  agentResponse: PropTypes.object,
  uploadPicture: PropTypes.func,
  pictureResponse: PropTypes.object,
};

export default Agents;
