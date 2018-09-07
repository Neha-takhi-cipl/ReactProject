/**
*
* TripPreferenceBottom
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './style/style.css';

class TripPreferenceBottom extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { updates, onClick } = this.props;
    if (!updates) {
      return (
        <div role="button" tabIndex={0} onClick={onClick} className="TripPreferenceBottom greyBackground">
          <FormattedMessage {...messages.getjob} />
        </div>
      );
    }
    return (
      <div className={updates > 0 ? 'TripPreferenceBottom orangeBackground' : 'TripPreferenceBottom'} role="button" tabIndex={0} onClick={onClick}>
        {(updates > 0) && <span>{`${updates}`} <FormattedMessage {...messages.header} /></span>}
      </div>
    );
  }
}

TripPreferenceBottom.propTypes = {
  updates: PropTypes.any,
  onClick: PropTypes.func,
};

export default TripPreferenceBottom;
