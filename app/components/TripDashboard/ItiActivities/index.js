/**
*
* ItiActivities
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import images from 'images';
import { FormattedMessage } from 'react-intl';
import BottomBox from 'components/BottomBox';
import { ITINERARY_ACTION_TYPE, SETTING_CONSTANT } from 'appConfig';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import messages from './messages';
import './style/style.css';

class ItiActivities extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    const { itineraryData } = this.props;
    const editFrom = !(itineraryData && Object.keys(itineraryData).length === 0 && itineraryData.constructor === Object);
    this.state = {
      formState: 1,
      editMode: editFrom,
      isEditable: false,
      formData: {
        startDate: (editFrom && itineraryData.miscellaneous.startDate && (itineraryData.miscellaneous.startDate !== 0)) ? moment(itineraryData.miscellaneous.startDate) : null,
        startTime: (editFrom && itineraryData.miscellaneous.startTime && (itineraryData.miscellaneous.startTime !== 0)) ? itineraryData.miscellaneous.startTime : '',
        timeZone: (editFrom && itineraryData.miscellaneous.timeZone && (itineraryData.miscellaneous.timeZone !== 0)) ? itineraryData.miscellaneous.timeZone : SETTING_CONSTANT.defaultTimeZone,
        location: (editFrom && itineraryData.miscellaneous.location && (itineraryData.miscellaneous.location !== 0)) ? itineraryData.miscellaneous.location : '',
        title: (editFrom && itineraryData.miscellaneous.title && (itineraryData.miscellaneous.title !== 0)) ? itineraryData.miscellaneous.title : '',
        totalCost: (editFrom && itineraryData.miscellaneous.totalCost && (itineraryData.miscellaneous.totalCost !== 0)) ? itineraryData.miscellaneous.totalCost : '',
        otherNotes: (editFrom && itineraryData.miscellaneous.otherNotes && (itineraryData.miscellaneous.otherNotes !== 0)) ? itineraryData.miscellaneous.otherNotes : '',
        actionTimeStamp: (editFrom && itineraryData.miscellaneous.startDate && (itineraryData.miscellaneous.startDate !== 0)) ? moment(itineraryData.miscellaneous.startDate).valueOf() : '',
        actionDate: (editFrom && itineraryData.miscellaneous.startDate && (itineraryData.miscellaneous.startDate !== 0)) ? moment(itineraryData.miscellaneous.startDate).toDate().toString().split('00:00:00')[0] : '',
        itineraryId: (editFrom && itineraryData._id) ? itineraryData._id : '',
        book: (editFrom && itineraryData.book) ? itineraryData.book : false,
      },
      startDateError: '',
      AddHeightToTextArea: false,
    };
  }
  removeItinerary = () => {
    const { formData } = this.state;
    this.props.returnAction(formData, ITINERARY_ACTION_TYPE.remove);
  }
  next = () => {
    const { formState, formData, isEditable } = this.state;
    const formDataTemp = { ...formData };
    if (formState === 2 && formData.startDate) {
      formDataTemp.startDate = formDataTemp.startDate === '' ? '' : formDataTemp.startDate.format('MM/DD/YYYY');
      formDataTemp.startTime = formDataTemp.startTime === '' ? '' : formDataTemp.startTime;
      formDataTemp.timeZone = formDataTemp.timeZone === '' ? SETTING_CONSTANT.defaultTimeZone : formDataTemp.timeZone;
      formDataTemp.location = formDataTemp.location === '' ? '' : formDataTemp.location;
      formDataTemp.title = formDataTemp.title === '' ? '' : formDataTemp.title;
      formDataTemp.arriveTimeLocal = formDataTemp.arriveTimeLocal === '' ? '' : formDataTemp.arriveTimeLocal;
      formDataTemp.otherNotes = formDataTemp.otherNotes === '' ? '' : formDataTemp.otherNotes;
    }
    if (formState === 2 && !formData.startDate) {
      this.setState({ startDateError: <FormattedMessage {...messages.fieldWarning} /> });
      return;
    } else if (formState === 2 && isEditable) {
      this.props.returnAction(formDataTemp, ITINERARY_ACTION_TYPE.edit);
      return;
    } else if (formState === 2 && !isEditable) {
      this.props.returnAction(formDataTemp, ITINERARY_ACTION_TYPE.add);
      return;
    }
    this.setState({ formState: formState + 1 });
  }
  pervious = () => {
    const { formState, isEditable } = this.state;
    if (isEditable) {
      this.props.returnAction({}, ITINERARY_ACTION_TYPE.back);
      return;
    } else if (formState === 1) {
      this.props.returnAction({}, ITINERARY_ACTION_TYPE.back);
      return;
    }
    this.setState({ formState: formState - 1 });
  }
  editClose = () => {
    this.props.returnAction({}, ITINERARY_ACTION_TYPE.back);
  }
  changeValue = (value, key) => {
    const formData = { ...this.state.formData };
    if (key === 'startDate') {
      formData.actionTimeStamp = value.valueOf();
      formData.actionDate = value.toDate().toString().split('00:00:00')[0];
      formData[key] = value;
    } else if (key === 'totalCost') {
      formData[key] = Number.isNaN(value) ? formData[key] : value;
    } else {
      formData[key] = value;
    }
    this.setState({ formData, startDateError: '' });
  }

  render() {
    const { formData, formState, editMode, isEditable, AddHeightToTextArea } = this.state;
    const { itineraryCost } = this.props;
    return (
      <div className="itiActivity">
        <BottomBox>
          <div className="departDetails">
            <form className="optional">
              <div className="formGroup">
                {!(editMode && !isEditable) ? <DatePicker
                  dateFormat="DD/MM/YY"
                  selected={formData.startDate}
                  onChange={(date) => { this.changeValue(date, 'startDate'); }}
                  placeholderText="Depart*"
                  className="formInput depart fleft"
                /> : <input value={formData.startDate.format('DD/MM/YY')} readOnly={(editMode && !isEditable)} onChange={(evt) => { this.changeValue(evt.target.value, 'startDate'); }} className="formInput depart" type="text" placeholder="Depart*" />}
                <div className="warning">{this.state.startDateError}</div>
              </div>
              <div className="formGroup fRight">
                <input value={formData.startTime} readOnly={(editMode && !isEditable)} onChange={(evt) => { this.changeValue(evt.target.value, 'startTime'); }} className="formInputTime" type="text" placeholder="Time" />
                <input value={formData.timeZone} readOnly={(editMode && !isEditable)} onChange={(evt) => { this.changeValue(evt.target.value, 'timeZone'); }} className="formInputAES" type="text" placeholder="Zone" />
              </div>
              {(formState === 2 || editMode) && <div className="optionalDetails">
                <p className="optionHeading"><FormattedMessage {...messages.optionalDetails} /></p>
                <div className="formGroup">
                  <input value={formData.location} readOnly={(editMode && !isEditable)} onChange={(evt) => { this.changeValue(evt.target.value, 'location'); }} className="formInput location" type="text" placeholder="Location" />
                </div>
                <div className="formGroup">
                  <input value={formData.title} readOnly={(editMode && !isEditable)} onChange={(evt) => { this.changeValue(evt.target.value, 'title'); }} className="formInput" type="text" placeholder="Title" />
                </div>
                <div className="formGroup">
                  <input value={formData.totalCost} readOnly={(editMode && !isEditable)} onChange={(evt) => { this.changeValue(evt.target.value * 1, 'totalCost'); }} className="formInput audInput" type="text" placeholder="Total cost" />
                  <button type="button" className="AUD"><FormattedMessage {...messages.currencyAud} /></button>
                </div>
                <div className="formGroup full heightFixOne">
                  <textarea style={AddHeightToTextArea ? { height: '100px' } : { height: '40px' }} onFocus={() => { this.setState({ AddHeightToTextArea: true }); }} onBlur={() => { this.setState({ AddHeightToTextArea: false }); }} value={formData.otherNotes} readOnly={(editMode && !isEditable)} onChange={(evt) => { this.changeValue(evt.target.value, 'otherNotes'); }} className="formInput otherDetailsFix" type="text" placeholder="Other Notes"></textarea>
                </div>
              </div>}
              {(!isEditable && editMode) && <div className="EditMode">
                <button onClick={() => { this.setState({ isEditable: true, formState: 2 }); }} type="button" value="Edit"><FormattedMessage {...messages.edit} /></button>
                <button onClick={this.removeItinerary} type="button" value="Remove"><FormattedMessage {...messages.remove} /></button>
              </div>}
            </form>
          </div>
          <div className="nextPreviousWraper" >
            {(!editMode || isEditable) && <button onClick={this.pervious} className="btnItBack"><img className="itBack" src={images.Back} alt="back" /></button>}
            <img className="midIcon" src={images.itiActivity} alt="midIcon" />
            {(!editMode || isEditable) && <button onClick={this.next} className="btnItNext">{formState === 2 ? <FormattedMessage {...messages.done} /> : <FormattedMessage {...messages.next} />}</button>}
            {(editMode && !isEditable) && <button onClick={this.editClose} className="btnItClose"><FormattedMessage {...messages.close} /></button>}
          </div>
          {(editMode && !isEditable) && <div className="amountInfo">$ {itineraryCost} <FormattedMessage {...messages.currencyAud} /></div>}
        </BottomBox>
      </div >
    );
  }
}

ItiActivities.propTypes = {
  returnAction: PropTypes.func,
  itineraryCost: PropTypes.number,
  itineraryData: PropTypes.object,
};

export default ItiActivities;
