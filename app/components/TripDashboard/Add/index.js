/**
*
* Add
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import './style/style.css';

class Add extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="addbox">
        <div className="add">{this.props.children}</div>
      </div>
    );
  }
}

Add.propTypes = {
  children: PropTypes.object,
};

export default Add;
