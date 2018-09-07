/**
*
* ItiAccom
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import BottomBox from 'components/BottomBox';
import images from 'images';
import { ITINERARY_ACTION_TYPE, SETTING_CONSTANT } from 'appConfig';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import messages from './messages';
import './style/style.css';

class ItiAccom extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    const { itineraryData } = this.props;
    const editFrom = !(itineraryData && Object.keys(itineraryData).length === 0 && itineraryData.constructor === Object);
    this.state = {
      formState: 1,
      editMode: editFrom,
      checkIn: (editFrom && (itineraryData.miscellaneous.checkInDate !== '') && (itineraryData.miscellaneous.checkInDate !== 0)),
      isEditable: false,
      formData: {
        checkInDate: (editFrom && itineraryData.miscellaneous.checkInDate && (itineraryData.miscellaneous.checkInDate !== 0)) ? moment(itineraryData.miscellaneous.checkInDate) : null,
        checkInTime: (editFrom && itineraryData.miscellaneous.checkInTime && (itineraryData.miscellaneous.checkInTime !== 0)) ? itineraryData.miscellaneous.checkInTime : '',
        timeZone: (editFrom && itineraryData.miscellaneous.timeZone && (itineraryData.miscellaneous.timeZone !== 0)) ? itineraryData.miscellaneous.timeZone : SETTING_CONSTANT.defaultTimeZone,
        address: (editFrom && itineraryData.miscellaneous.address && (itineraryData.miscellaneous.address !== 0)) ? itineraryData.miscellaneous.address : '',
        checkOutDate: (editFrom && itineraryData.miscellaneous.checkOutDate && (itineraryData.miscellaneous.checkOutDate !== 0)) ? moment(itineraryData.miscellaneous.checkOutDate) : null,
        checkOutTime: (editFrom && itineraryData.miscellaneous.checkOutTime && (itineraryData.miscellaneous.checkOutTime !== 0)) ? itineraryData.miscellaneous.checkOutTime : '',
        checkOutTimeZone: (editFrom && itineraryData.miscellaneous.checkOutTimeZone && (itineraryData.miscellaneous.checkOutTimeZone !== 0)) ? itineraryData.miscellaneous.checkOutTimeZone : SETTING_CONSTANT.defaultTimeZone,
        title: (editFrom && itineraryData.miscellaneous.title && (itineraryData.miscellaneous.title !== 0)) ? itineraryData.miscellaneous.title : '',
        totalCost: (editFrom && itineraryData.miscellaneous.totalCost && (itineraryData.miscellaneous.totalCost !== 0)) ? itineraryData.miscellaneous.totalCost : '',
        otherNotes: (editFrom && itineraryData.miscellaneous.otherNotes && (itineraryData.miscellaneous.otherNotes !== 0)) ? itineraryData.miscellaneous.otherNotes : '',
        actionTimeStamp: (editFrom && itineraryData.miscellaneous.checkInDate && (itineraryData.miscellaneous.checkInDate !== 0)) ? moment(itineraryData.miscellaneous.checkInDate).valueOf() : '',
        actionDate: (editFrom && itineraryData.miscellaneous.checkInDate && (itineraryData.miscellaneous.checkInDate !== 0)) ? moment(itineraryData.miscellaneous.checkInDate).toDate().toString().split('00:00:00')[0] : '',
        itineraryId: (editFrom && itineraryData._id) ? itineraryData._id : '',
        book: (editFrom && itineraryData.book) ? itineraryData.book : false,
      },
      checkInError: '',
      AddHeightToTextArea: false,
      AddHeightToAddress: false,
    };
  }
  removeItinerary = () => {
    const { formData } = this.state;
    this.props.returnAction(formData, ITINERARY_ACTION_TYPE.remove);
  }
  next = () => {
    const { formState, formData, isEditable } = this.state;
    const formDataTemp = { ...formData };
    if (formState === 2) {
      formDataTemp.checkInDate = formDataTemp.checkInDate === null ? '' : formDataTemp.checkInDate.format('MM/DD/YYYY');
      formDataTemp.checkInTime = formDataTemp.checkInTime === '' ? '' : formDataTemp.checkInTime;
      formDataTemp.timeZone = formDataTemp.timeZone === '' ? SETTING_CONSTANT.defaultTimeZone : formDataTemp.timeZone;
      formDataTemp.address = formDataTemp.address === '' ? '' : formDataTemp.address;
      formDataTemp.checkOutDate = formDataTemp.checkOutDate === null ? '' : formDataTemp.checkOutDate.format('MM/DD/YYYY');
      formDataTemp.checkOutTime = formDataTemp.checkOutTime === '' ? '' : formDataTemp.checkOutTime;
      formDataTemp.checkOutTimeZone = formDataTemp.checkOutTimeZone === '' ? SETTING_CONSTANT.defaultTimeZone : formDataTemp.checkOutTimeZone;
      formDataTemp.totalCost = formDataTemp.totalCost === '' ? '' : formDataTemp.totalCost;
      formDataTemp.arriveTimeLocal = formDataTemp.arriveTimeLocal === '' ? '' : formDataTemp.arriveTimeLocal;
      formDataTemp.otherNotes = formDataTemp.otherNotes === '' ? '' : formDataTemp.otherNotes;
    }
    if (isEditable && formDataTemp.checkOutDate && !formData.checkInDate) {
      this.props.returnAction(formDataTemp, ITINERARY_ACTION_TYPE.edit);
      return;
    }
    if (formState === 2 && !formData.checkInDate) {
      this.setState({ checkInError: <FormattedMessage {...messages.fieldWarning} /> });
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
    if (key === 'checkInDate') {
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
    const {
      formData,
      formState,
      editMode,
      isEditable,
      AddHeightToTextArea,
      AddHeightToAddress,
    } = this.state;
    const { itineraryCost } = this.props;
    const checkInDateObject = (<div className="formGroup">
      <div className="leftHalf">{!(editMode && !isEditable) ? <DatePicker
        dateFormat="DD/MM/YY"
        selected={formData.checkInDate}
        onChange={(date) => { this.changeValue(date, 'checkInDate'); }}
        placeholderText="Check in*"
        className="formInput depart fleft"
      /> : <input value={formData.checkInDate !== null && formData.checkInDate.format('DD/MM/YY')} readOnly={(editMode && !isEditable)} onChange={(evt) => { this.changeValue(evt.target.value, 'checkInDate'); }} className="formInput depart" type="text" placeholder="Check in*" />} </div>
      <div className="fRight">
        <input value={formData.checkInTime} readOnly={(editMode && !isEditable)} onChange={(evt) => { this.changeValue(evt.target.value, 'checkInTime'); }} className="formInputTime" type="text" placeholder="Time" />
        <input value={formData.timeZone} readOnly={(editMode && !isEditable)} onChange={(evt) => { this.changeValue(evt.target.value, 'timeZone'); }} className="formInputAES" type="text" placeholder="Zone" />
      </div>
      <div className="clearBoth warning">{this.state.checkInError}</div>
    </div>);
    const checkOutDateObject = (<div className="formGroup">
      <div className="leftHalf">{!(editMode && !isEditable) ? <DatePicker
        dateFormat="DD/MM/YY"
        selected={formData.checkOutDate}
        onChange={(date) => { this.changeValue(date, 'checkOutDate'); }}
        placeholderText="Check out"
        className="depart formInputDate fleft"
      /> : <input value={formData.checkOutDate !== null && formData.checkOutDate.format('DD/MM/YY')} readOnly={(editMode && !isEditable)} onChange={(evt) => { this.changeValue(evt.target.value, 'checkOutDate'); }} className="depart formInputDate" type="text" placeholder="Check in*" />}</div>
      <div className="fRight">
        <input value={formData.checkOutTime} readOnly={(editMode && !isEditable)} onChange={(evt) => { this.changeValue(evt.target.value, 'checkOutTime'); }} className="formInputTime" type="text" placeholder="Time" />
        <input value={formData.checkOutTimeZone} readOnly={(editMode && !isEditable)} onChange={(evt) => { this.changeValue(evt.target.value, 'checkOutTimeZone'); }} className="formInputAES" type="text" placeholder="Zone" />
      </div>
    </div>);
    const totalCostObject = (<div className="formGroup">
      <input value={formData.totalCost} readOnly={(editMode && !isEditable)} onChange={(evt) => { this.changeValue((evt.target.value * 1), 'totalCost'); }} className="formInput audInput" type="text" placeholder="Total cost" />
      <button type="button" className="AUD">AUD</button>
    </div>);
    return (
      <div className="itiAccom">
        <BottomBox>
          <div className="departDetails">
            <form className="optional">
              {checkInDateObject}
              {(formState === 2 || editMode) && <div className="optionalDetails">
                <p className="optionHeading"><FormattedMessage {...messages.optionalDetails} /></p>
                <div className="formGroup heightFixOne">
                  <textarea style={AddHeightToAddress ? { height: '100px', width: '325px' } : { height: '34px' }} onFocus={() => { this.setState({ AddHeightToAddress: true }); }} onBlur={() => { this.setState({ AddHeightToAddress: false }); }} value={formData.address} readOnly={(editMode && !isEditable)} onChange={(evt) => { this.changeValue(evt.target.value, 'address'); }} className="formInput location otherDetailsFix" type="text" placeholder="Address" ></textarea>
                </div>
                <div className="formGroup">
                  <input value={formData.title} readOnly={(editMode && !isEditable)} onChange={(evt) => { this.changeValue(evt.target.value, 'title'); }} className="formInput" type="text" placeholder="Title" />
                </div>
                {checkOutDateObject}
                {totalCostObject}
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
            <img className="midIcon" src={images.itiAccom} alt="midIcon" />
            {(!editMode || isEditable) && <button onClick={this.next} className="btnItNext">{formState === 2 ? <FormattedMessage {...messages.done} /> : <FormattedMessage {...messages.next} />}</button>}
            {(editMode && !isEditable) && <button onClick={this.editClose} className="btnItClose"><FormattedMessage {...messages.close} /></button>}
          </div>
          {(editMode && !isEditable) && <div className="amountInfo">$ {itineraryCost} <FormattedMessage {...messages.currencyAud} /></div>}
        </BottomBox>
      </div>

    );
  }
}

ItiAccom.propTypes = {
  returnAction: PropTypes.func,
  itineraryCost: PropTypes.number,
  itineraryData: PropTypes.object,
};

export default ItiAccom;
