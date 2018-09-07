/**
*
* Itinerary
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import images from 'images';
import { FormattedMessage } from 'react-intl';
import { ITINERARY_TYPE } from 'appConfig';
import messages from './messages';
import './style/style.css';

class Itinerary extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="itineraties" >
        <ul>
          <li>
            <div onClick={() => { this.props.formName(ITINERARY_TYPE.flights); }} role="button" tabIndex={0}>
              <p className="itName"><FormattedMessage {...messages.Flights} /></p>
              <div className="itImg"><img className="itFlight" src={images.itiFlights} alt="flights" /></div>
            </div>
          </li>
          <li>
            <div onClick={() => { this.props.formName(ITINERARY_TYPE.accommodation); }} role="button" tabIndex={0}>
              <p className="itName"><FormattedMessage {...messages.Accom} /></p>
              <div className="itImg"><img className="itAccom" src={images.itiAccom} alt="Accom" /></div>
            </div>
          </li>
          <li>
            <div onClick={() => { this.props.formName(ITINERARY_TYPE.transport); }} role="button" tabIndex={0}>
              <p className="itName"><FormattedMessage {...messages.Transport} /></p>
              <div className="itImg"><img className="itTransport" src={images.itiTransport} alt="Transport" /></div>
            </div>
          </li>
          <li>
            <div onClick={() => { this.props.formName(ITINERARY_TYPE.activities); }} role="button" tabIndex={0}>
              <p className="itName"><FormattedMessage {...messages.Activity} /></p>
              <div className="itImg"><img className="itActivity" src={images.itiActivity} alt="Activity" /></div>
            </div>
          </li>
          <li>
            <div onClick={() => { this.props.formName(ITINERARY_TYPE.other); }} role="button" tabIndex={0}>
              <p className="itName"><FormattedMessage {...messages.Other} /></p>
              <div className="itImg"><img className="itOther" src={images.itiOther} alt="Other" /></div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

Itinerary.propTypes = {
  formName: PropTypes.func.isRequired,
};

export default Itinerary;
