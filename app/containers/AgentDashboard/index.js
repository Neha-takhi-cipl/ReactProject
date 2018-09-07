/**
 *
 * AgentDashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import AgentHeader from 'components/AgentDashboard/AgentHeader';
import TripPreference from 'components/TripPreference';
import TripPreferenceBottom from 'components/TripPreferenceBottom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AFTER_LOGIN_REDIRECT } from 'appConfig';
import {
  getNewJobs,
  assignJobToMe,
} from './actions';
import {
  makeSelectGetNewJobsLoading,
  makeSelectGetNewJobsError,
  makeSelectGetNewJobsResponse,
  makeSelectAssignJobLoading,
  makeSelectAssignJobError,
  makeSelectAssignJobResponse,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import './style/style.css';

export class AgentDashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      error: '',
      newJob: [],
      clients: [],
    };
  }

  componentDidMount() {
    const { getNewJobsProp } = this.props;
    getNewJobsProp();
  }

  componentWillReceiveProps(nextProps) {
    const {
      newJobsLoading,
      newJobsError,
      newJobs,
      assignJobError,
      assignJobLoading,
      assignJobResponse,
    } = nextProps;
    if (newJobs.data !== this.props.newJobs.data && !newJobsError && !newJobsLoading) {
      this.setState({ newJob: newJobs.data.newJobs, clients: newJobs.data.clients });
    }
    if (assignJobResponse.data !== this.props.assignJobResponse.data && !assignJobError && !assignJobLoading) {
      this.state.clients.unshift(assignJobResponse.data);
      let newJob = this.state.newJob;
      newJob = newJob.filter((item) => (item._id !== assignJobResponse.data._id));
      this.setState({ newJob, clients: this.state.clients });
      this.navigateToTripDashboard(assignJobResponse.data._id);
    }
  }
  navigateToTripDashboard = (id) => {
    const {
      history,
    } = this.props;
    history.push({ pathname: AFTER_LOGIN_REDIRECT.traveller, state: { tripId: id } });
  }
  render() {
    const { history, assignJobProp } = this.props;
    return (
      <div className="AgentDashboard">
        <Helmet>
          <title>AgentDashboard</title>
          <meta name="description" content="Description of AgentDashboard" />
        </Helmet>
        <AgentHeader history={history} />
        <div>
          <div className="container desktop">
            <div className="leftContainer">
              <div className="TopHeading">
                <FormattedMessage {...messages.MyClients} />
              </div>
              <div className="TripPreferenceBox">
                {this.state.clients.map((item) => (<div key={item._id} className="TripPreferenceBox">
                  <TripPreference tripData={item} />
                  <TripPreferenceBottom updates={'no'} tripId={item._id} onClick={() => { this.navigateToTripDashboard(item._id); }} />
                </div>))}
              </div>
            </div>
            <div className="middleBarWrap"><div className="middleBar"></div></div>
            <div className="rightContainer">
              <div className="TopHeading">
                <FormattedMessage {...messages.Newjobs} />
              </div>
              <div className="TripPreferenceBox">
                {this.state.newJob.map((item) => (<div key={item._id} className="TripPreferenceBox">
                  <TripPreference tripData={item} />
                  <TripPreferenceBottom tripId={item._id} history={history} onClick={() => { assignJobProp(item._id); }} />
                </div>))}
              </div>
            </div>
          </div>
          <div className="container mobile">
            <Tabs>
              <div className="top_tabs">
                <TabList className="AgentDashTab">
                  <Tab><FormattedMessage {...messages.MyClients} /></Tab>
                  <Tab><FormattedMessage {...messages.Newjobs} /></Tab>
                </TabList>
              </div>
              <TabPanel>
                <div className="leftContainer">
                  <div className="TripPreferenceBox">
                    {this.state.clients.map((item) => (<div key={item._id} className="TripPreferenceBox">
                      <TripPreference tripData={item} />
                      <TripPreferenceBottom updates={'no'} tripId={item._id} onClick={() => { this.navigateToTripDashboard(item._id); }} />
                    </div>))}
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="rightContainer">
                  <div className="TripPreferenceBox">
                    {this.state.newJob.map((item) => (<div key={item._id} className="TripPreferenceBox">
                      <TripPreference tripData={item} />
                      <TripPreferenceBottom tripId={item._id} history={history} onClick={() => { assignJobProp(item._id); }} />
                    </div>))}
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

AgentDashboard.propTypes = {
  history: PropTypes.object,
  newJobs: PropTypes.object,
  newJobsLoading: PropTypes.bool,
  newJobsError: PropTypes.bool,
  getNewJobsProp: PropTypes.func,
  assignJobError: PropTypes.bool,
  assignJobLoading: PropTypes.bool,
  assignJobResponse: PropTypes.object,
  assignJobProp: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  newJobs: makeSelectGetNewJobsResponse(),
  newJobsLoading: makeSelectGetNewJobsLoading(),
  newJobsError: makeSelectGetNewJobsError(),
  assignJobError: makeSelectAssignJobError(),
  assignJobLoading: makeSelectAssignJobLoading(),
  assignJobResponse: makeSelectAssignJobResponse(),
});

function mapDispatchToProps(dispatch) {
  return {
    getNewJobsProp: () => dispatch(getNewJobs()),
    assignJobProp: (tripId) => dispatch(assignJobToMe(tripId)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'agentDashboard', reducer });
const withSaga = injectSaga({ key: 'agentDashboard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AgentDashboard);
