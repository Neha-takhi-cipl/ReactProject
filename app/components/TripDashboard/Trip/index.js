/**
*
* Trip
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { USER_TYPE } from 'appConfig';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './style/style.css';
import DivClick from '../../DivClick';
import EditTripName from '../EditTripName';
class Trip extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  toggle = () => {
    const {
      auth,
      isOpen,
      onClick,
    } = this.props;
    if ((((auth.defaultTripId !== '') && (auth.userType === USER_TYPE.admin)) || ((auth.defaultTripId !== '') && (auth.userType === USER_TYPE.agent)))) {
      // action in case of admin or agent as admin or agent respactively
    } else if (!isOpen) {
      this.setState({ show: !this.state.show });
    } else {
      onClick();
    }
  }
  sortName = (name) => {
    let sName = '';
    if (name.length > 20) {
      sName = `${name.substring(0, 20)}...`;
    } else {
      sName = `${name}`;
    }
    return sName;
  }
  render() {
    const {
      defaultTrip,
      createNewTrip,
      updateTripName,
      allTrips,
      selectTrip,
      history,
      auth,
    } = this.props;
    const hide = {
      display: !this.state.show ? 'none' : 'block',
    };
    return (
      <div className="tripInfo">
        <DivClick onClick={this.toggle} className={(((auth.defaultTripId !== '') && (auth.userType === USER_TYPE.admin)) || ((auth.defaultTripId !== '') && (auth.userType === USER_TYPE.agent))) ? 'tripName' : 'tripName tripNameTriangle'} ><span>{(defaultTrip && defaultTrip.tripName) ? this.sortName(defaultTrip.tripName) : <FormattedMessage {...messages.header} />}</span></DivClick>
        <div style={hide} className="dropDown">
          <ul>
            <li><button onClick={() => { createNewTrip(); history.push('/choose'); }} ><FormattedMessage {...messages.newTrip} /></button></li>
            <EditTripName
              defaultTrip={defaultTrip}
              allTrips={allTrips}
              history={history}
              selectTrip={selectTrip}
              toggle={this.toggle}
              updateTripName={updateTripName}
            />
          </ul>
        </div>
      </div>
    );
  }
}

Trip.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  history: PropTypes.object,
  createNewTrip: PropTypes.func,
  allTrips: PropTypes.array,
  updateTripName: PropTypes.func,
  defaultTrip: PropTypes.object,
  selectTrip: PropTypes.func,
  auth: PropTypes.object,
};
export default Trip;
