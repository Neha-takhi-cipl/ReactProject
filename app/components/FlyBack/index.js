/**
*
* FlyBack
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class FlyBack extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <a href="/" className="btn">
        <button type="submit"><FormattedMessage {...messages.header} /></button>
      </a>
    );
  }
}

FlyBack.propTypes = {

};

export default FlyBack;
