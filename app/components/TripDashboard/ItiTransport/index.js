/**
*
* ItiTransport
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

class ItiTransport extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    const { itineraryData } = this.props;
    const editFrom = !(itineraryData && Object.keys(itineraryData).length === 0 && itineraryData.constructor === Object);
    this.state = {
      formState: 1,
      editMode: editFrom,
      isEditable: false,
      formData: {
        departDate: (editFrom && itineraryData.miscellaneous.departDate && (itineraryData.miscellaneous.departDate !== 0)) ? moment(itineraryData.miscellaneous.departDate) : null,
        departTime: (editFrom && itineraryData.miscellaneous.departTime && (itineraryData.miscellaneous.departTime !== 0)) ? itineraryData.miscellaneous.departTime : '',
        timeZone: (editFrom && itineraryData.miscellaneous.timeZone && (itineraryData.miscellaneous.timeZone !== 0)) ? itineraryData.miscellaneous.timeZone : SETTING_CONSTANT.defaultTimeZone,
        locationFrom: (editFrom && itineraryData.miscellaneous.locationFrom && (itineraryData.miscellaneous.locationFrom !== 0)) ? itineraryData.miscellaneous.locationFrom : '',
        locationTo: (editFrom && itineraryData.miscellaneous.locationTo && (itineraryData.miscellaneous.locationTo !== 0)) ? itineraryData.miscellaneous.locationTo : '',
        duration: (editFrom && itineraryData.miscellaneous.duration && (itineraryData.miscellaneous.duration !== 0)) ? itineraryData.miscellaneous.duration : '',
        transportType: (editFrom && itineraryData.miscellaneous.transportType && (itineraryData.miscellaneous.transportType !== 0)) ? itineraryData.miscellaneous.transportType : '',
        totalCost: (editFrom && itineraryData.miscellaneous.totalCost && (itineraryData.miscellaneous.totalCost !== 0)) ? itineraryData.miscellaneous.totalCost : '',
        otherNotes: (editFrom && itineraryData.miscellaneous.otherNotes && (itineraryData.miscellaneous.otherNotes !== 0)) ? itineraryData.miscellaneous.otherNotes : '',
        actionTimeStamp: (editFrom && itineraryData.miscellaneous.departDate && (itineraryData.miscellaneous.departDate !== 0)) ? moment(itineraryData.miscellaneous.departDate).valueOf() : '',
        actionDate: (editFrom && itineraryData.miscellaneous.departDate && (itineraryData.miscellaneous.departDate !== 0)) ? moment(itineraryData.miscellaneous.departDate).toDate().toString().split('00:00:00')[0] : '',
        itineraryId: (editFrom && itineraryData._id) ? itineraryData._id : '',
        book: (editFrom && itineraryData.book) ? itineraryData.book : false,
      },
      departDateError: '',
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
    if (formState === 2 && formData.departDate) {
      formDataTemp.departDate = formDataTemp.departDate === '' ? '' : formDataTemp.departDate.format('MM/DD/YYYY');
      formDataTemp.departTime = formDataTemp.departTime === '' ? '' : formDataTemp.departTime;
      formDataTemp.timeZone = formDataTemp.timeZone === '' ? SETTING_CONSTANT.defaultTimeZone : formDataTemp.timeZone;
      formDataTemp.locationFrom = formDataTemp.locationFrom === '' ? '' : formDataTemp.locationFrom;
      formDataTemp.locationTo = formDataTemp.locationTo === '' ? '' : formDataTemp.locationTo;
      formDataTemp.duration = formDataTemp.duration === '' ? '' : formDataTemp.duration;
      formDataTemp.transportType = formDataTemp.transportType === '' ? '' : formDataTemp.transportType;
      formDataTemp.otherNotes = formDataTemp.otherNotes === '' ? '' : formDataTemp.otherNotes;
    }
    if (formState === 2 && !formData.departDate) {
      this.setState({ departDateError: <FormattedMessage {...messages.fieldWarning} /> });
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
    if (key === 'departDate') {
      formData.actionTimeStamp = value.valueOf();
      formData.actionDate = value.toDate().toString().split('00:00:00')[0];
      formData[key] = value;
    } else if (key === 'totalCost') {
      formData[key] = Number.isNaN(value) ? formData[key] : value;
    } else {
      formData[key] = value;
    }
    this.setState({ formData, departDateError: '' });
  }
  render() {
    const { formData, formState, editMode, isEditable, AddHeightToTextArea } = this.state;
    const { itineraryCost } = this.props;
    return (
      <div className="itiTransport">
        <BottomBox>
          <div className="departDetails">
            <form className="optional">
              <div className="formGroup">
                {!(editMode && !isEditable) ? <DatePicker
                  dateFormat="DD/MM/YY"
                  selected={formData.departDate}
                  onChange={(date) => { this.changeValue(date, 'departDate'); }}
                  placeholderText="Depart*"
                  className="formInput depart fleft"
                /> : <input value={formData.departDate.format('DD/MM/YY')} readOnly={(editMode && !isEditable)} onChange={(evt) => { this.changeValue(evt, 'departDate'); }} className="formInput depart" type="text" placeholder="Depart*" />}
                <div className="warning">{this.state.departDateError}</div>
              </div>
              <div className="formGroup fRight">
                <input value={formData.departTime} onChange={(evt) => { this.changeValue(evt.target.value, 'departTime'); }} className="formInputTime" type="text" placeholder="Time" />
                <input value={formData.timeZone} onChange={(evt) => { this.changeValue(evt.target.value, 'timeZone'); }} className="formInputAES" type="text" placeholder="Zone" />
              </div>
              {(formState === 2 || editMode) && <div className="optionalDetails">
                <p className="optionHeading"><FormattedMessage {...messages.optionalDetails} /></p>
                <div className="formGroup">
                  <input value={formData.locationFrom} onChange={(evt) => { this.changeValue(evt.target.value, 'locationFrom'); }} className="formInput location" type="text" placeholder="From" />
                </div>
                <div className="formGroup fRight">
                  <input value={formData.locationTo} onChange={(evt) => { this.changeValue(evt.target.value, 'locationTo'); }} className="formInput location" type="text" placeholder="To" />
                </div>
                <div className="formGroup">
                  <input value={formData.transportType} onChange={(evt) => { this.changeValue(evt.target.value, 'transportType'); }} className="formInput" type="text" placeholder="Transport type" />
                </div>
                <div className="formGroup fullgroup">
                  <input value={formData.duration} onChange={(evt) => { this.changeValue(evt.target.value, 'duration'); }} className="formInput" type="text" placeholder="Duration" />
                </div>
                <div className="formGroup">
                  <input value={formData.totalCost} onChange={(evt) => { this.changeValue(evt.target.value * 1, 'totalCost'); }} className="formInput audInput" type="text" placeholder="Total cost" />
                  <button type="button" className="AUD"><FormattedMessage {...messages.currencyAud} /></button>
                </div>
                <div className="formGroup full heightFixOne">
                  <textarea style={AddHeightToTextArea ? { height: '100px' } : { height: '40px' }} onFocus={() => { this.setState({ AddHeightToTextArea: true }); }} onBlur={() => { this.setState({ AddHeightToTextArea: false }); }} value={formData.otherNotes} onChange={(evt) => { this.changeValue(evt.target.value, 'otherNotes'); }} className="formInput otherDetailsFix" type="text" placeholder="Other Notes"></textarea>
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
            <img className="midIcon" src={images.itiTransport} alt="midIcon" />
            {(!editMode || isEditable) && <button onClick={this.next} className="btnItNext">{formState === 2 ? <FormattedMessage {...messages.done} /> : <FormattedMessage {...messages.next} />}</button>}
            {(editMode && !isEditable) && <button onClick={this.editClose} className="btnItClose"><FormattedMessage {...messages.close} /></button>}
          </div>
          {(editMode && !isEditable) && <div className="amountInfo">$ {itineraryCost} <FormattedMessage {...messages.currencyAud} /></div>}
        </BottomBox>
      </div >
    );
  }
}

ItiTransport.propTypes = {
  returnAction: PropTypes.func,
  itineraryCost: PropTypes.number,
  itineraryData: PropTypes.object,
};

export default ItiTransport;
