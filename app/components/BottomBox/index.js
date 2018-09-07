/**
*
* Add
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import './style/style.css';

class BottomBox extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="addbox">
        <div className="add">{this.props.children}</div>
      </div>
    );
  }
}

BottomBox.propTypes = {
  children: PropTypes.node,
};

export default BottomBox;
