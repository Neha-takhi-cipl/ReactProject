/**
*
* DivClick
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


class DivClick extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

DivClick.propTypes = {
  children: PropTypes.object,
};

export default DivClick;
