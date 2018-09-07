/**
*
* TripDate
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import './style/style.css';

class TripDate extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { headerDate } = this.props;
    return (
      <div className="tripDate">
        {headerDate}
      </div>
    );
  }
}
TripDate.defaultProps = {
  headerDate: 'Fri 18 Dec 18',
};
TripDate.propTypes = {
  headerDate: PropTypes.string,
};

export default TripDate;
