/**
*
* BackButton
*
*/

import React from 'react';
// import styled from 'styled-components';

import images from '../../images';
import './Styles/styles.css';


class BackButton extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div {...this.props} >
        <img src={images.Back} className="backBtn" alt="Back" />
      </div>
    );
  }
}

BackButton.propTypes = {

};

export default BackButton;
