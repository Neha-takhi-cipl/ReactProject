/**
*
* TripChecklist
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { ITINERARY_TYPE } from 'appConfig';
import messages from './messages';
import images from '../../../images';
import './style/style.css';

class TripChecklist extends React.Component { // eslint-disable-line react/prefer-stateless-function
  isZeroCheck = (value) => {
    let tempValue = value;
    if (!tempValue || (tempValue === '')) {
      tempValue = '-----   ';
    }
    return tempValue;
  }
  render() {
    const {
      itinerary,
      bookAction,
      editAction,
    } = this.props;
    return (
      <div>{(itinerary.name === ITINERARY_TYPE.flights) && <div className="checkList">
        <div className="tripPic" role="button" tabIndex={0} onClick={() => editAction(itinerary, ITINERARY_TYPE.flights)} >
          <img className="mainIcon" src={images.itiFlights} alt="itiFlights" />
        </div>
        <div className="itineraryTime">
          <p className="Time"><FormattedMessage {...messages.Depart} /><span> {this.isZeroCheck(itinerary.miscellaneous.departTime)} </span>
            <span className="timeZone"> {this.isZeroCheck(itinerary.miscellaneous.timeZone)}</span></p>
          <p className="Hours"> {this.isZeroCheck(itinerary.miscellaneous.flightDuration)} </p>
        </div>
        <div className="Listing">
          <ul>
            <li>{`${this.isZeroCheck(itinerary.miscellaneous.locationFrom)} - ${this.isZeroCheck(itinerary.miscellaneous.locationTo)}`}</li>
            <li>{`$${this.isZeroCheck(itinerary.miscellaneous.totalCost)}`}</li>
          </ul>
        </div>
        <div role="button" tabIndex={0} onClick={() => bookAction(itinerary)} className={itinerary.book ? 'checkBox greenBackground' : 'checkBox grayBackground'}>
          <img className="checkBoxIn" src={itinerary.book ? images.checkBooked : images.uncheckBook} alt="box" />
          <span className="bookLabel">{itinerary.book ? 'Booked' : 'Book'}</span>
        </div>
      </div>}
        {(itinerary.name === ITINERARY_TYPE.accommodation) && <div className="checkList">
          <div className="tripPic" role="button" tabIndex={0} onClick={() => editAction(itinerary, ITINERARY_TYPE.accommodation)}>
            <img className="mainIcon" src={images.itiAccom} alt="itiFlights" />
            {(itinerary.miscellaneous.duration === '1') && <img className="checkoutBack" src={images.checkoutBack} alt="itiFlights" />}
          </div>
          <div className="itineraryTime">
            <p className="Time">
              {(itinerary.miscellaneous.duration === '1') ? <FormattedMessage {...messages.checkOut} /> : <FormattedMessage {...messages.checkIn} />}
              {(itinerary.miscellaneous.duration === '1') ? <span> {this.isZeroCheck(itinerary.miscellaneous.checkOutTime)} </span> : <span> {this.isZeroCheck(itinerary.miscellaneous.checkInTime)} </span>}
              <span className="timeZone"> {(itinerary.miscellaneous.duration === '1') ? this.isZeroCheck(itinerary.miscellaneous.checkOutTimeZone) : this.isZeroCheck(itinerary.miscellaneous.timeZone)}</span></p>
          </div>
          <div className="Listing">
            <p className="Name">{this.isZeroCheck(itinerary.miscellaneous.title)}</p>
            <ul>
              <li>{this.isZeroCheck(itinerary.miscellaneous.address)}</li>
              {(itinerary.miscellaneous.duration !== '1') && <li>$ {this.isZeroCheck(itinerary.miscellaneous.totalCost)}</li>}
            </ul>
          </div>
          {(itinerary.miscellaneous.duration !== '1') && <div role="button" tabIndex={0} onClick={() => bookAction(itinerary)} className={itinerary.book ? 'checkBox greenBackground' : 'checkBox grayBackground'}>
            <img className="checkBoxIn" src={itinerary.book ? images.checkBooked : images.uncheckBook} alt="box" />
            <span className="bookLabel">{itinerary.book ? 'Booked' : 'Book'}</span>
          </div>}
        </div>}
        {(itinerary.name === ITINERARY_TYPE.transport) && <div className="checkList">
          <div className="tripPic" role="button" tabIndex={0} onClick={() => editAction(itinerary, ITINERARY_TYPE.transport)}>
            <img className="mainIcon" src={images.itiTransport} alt="itiFlights" />
          </div>
          <div className="itineraryTime">
            <p className="Time"><FormattedMessage {...messages.Depart} /><span> {this.isZeroCheck(itinerary.miscellaneous.departTime)} </span>
              <span className="timeZone"> {this.isZeroCheck(itinerary.miscellaneous.timeZone)}</span></p>
            <p className="Hours"> {this.isZeroCheck(itinerary.miscellaneous.duration)} </p>
          </div>
          <div className="Listing">
            <p className="Name">{this.isZeroCheck(itinerary.miscellaneous.transportType)}</p>
            <ul>
              <li>{`${this.isZeroCheck(itinerary.miscellaneous.locationFrom)} - ${this.isZeroCheck(itinerary.miscellaneous.locationTo)}`}</li>
              <li>{`$${this.isZeroCheck(itinerary.miscellaneous.totalCost)}`}</li>
            </ul>
          </div>
          <div role="button" tabIndex={0} onClick={() => bookAction(itinerary)} className={itinerary.book ? 'checkBox greenBackground' : 'checkBox grayBackground'}>
            <img className="checkBoxIn" src={itinerary.book ? images.checkBooked : images.uncheckBook} alt="box" />
            <span className="bookLabel">{itinerary.book ? 'Booked' : 'Book'}</span>
          </div>
        </div>}
        {(itinerary.name === ITINERARY_TYPE.activities) && <div className="checkList">
          <div className="tripPic" role="button" tabIndex={0} onClick={() => editAction(itinerary, ITINERARY_TYPE.activities)}>
            <img className="mainIcon" src={images.itiActivity} alt="itiFlights" />
          </div>
          <div className="itineraryTime">
            <p className="Time">
              <span>{this.isZeroCheck(itinerary.miscellaneous.startTime)} </span>
              <span className="timeZone"> {this.isZeroCheck(itinerary.miscellaneous.timeZone)}</span>
            </p>
          </div>
          <div className="Listing">
            <p className="Name">{this.isZeroCheck(itinerary.miscellaneous.title)}</p>
            <ul>
              <li> {this.isZeroCheck(itinerary.miscellaneous.location)} </li>
              <li>{`$${this.isZeroCheck(itinerary.miscellaneous.totalCost)}`}</li>
            </ul>
          </div>
          <div role="button" tabIndex={0} onClick={() => bookAction(itinerary)} className={itinerary.book ? 'checkBox greenBackground' : 'checkBox grayBackground'}>
            <img className="checkBoxIn" src={itinerary.book ? images.checkBooked : images.uncheckBook} alt="box" />
            <span className="bookLabel">{itinerary.book ? 'Booked' : 'Book'}</span>
          </div>
        </div>}
        {(itinerary.name === ITINERARY_TYPE.other) && <div className="checkList">
          <div className="tripPic" role="button" tabIndex={0} onClick={() => editAction(itinerary, ITINERARY_TYPE.other)}>
            <img className="mainIcon" src={images.itiOther} alt="itiFlights" />
          </div>
          <div className="itineraryTime">
            <p className="Time"><span>{this.isZeroCheck(itinerary.miscellaneous.startTime)} </span>
              <span className="timeZone"> {this.isZeroCheck(itinerary.miscellaneous.timeZone)}</span></p>
            <p className="Hours"> {this.isZeroCheck(itinerary.miscellaneous.duration)} </p>
          </div>
          <div className="Listing">
            <p className="Name">{this.isZeroCheck(itinerary.miscellaneous.title)}</p>
            <ul>
              <li> {this.isZeroCheck(itinerary.miscellaneous.location)} </li>
              <li>{`$${this.isZeroCheck(itinerary.miscellaneous.totalCost)}`}</li>
            </ul>
          </div>
          <div role="button" tabIndex={0} onClick={() => bookAction(itinerary)} className={itinerary.book ? 'checkBox greenBackground' : 'checkBox grayBackground'}>
            <img className="checkBoxIn" src={itinerary.book ? images.checkBooked : images.uncheckBook} alt="box" />
            <span className="bookLabel">{itinerary.book ? 'Booked' : 'Book'}</span>
          </div>
        </div>}
      </div>);
  }
}

TripChecklist.propTypes = {
  itinerary: PropTypes.object,
  bookAction: PropTypes.func,
  editAction: PropTypes.func,
};

export default TripChecklist;
