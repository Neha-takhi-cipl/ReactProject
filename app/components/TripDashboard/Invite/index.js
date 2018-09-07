/**
*
* Invite
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './style/style.css';
import images from '../../../images';

class Invite extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    const { defaultTrip } = this.props;
    this.state = {
      show: false,
      tripData: {
        tripName: defaultTrip && defaultTrip.tripName,
        id: defaultTrip && defaultTrip._id,
        flight: defaultTrip && defaultTrip.optionList && defaultTrip.optionList.flight ? defaultTrip.optionList.flight : false,
        accomodation: defaultTrip && defaultTrip.optionList && defaultTrip.optionList.accomodation ? defaultTrip.optionList.accomodation : false,
        activities: defaultTrip && defaultTrip.optionList && defaultTrip.optionList.activities ? defaultTrip.optionList.flight : false,
        where: defaultTrip && defaultTrip.optionList && defaultTrip.tripDestination.location ? defaultTrip.tripDestination.location : '',
        whereFlexible: defaultTrip && defaultTrip.optionList && defaultTrip.tripDestination.flexible ? defaultTrip.tripDestination.flexible : false,
        when: defaultTrip && defaultTrip.optionList && defaultTrip.tripSchedule.departureDate ? defaultTrip.tripSchedule.departureDate : '',
        whenFlexible: defaultTrip && defaultTrip.optionList && defaultTrip.tripSchedule.flexible ? defaultTrip.tripSchedule.flexible : false,
        totalbudget: defaultTrip && defaultTrip.totalBudget ? defaultTrip.totalBudget : '',
        travellers: defaultTrip && defaultTrip.travelersCount ? defaultTrip.travelersCount : '',
        kidsunder15: defaultTrip && defaultTrip.underFifteenTravellers ? defaultTrip.underFifteenTravellers : 0,
        otherDetails: defaultTrip && defaultTrip.otherDetails ? defaultTrip.otherDetails : '',
      },
    };
  }
  componentWillReceiveProps(nextProps) {
    const { defaultTrip } = nextProps;
    if (defaultTrip !== this.props.defaultTrip) {
      this.setState({
        tripData: {
          tripName: defaultTrip && defaultTrip.tripName,
          id: defaultTrip && defaultTrip._id,
          flight: defaultTrip && defaultTrip.optionList && defaultTrip.optionList.flight ? defaultTrip.optionList.flight : false,
          accomodation: defaultTrip && defaultTrip.optionList && defaultTrip.optionList.accomodation ? defaultTrip.optionList.accomodation : false,
          activities: defaultTrip && defaultTrip.optionList && defaultTrip.optionList.activities ? defaultTrip.optionList.flight : false,
          where: defaultTrip && defaultTrip.optionList && defaultTrip.tripDestination.location ? defaultTrip.tripDestination.location : '',
          whereFlexible: defaultTrip && defaultTrip.optionList && defaultTrip.tripDestination.flexible ? defaultTrip.tripDestination.flexible : false,
          when: defaultTrip && defaultTrip.optionList && defaultTrip.tripSchedule.departureDate ? defaultTrip.tripSchedule.departureDate : '',
          whenFlexible: defaultTrip && defaultTrip.optionList && defaultTrip.tripSchedule.flexible ? defaultTrip.tripSchedule.flexible : false,
          totalbudget: defaultTrip && defaultTrip.totalBudget ? defaultTrip.totalBudget : '',
          travellers: defaultTrip && defaultTrip.travelersCount ? defaultTrip.travelersCount : '',
          kidsunder15: defaultTrip && defaultTrip.underFifteenTravellers ? defaultTrip.underFifteenTravellers : 0,
          otherDetails: defaultTrip && defaultTrip.otherDetails ? defaultTrip.otherDetails : '',
        },
      });
    }
  }
  onChangeValue = (value, key) => {
    const { tripData } = this.state;
    const tripDataClone = { ...tripData };
    tripDataClone[key] = value;
    this.setState({ tripData: tripDataClone });
  }
  isZeroCheck = (value) => {
    let tempValue = value;
    if (!tempValue) {
      tempValue = '';
    }
    return tempValue;
  }
  toggle = () => {
    const { updateTrip } = this.props;
    this.setState({
      show: !this.state.show,
    });
    updateTrip(this.state.tripData);
  }
  submit = (e) => {
    e.preventDefault();
    const { updateTrip } = this.props;
    this.toggle();
    updateTrip(this.state.tripData);
  }
  render() {
    const {
      flight,
      accomodation,
      activities,
      where,
      whereFlexible,
      when,
      whenFlexible,
      totalbudget,
      travellers,
      kidsunder15,
      otherDetails,
    } = this.state.tripData;
    const hide = {
      display: !this.state.show ? 'none' : 'block',
    };
    return (
      <div>
        <div className="invite desktop">
          <div onClick={this.toggle} role="button" tabIndex={0}>
            <img className="infoImg" src={images.Info} alt="Info" />
          </div>
          <div style={hide} className="inviteDropdown">
            <div className="InnerinviteDropdown">
              <form onSubmit={this.submit}>
                <div className="leftInvite">
                  <ul>
                    <li className={flight ? 'green' : 'gray'}><div role="button" tabIndex={0} onClick={() => { this.onChangeValue(!flight, 'flight'); }} className="boxHeight"><img src={images.flight} alt="flight" /></div><FormattedMessage {...messages.Flights} /></li>
                    <li className={accomodation ? 'green' : 'gray'}><div role="button" tabIndex={0} onClick={() => { this.onChangeValue(!accomodation, 'accomodation'); }} className="boxHeight"><img src={images.home} alt="accomodation" /></div><FormattedMessage {...messages.Accom} /></li>
                    <li className={activities ? 'green' : 'gray'}><div role="button" tabIndex={0} onClick={() => { this.onChangeValue(!activities, 'activities'); }} className="boxHeight"><img src={images.activities} alt="activities" /></div><FormattedMessage {...messages.Activities} /></li>
                  </ul>
                  <div className="leftInput">
                    <span className="label"><FormattedMessage {...messages.Budget} />:</span>
                    <span className="value"><input value={this.isZeroCheck(totalbudget)} onChange={(evt) => { this.onChangeValue(evt.target.value, 'totalbudget'); }} type="text" placeholder="NA" /></span>
                  </div>
                  <div className="leftInput">
                    <span className="label"><FormattedMessage {...messages.travllers} />:</span>
                    <span className="value"><input value={this.isZeroCheck(travellers)} onChange={(evt) => { this.onChangeValue(evt.target.value, 'travellers'); }} type="text" placeholder="NA" /></span>
                  </div>
                  <div className="formField_checkbox">
                    <label htmlFor="Kids"><span><FormattedMessage {...messages.kids} /></span></label>
                    <div className="checkUncheckIconWrap" onClick={() => { this.onChangeValue(!kidsunder15, 'kidsunder15'); }} role="button" tabIndex={0} >{!kidsunder15 ? <img className="smallIcon" src={images.uncheckIconSmall} alt="CheckIcon" /> : <img className="smallIcon" src={images.checkIconSmall} alt="CheckIcon" />}</div>
                  </div>
                </div>
                <div className="rightInvite">
                  <p className="Flexible"><FormattedMessage {...messages.Flexible} /></p>

                  <div className="formField">
                    <label htmlFor="where"><FormattedMessage {...messages.where} /></label>
                    <input value={this.isZeroCheck(where)} onChange={(evt) => { this.onChangeValue(evt.target.value, 'where'); }} type="text" className="inputTypeOne" placeholder="NA" />
                    <div role="button" tabIndex={0} onClick={() => { this.onChangeValue(!whereFlexible, 'whereFlexible'); }}><img className="unCheck" src={whereFlexible ? images.check : images.uncheckGray} alt="Uncheck" /></div>
                  </div>
                  <div className="formField">
                    <label htmlFor="when"><FormattedMessage {...messages.when} /></label>
                    <input value={this.isZeroCheck(when)} onChange={(evt) => { this.onChangeValue(evt.target.value, 'when'); }} type="text" className="inputTypeOne" placeholder="NA" />
                    <div role="button" tabIndex={0} onClick={() => { this.onChangeValue(!whenFlexible, 'whenFlexible'); }}><img className="unCheck" src={whenFlexible ? images.check : images.uncheckGray} alt="Uncheck" /></div>
                  </div>
                  <div className="formField">
                    <label htmlFor="other"><FormattedMessage {...messages.other} /></label>
                    <input value={this.isZeroCheck(otherDetails)} onChange={(evt) => { this.onChangeValue(evt.target.value, 'otherDetails'); }} type="text" className="inputTypeOne" placeholder="NA" />
                  </div>
                </div>
                <button onClick={this.submit} type="submit" className="editBtn"><FormattedMessage {...messages.Edit} /></button>
              </form>
            </div>
            {/* <button onClick={() => { this.submit(); }} type="submit" className="editBtn"><FormattedMessage {...messages.Edit} /></button> */}
          </div>
        </div>
        <div className="invite mobile">
          <div onClick={this.toggle} role="button" tabIndex={0}>
            <img className="infoImg" src={images.mobile_info} alt="Info" />
            <span className="NavList">Trip Preferences</span>
          </div>
          <div style={hide} className="inviteDropdown">
            <form onSubmit={this.submit}>
              <div className="TopContainer">
                <button onClick={this.toggle} type="button" className="BackArrow"><img src={images.MobBack} alt="backIcon" /></button>
                <span className="TripPref"><FormattedMessage {...messages.Trippref} /></span>
                <button type="submit" className="EditBtnMob"><FormattedMessage {...messages.Edit} /></button>
              </div>
              <div className="InnerinviteDropdown">
                <div className="leftInvite">
                  <ul>
                    <li className={flight ? 'green' : 'gray'}><div role="button" tabIndex={0} onClick={() => { this.onChangeValue(!flight, 'flight'); }} className="boxHeight"><img src={images.flight} alt="flight" /></div><FormattedMessage {...messages.Flights} /></li>
                    <li className={accomodation ? 'green' : 'gray'}><div role="button" tabIndex={0} onClick={() => { this.onChangeValue(!accomodation, 'accomodation'); }} className="boxHeight"><img src={images.home} alt="accomodation" /></div><FormattedMessage {...messages.Accom} /></li>
                    <li className={activities ? 'green' : 'gray'}><div role="button" tabIndex={0} onClick={() => { this.onChangeValue(!activities, 'activities'); }} className="boxHeight"><img src={images.activities} alt="activities" /></div><FormattedMessage {...messages.Activities} /></li>
                  </ul>
                  <div className="leftInviteBottom">
                    <div className="itemWrapOne">
                      <span className="label"><FormattedMessage {...messages.MobBudget} />:</span>
                      <span className="value"><input value={totalbudget} onChange={(evt) => { this.onChangeValue(evt.target.value, 'totalbudget'); }} type="text" placeholder="NA" /></span>
                    </div>
                    <div className="itemWrapOne">
                      <span className="label"><FormattedMessage {...messages.Mobtravllers} />:</span>
                      <span className="value"><input value={travellers} onChange={(evt) => { this.onChangeValue(evt.target.value, 'travellers'); }} type="text" placeholder="NA" /></span>
                    </div>
                    <div className="itemWrapOne">
                      <span className="label" ><FormattedMessage {...messages.Mobkids} /></span>
                      <div className="checkUncheckIconWrap" onClick={() => { this.onChangeValue(!kidsunder15, 'kidsunder15'); }} role="button" tabIndex={0} >{!kidsunder15 ? <img className="smallIcon" src={images.uncheckIconSmall} alt="CheckIcon" /> : <img className="smallIcon" src={images.checkIconSmall} alt="CheckIcon" />}</div>
                      {/* <span className="value">{kidsunder15 ? 'YES' : 'NO'}</span> */}
                    </div>
                  </div>
                </div>
                <div className="rightInvite">
                  <p className="Flexible"><FormattedMessage {...messages.Flexible} /></p>
                  <div className="formField">
                    <label htmlFor="where"><FormattedMessage {...messages.where} /></label>
                    <input value={where} onChange={(evt) => { this.onChangeValue(evt.target.value, 'where'); }} type="text" className="inputTypeOne" placeholder="NA" />
                    <div className="TopInput" role="button" tabIndex={0} onClick={() => { this.onChangeValue(!whereFlexible, 'whereFlexible'); }}><img className="unCheck" src={whereFlexible ? images.check : images.uncheckGray} alt="Uncheck" /></div>
                  </div>
                  <div className="formField">
                    <label htmlFor="when"><FormattedMessage {...messages.when} /></label>
                    <input value={when} onChange={(evt) => { this.onChangeValue(evt.target.value, 'when'); }} type="text" className="inputTypeOne" placeholder="NA" />
                    <div className="TopInput" role="button" tabIndex={0} onClick={() => { this.onChangeValue(!whenFlexible, 'whenFlexible'); }}><img className="unCheck" src={whenFlexible ? images.check : images.uncheckGray} alt="Uncheck" /></div>
                  </div>
                  <div className="formField">
                    <label htmlFor="other"><FormattedMessage {...messages.other} /></label>
                    <input value={otherDetails} onChange={(evt) => { this.onChangeValue(evt.target.value, 'otherDetails'); }} type="text" className="inputTypeOne" placeholder="NA" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>


      </div>
    );
  }
}

Invite.propTypes = {
  defaultTrip: PropTypes.object,
  updateTrip: PropTypes.func,
};

export default Invite;
