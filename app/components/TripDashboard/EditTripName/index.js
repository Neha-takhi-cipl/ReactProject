/**
*
* EditTripName
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
import images from 'images';
// import messages from './messages';
import './style/style.css';

class EditTripName extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    const {
      defaultTrip,
    } = this.props;
    this.state = {
      tripName: (defaultTrip && defaultTrip.tripName) ? defaultTrip.tripName : '',
      isEdit: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    const {
      defaultTrip,
    } = nextProps;
    if (defaultTrip && (defaultTrip !== this.props.defaultTrip)) {
      this.setState({ tripName: defaultTrip.tripName });
    }
  }
  editTripName = () => {
    const {
      updateTripName,
      defaultTrip,
    } = this.props;
    updateTripName({ tripId: defaultTrip._id, tripName: this.state.tripName });
    this.setState({ isEdit: false });
  }
  selectTrip = (tripId) => {
    const {
      selectTrip,
      toggle,
    } = this.props;
    selectTrip(tripId);
    toggle();
  }
  render() {
    const {
      defaultTrip,
      allTrips,
      // history,
    } = this.props;
    const {
      isEdit,
      tripName,
    } = this.state;
    let restTrips = [];
    if (allTrips && (allTrips.length > 0) && defaultTrip) {
      restTrips = allTrips.filter((item) => (item._id !== defaultTrip._id));
    }
    return (
      <div className="EditTrip">
        {isEdit ? (<div><input value={tripName} onChange={(evt) => { this.setState({ tripName: evt.target.value }); }} type="text" className="EditName" placeholder="Trip Name*" />
          <div role="button" tabIndex={0} onClick={() => { this.editTripName(); }} className="iconTwo"><img src={images.Right} className="EditImg" alt="Save Trip Name" /></div></div>) : (<div><button>{tripName}</button><div className="iconOne" role="button" tabIndex={0} onClick={() => { this.setState({ isEdit: !isEdit }); }} ><img src={images.EditTrip} className="EditImg" alt="EditTrip" /></div></div>)}
        {restTrips.map((item) => (<div key={item._id} ><button onClick={() => { this.selectTrip(item._id); }}>{item.tripName}</button></div>))}
      </div>
    );
  }
}

EditTripName.propTypes = {
  allTrips: PropTypes.array,
  updateTripName: PropTypes.func,
  defaultTrip: PropTypes.object,
  selectTrip: PropTypes.func,
  toggle: PropTypes.func,
};

export default EditTripName;
