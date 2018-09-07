/**
*
* HomeButton
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './HomeButton.css';
class HomeButton extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="homebutton" {...this.props} >
        {this.props.children}
      </div>
    );
  }
}
HomeButton.propTypes = {
  children: PropTypes.object,
};
export default HomeButton;
