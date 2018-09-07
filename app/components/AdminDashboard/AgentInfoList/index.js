/**
*
* AgentInfoList
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { getInitials } from 'appFunctions';
import images from 'images';
import AgentInfo from './../AgentInfo';
import messages from './messages';
import './style/style.css';

class AgentInfoList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      show: false,
      selectedAgent: {},
    };
  }
  toggle = () => {
    this.setState({
      show: !this.state.show,
      selectedAgent: {},
    });
  }
  checkblankValue = (value) => {
    let tempVal = value;
    if (value === '' || !value) {
      tempVal = 'NA';
    }
    return tempVal;
  }
  editAgent = (item) => {
    this.setState({
      selectedAgent: item,
      show: !this.state.show,
    });
  }
  render() {
    const {
      agentsdata,
      addAgentAction,
      updateAgentAction,
      closeLeftSideBar,
      agentResponse,
      uploadPicture,
      pictureResponse,
    } = this.props;
    const {
      selectedAgent,
    } = this.state;
    const viewOne = (<div>
      <div className="headerWrap" >
        <div role="button" tabIndex={0} onClick={closeLeftSideBar} className="BackArrow"><img src={images.MobBack} alt="backIcon" /></div>
        <div role="button" tabIndex={0} onClick={this.toggle} className="AgentInfo_add_btn">ADD</div>
      </div>
      {this.state.show && <div>
        <AgentInfo
          toggle={this.toggle}
          agentdata={selectedAgent}
          addAgentAction={addAgentAction}
          updateAgentAction={updateAgentAction}
          agentResponse={agentResponse}
          uploadPicture={uploadPicture}
          pictureResponse={pictureResponse}
        />
      </div>}
      {!this.state.show && agentsdata.map((item) => (<div key={item._id} className="AgentInfoList clearBoth">
        <div className="topPart">
          <div className="leftPart">
            <label htmlFor="file-input" className="inputfile">
              {((item.picture !== undefined) && (item.picture !== '')) ? <img className="profilepic" src={item.picture} alt="Profile" /> : <div ><p >{item.fullName !== '' ? getInitials(item.fullName) : ''}</p></div>}
            </label>
          </div>
          <div className="RightPart">
            <p className="Agentinfo_para"><FormattedMessage {...messages.Agentinfo} /></p>
            <div className="groupForm">
              <label htmlFor="Name"><FormattedMessage {...messages.name} />:</label>
              <p className="formInput capitlize">{this.checkblankValue(item.fullName)}</p>
            </div>
            <div className="groupForm">
              <label htmlFor="From"><FormattedMessage {...messages.From} />:</label>
              <p className="formInput">{this.checkblankValue(item.from)}</p>
            </div>
          </div>
        </div>
        <div className="expertise">
          <p className="exp_Para" ><FormattedMessage {...messages.Expertise} /></p>
          <div className="groupForm">
            <label htmlFor="Password"><FormattedMessage {...messages.Locations} />:</label>
            <p className="formInput">{this.checkblankValue(item.location)}</p>
          </div>
          <div className="groupForm">
            <label htmlFor="Password"><FormattedMessage {...messages.Activites} />:</label>
            <p className="formInput">{this.checkblankValue(item.activity)}</p>
          </div>
        </div>
        <div onClick={() => { this.editAgent(item); }} role="button" tabIndex={0} className="bottomPart">
          <input type="submit" value="Edit" className="confirm" />
        </div>
      </div>))}
    </div>);
    return (
      <div>
        <div className="AgentInfoListing desktop">
          {viewOne}
        </div>
        <div className="AgentInfoListing mobile">
          {viewOne}
        </div>
      </div>
    );
  }
}

AgentInfoList.propTypes = {
  agentsdata: PropTypes.array,
  addAgentAction: PropTypes.func,
  updateAgentAction: PropTypes.func,
  closeLeftSideBar: PropTypes.func,
  agentResponse: PropTypes.object,
  uploadPicture: PropTypes.func,
  pictureResponse: PropTypes.object,
};

export default AgentInfoList;
