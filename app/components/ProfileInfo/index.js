/**
*
* PrfileInfo
*
*/

import React from 'react';
// import styled from 'styled-components';
import { getInitials } from 'appFunctions';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './style/style.css';

function checkblankValue(value) {
  let tempVal = value;
  if (value === '' || !value) {
    tempVal = 'NA';
  }
  return tempVal;
}
function ProfileInfo(item) {
  return (
    <div key={item._id} className="ProfileInfo clearBoth">
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
            <p className="formInput capitlize">{checkblankValue(item.fullName)}</p>
          </div>
          <div className="groupForm">
            <label htmlFor="From"><FormattedMessage {...messages.From} />:</label>
            <p className="formInput">{checkblankValue(item.from)}</p>
          </div>
        </div>
      </div>
      <div className="expertise">
        <p className="exp_Para" ><FormattedMessage {...messages.Expertise} /></p>
        <div className="groupForm">
          <label htmlFor="Password"><FormattedMessage {...messages.Locations} />:</label>
          <p className="formInput">{checkblankValue(item.location)}</p>
        </div>
        <div className="groupForm">
          <label htmlFor="Password"><FormattedMessage {...messages.Activites} />:</label>
          <p className="formInput">{checkblankValue(item.activity)}</p>
        </div>
      </div>
    </div>
  );
}

ProfileInfo.propTypes = {

};

export default ProfileInfo;
