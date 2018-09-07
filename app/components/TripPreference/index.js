/**
*
* TripPreference
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import images from 'images';
import messages from './messages';
import './style/style.css';


class TripPreference extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { tripData } = this.props;
    return (
      <div className="TripPreference">
        <div className="inviteDropdown desktop">
          <div className="leftInvite">
            <ul>
              <li className={(tripData && tripData.optionList && tripData.optionList.flight) ? 'green' : 'gray'}><div className="boxHeight"><img src={images.flight} alt="flight" /></div><FormattedMessage {...messages.Flights} /></li>
              <li className={(tripData && tripData.optionList && tripData.optionList.accomodation) ? 'green' : 'gray'}><div className="boxHeight"><img src={images.home} alt="accomodation" /></div><FormattedMessage {...messages.Accom} /></li>
              <li className={(tripData && tripData.optionList && tripData.optionList.activities) ? 'green' : 'gray'}><div className="boxHeight"><img src={images.activities} alt="activities" /></div><FormattedMessage {...messages.Activities} /></li>
            </ul>
            <div className="leftInput">
              <span className="label"><FormattedMessage {...messages.Budget} />:</span>
              <span className="value"><input type="text" readOnly="readOnly" value={tripData && tripData.totalBudget ? tripData.totalBudget : 'NA'} placeholder="" /></span>
            </div>
            <div className="leftInput">
              <span className="label"><FormattedMessage {...messages.travllers} />:</span>
              <span className="value"><input type="text" readOnly="readOnly" value={tripData && tripData.travelersCount ? tripData.travelersCount : 'NA'} placeholder="2" /></span>
            </div>
            <div className="formField_checkbox">
              <label htmlFor="Kids"><span><FormattedMessage {...messages.kids} /></span></label>
              <div className="checkUncheckIconWrap" >{(tripData && tripData.underFifteenTravellers) ? <img className="smallIcon" src={images.checkIconSmall} alt="CheckIcon" /> : <img className="smallIcon" src={images.uncheckIconSmall} alt="CheckIcon" />}</div>
            </div>
          </div>
          <div className="rightInvite">
            <p className="tripName">{tripData && tripData.tripName}</p>
            <p className="Flexible"><FormattedMessage {...messages.Flexible} /></p>
            <form>
              <div className="formField">
                <label htmlFor="where"><FormattedMessage {...messages.where} /></label>
                <input readOnly="readOnly" value={(tripData && tripData.tripDestination && tripData.tripDestination.location) ? tripData.tripDestination.location : 'NA'} type="text" className="inputTypeOne" placeholder="Melbourne to thailand" />
                <img className="unCheck" src={(tripData && tripData.tripDestination && tripData.tripDestination.flexible) ? images.check : images.uncheckGray} alt="Uncheck" />
              </div>
              <div className="formField">
                <label htmlFor="when"><FormattedMessage {...messages.when} /></label>
                <input readOnly="readOnly" value={(tripData && tripData.tripSchedule && tripData.tripSchedule.departureDate) ? tripData.tripSchedule.departureDate : 'NA'} type="text" className="inputTypeOne" placeholder="When..." />
                <img className="unCheck" src={(tripData && tripData.tripSchedule && tripData.tripSchedule.flexible) ? images.check : images.uncheckGray} alt="01/08/19 - 01/01/20" />
              </div>
              <div className="formField">
                <label htmlFor="other"><FormattedMessage {...messages.other} /></label>
                <input readOnly="readOnly" value={(tripData && tripData.otherDetails) ? tripData.tripSchedule.departureDate : 'NA'} type="text" className="inputTypeOne" placeholder="We want to fly first class!" />
              </div>
            </form>
          </div>
        </div>
        <div className="inviteDropdown mobile">
          <div className="tripNmaeWrap"><p className="tripName">{tripData && tripData.tripName}</p></div>
          <div className="leftInvite">
            <ul>
              {(tripData && tripData.optionList && tripData.optionList.flight) && <li><div className="boxHeight"><img src={images.flight} alt="flight" /></div></li>}
              {(tripData && tripData.optionList && tripData.optionList.accomodation) && <li><div className="boxHeight"><img src={images.home} alt="accomodation" /></div></li>}
              {(tripData && tripData.optionList && tripData.optionList.activities) && <li><div className="boxHeight"><img src={images.activities} alt="activities" /></div></li>}
            </ul>
            {/* <ul>
              <li className={(tripData && tripData.optionList && tripData.optionList.flight) ? 'green' : 'gray'}><div className="boxHeight"><img src={images.flight} alt="flight" /></div><FormattedMessage {...messages.Flights} /></li>
              <li className={(tripData && tripData.optionList && tripData.optionList.accomodation) ? 'green' : 'gray'}><div className="boxHeight"><img src={images.home} alt="accomodation" /></div><FormattedMessage {...messages.Accom} /></li>
              <li className={(tripData && tripData.optionList && tripData.optionList.activities) ? 'green' : 'gray'}><div className="boxHeight"><img src={images.activities} alt="activities" /></div><FormattedMessage {...messages.Activities} /></li>
            </ul> */}
            <div className="leftInviteBottom">
              <div>
                <span className="label">Budget:</span>
                <span className="value"><input type="text" readOnly="readOnly" value={tripData && tripData.totalBudget ? tripData.totalBudget : ''} placeholder="NA" /></span>
              </div>
              <div>
                <span className="label">Travllers:</span>
                <span className="value"><input type="text" readOnly="readOnly" value={tripData && tripData.travelersCount ? tripData.travelersCount : ''} placeholder="NA" /></span>
              </div>
              <div>
                <span className="label">Kids</span>
                <span className="value">{(tripData && tripData.underFifteenTravellers) ? 'YES' : 'NO'}</span>
              </div>
            </div>
          </div>
          <div className="rightInvite">
            <p className="Flexible"><FormattedMessage {...messages.Flexible} /></p>
            <form>
              <div className="formField">
                <label htmlFor="where"><FormattedMessage {...messages.where} /></label>
                <input readOnly="readOnly" value={(tripData && tripData.tripDestination && tripData.tripDestination.location) ? tripData.tripDestination.location : ''} type="text" className="inputTypeOne" placeholder="NA" />
                <img className="unCheck" src={(tripData && tripData.tripDestination && tripData.tripDestination.flexible) ? images.check : images.uncheckGray} alt="Uncheck" />
              </div>
              <div className="formField">
                <label htmlFor="when"><FormattedMessage {...messages.when} /></label>
                <input readOnly="readOnly" value={(tripData && tripData.tripSchedule && tripData.tripSchedule.departureDate) ? tripData.tripSchedule.departureDate : ''} type="text" className="inputTypeOne" placeholder="NA" />
                <img className="unCheck" src={(tripData && tripData.tripSchedule && tripData.tripSchedule.flexible) ? images.check : images.uncheckGray} alt="01/08/19 - 01/01/20" />
              </div>
              <div className="formField">
                <label htmlFor="other"><FormattedMessage {...messages.other} /></label>
                <input readOnly="readOnly" value={(tripData && tripData.otherDetails) ? tripData.tripSchedule.departureDate : ''} type="text" className="inputTypeOne" placeholder="NA" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

TripPreference.propTypes = {
  tripData: PropTypes.object,
};

export default TripPreference;
