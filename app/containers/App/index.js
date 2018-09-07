/** *
 *  @description App is Application main container that is initial bootstrap page
 *  @author PravinKumar
 *  @since 17 May 2018
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { withRouter } from 'react-router';
import { Switch, Route, Redirect } from 'react-router-dom';
import auth from 'utils/auth';

import Home from 'containers/Home/Loadable';
import ChooseTrip from 'containers/ChooseTrip/Loadable';
import FindTravlerstep1 from 'containers/FindTravlerstep1/Loadable';
import FindTravelerstep2 from 'containers/FindTravelerstep2/Loadable';
import BookingDone from 'containers/BookingDone/Loadable';
import SignUp from 'containers/SignUp/Loadable';
import Login from 'containers/Login/Loadable';
import AgentLogin from 'containers/AgentLogin/Loadable';
import ForgotPassword from 'containers/ForgotPassword/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import TripDashboard from 'containers/TripDashboard/Loadable';
import AgentDashboard from 'containers/AgentDashboard/Loadable';
import AdminDashboard from 'containers/AdminDashboard/Loadable';
import { USER_TYPE } from 'appConfig';
import reducer from './reducer';
import saga from './saga';
import {
  invitedTrip,
  getUserData,
  tripByUrl,
} from './actions';
import {
  makeSelectLoggedInUserResponse,
  makeSelectGetUserLoading,
  makeSelectGetUserError,
  makeSelectGetUserResponse,
} from './selectors';
import PrivateRoute from './privateRoute';

export class App extends React.Component {
  constructor(props) {
    super(props);
    const loggedInUser = auth.getUserInfo();
    this.state = {
      isAuthenticated: loggedInUser && loggedInUser.userType ? loggedInUser.userType : 'GUST',
    };
  }
  componentDidMount() {
    const {
      getUserDataProp,
    } = this.props;
    getUserDataProp();
  }
  componentWillReceiveProps(nextProps) {
    const {
      getUserLoading,
      getUserError,
      getUserResponse,
      LoggedInUserResponse,
    } = nextProps;
    if (getUserResponse !== this.props.getUserResponse && !getUserLoading && !getUserError) {
      if (!getUserResponse.auth) {
        auth.clearAppStorage();
        this.props.history.replace('/');
      }
    }
    if (LoggedInUserResponse !== this.props.LoggedInUserResponse) {
      this.state = {
        isAuthenticated: (LoggedInUserResponse && LoggedInUserResponse.data && LoggedInUserResponse.data.userType) ? LoggedInUserResponse.data.userType : 'GUST',
      };
    }
  }
  render() {
    const { isAuthenticated } = this.state;
    const {
       invitedTripProp,
       tripByUrlProp,
       } = this.props;
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/choose" component={ChooseTrip} />
          <Route exact path="/step1" component={FindTravlerstep1} />
          <Route exact path="/step2" component={FindTravelerstep2} />
          <Route exact path="/done" component={BookingDone} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/agent" component={AgentLogin} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <PrivateRoute exact isAuthenticated={(isAuthenticated === USER_TYPE.traveller || isAuthenticated === USER_TYPE.agent || isAuthenticated === USER_TYPE.admin)} fallback="/login" path="/tripdashboard" component={TripDashboard} />
          <PrivateRoute exact isAuthenticated={(isAuthenticated === USER_TYPE.agent)} fallback="/login" path="/agentdashboard" component={AgentDashboard} />
          <PrivateRoute exact isAuthenticated={(isAuthenticated === USER_TYPE.admin)} fallback="/login" path="/admindashboard" component={AdminDashboard} />
          <Route
            path="/invite/:tripId?/"
            render={(props) => { invitedTripProp(props.match.params.tripId); return (<Redirect to={{ pathname: '/', state: { from: props.location } }} />); }}
          />
          <Route
            path="/trip/:tripId?/"
            render={(props) => { tripByUrlProp(props.match.params.tripId); return (<Redirect to={{ pathname: '/', state: { from: props.location } }} />); }}
          />
          <Route exact path="" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  LoggedInUserResponse: PropTypes.object,
  invitedTripProp: PropTypes.func,
  getUserLoading: PropTypes.bool,
  getUserError: PropTypes.bool,
  getUserResponse: PropTypes.object,
  getUserDataProp: PropTypes.func,
  history: PropTypes.object,
  tripByUrlProp: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  LoggedInUserResponse: makeSelectLoggedInUserResponse(),
  getUserLoading: makeSelectGetUserLoading(),
  getUserError: makeSelectGetUserError(),
  getUserResponse: makeSelectGetUserResponse(),
});

function mapDispatchToProps(dispatch) {
  return {
    invitedTripProp: (data) => dispatch(invitedTrip(data)),
    getUserDataProp: () => dispatch(getUserData()),
    tripByUrlProp: (data) => dispatch(tripByUrl(data)),

  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'global', reducer });
const withSaga = injectSaga({ key: 'global', saga });

export default compose(
  withRouter,
  withReducer,
  withSaga,
  withConnect,
)(App);
