/**
*
* PersonalTrip
*
*/

import React from 'react';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './style/style.css';

class PersonalTrip extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className="PersonalTrip" >
          <span><FormattedMessage {...messages.PersonalTrip} /></span>
        </div>
      </div>
    );
  }
}

PersonalTrip.propTypes = {

};

export default PersonalTrip;
