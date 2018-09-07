/**
 *
 * AdminDashboard
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
import AdminHeader from 'components/AdminDashboard/AdminHeader';
import TripPreference from 'components/TripPreference';
import PreferenceAdminBottom from 'components/AdminDashboard/PreferenceAdminBottom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AFTER_LOGIN_REDIRECT } from 'appConfig';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  getJobs,
  addAgent,
  updateAgent,
  getAgents,
  uploadPicture,
} from './actions';
import {
  makeSelectGetJobsLoading,
  makeSelectGetJobsError,
  makeSelectGetJobsResponse,
  makeSelectAddAgentLoading,
  makeSelectAddAgentError,
  makeSelectAddAgentResponse,
  makeSelectUpdateAgentLoading,
  makeSelectUpdateAgentError,
  makeSelectUpdateAgentResponse,
  makeSelectGetAgentsLoading,
  makeSelectGetAgentsError,
  makeSelectGetAgentsResponse,
  makeSelectPictureLoading,
  makeSelectPictureError,
  makeSelectPictureResponse,
} from './selectors';
import './style/style.css';

export class AdminDashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      assignedJobs: [],
      unassignedJobs: [],
      agentsdata: [],
      agentResponse: {},
      pictureResponse: {},
    };
  }
  componentDidMount() {
    const {
      getJobsProp,
      getAgentsProp,
    } = this.props;
    getJobsProp();
    getAgentsProp();
  }
  componentWillReceiveProps(nextProps) {
    const {
      jobsLoading,
      jobsError,
      jobs,
      addAgentLoading,
      addAgentError,
      addAgentResponse,
      getAgentsLoading,
      getAgentsError,
      getAgentsResponse,
      pictureError,
      pictureLoading,
      pictureResponse,
      updateAgentLoading,
      updateAgentError,
      updateAgentResponse,
    } = nextProps;
    const {
      getAgentsProp,
    } = this.props;
    if (jobs.data !== this.props.jobs.data && !jobsError && !jobsLoading) {
      this.setState({ assignedJobs: jobs.data.assigned, unassignedJobs: jobs.data.unassigned });
    }
    if (addAgentResponse.data !== this.props.addAgentResponse.data && !addAgentError && !addAgentLoading) {
      if (addAgentResponse.status !== 422) {
        getAgentsProp();
      }
      this.setState({ agentResponse: addAgentResponse });
    }
    if (updateAgentResponse.data !== this.props.updateAgentResponse.data && !updateAgentError && !updateAgentLoading) {
      getAgentsProp();
      this.setState({ agentResponse: updateAgentResponse });
    }
    if (getAgentsResponse.data !== this.props.getAgentsResponse.data && !getAgentsLoading && !getAgentsError) {
      this.setState({ agentsdata: getAgentsResponse.data });
    }
    if (pictureResponse.data !== this.props.pictureResponse.data && !pictureLoading && !pictureError) {
      this.setState({ pictureResponse: pictureResponse.data });
    }
  }
  redirectTo = (tripId) => {
    const { history } = this.props;
    history.push({ pathname: AFTER_LOGIN_REDIRECT.traveller, state: { tripId } });
  }
  render() {
    const {
      history,
      addAgentProp,
      updateAgentProp,
      uploadPictureProp,
    } = this.props;
    const {
      agentsdata,
      agentResponse,
      pictureResponse,
    } = this.state;
    return (
      <div className="AdminDashboard PrintBackground">
        <Helmet>
          <title>AdminDashboard</title>
          <meta name="description" content="Description of AdminDashboard" />
        </Helmet>
        <AdminHeader
          history={history}
          agentsdata={agentsdata}
          agentResponse={agentResponse}
          addAgentAction={(data) => { addAgentProp(data); }}
          updateAgentAction={(data, id) => { updateAgentProp(data, id); }}
          uploadPicture={(data) => { uploadPictureProp(data); }}
          pictureResponse={pictureResponse}
        />
        <div>
          <div className="container desktop">
            <div className="leftContainer">
              <div className="TopHeading">
                <FormattedMessage {...messages.Assigned} />
              </div>
              {this.state.assignedJobs.map((item) => (<div key={item._id} className="TripPreferenceBox">
                <TripPreference tripData={item} />
                <PreferenceAdminBottom onClick={() => { this.redirectTo(item._id); }} isSelfPlanned={item.isSelfPlanned} totalUser={item.totalUser + 1} agentNames={item.assignedTo} createdOn={item.createdOn} updatedOn={item.updatedOn} />
              </div>))}
            </div>
            <div className="middleBarWrap"><div className="middleBar"></div></div>
            <div className="rightContainer">
              <div className="TopHeading">
                <FormattedMessage {...messages.Unassigned} />
              </div>
              {this.state.unassignedJobs.map((item) => (<div key={item._id} className="TripPreferenceBox">
                <TripPreference tripData={item} />
                <PreferenceAdminBottom onClick={() => { this.redirectTo(item._id); }} isSelfPlanned={item.isSelfPlanned} totalUser={item.totalUser + 1} createdOn={item.createdOn} updatedOn={item.updatedOn} />
              </div>))}
            </div>
          </div>
          <div className="container mobile">
            <Tabs>
              <div className="top_tabs">
                <TabList className="AgentDashTab">
                  <Tab><FormattedMessage {...messages.Assigned} /></Tab>
                  <Tab><FormattedMessage {...messages.Unassigned} /></Tab>
                </TabList>
              </div>
              <TabPanel>
                <div className="leftContainer">
                  {this.state.assignedJobs.map((item) => (<div key={item._id} className="TripPreferenceBox">
                    <TripPreference tripData={item} />
                    <PreferenceAdminBottom onClick={() => { this.redirectTo(item._id); }} totalUser={item.totalUser + 1} isSelfPlanned={item.isSelfPlanned} agentNames={item.assignedTo} createdOn={item.createdOn} updatedOn={item.updatedOn} />
                  </div>))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="rightContainer">
                  {this.state.unassignedJobs.map((item) => (<div key={item._id} className="TripPreferenceBox">
                    <TripPreference tripData={item} />
                    <PreferenceAdminBottom onClick={() => { this.redirectTo(item._id); }} totalUser={item.totalUser + 1} isSelfPlanned={item.isSelfPlanned} createdOn={item.createdOn} updatedOn={item.updatedOn} />
                  </div>))}
                </div>
              </TabPanel>
            </Tabs>
          </div>

        </div>
      </div>
    );
  }
}

AdminDashboard.propTypes = {
  history: PropTypes.object,
  jobs: PropTypes.object,
  jobsLoading: PropTypes.bool,
  jobsError: PropTypes.bool,
  getJobsProp: PropTypes.func,
  addAgentLoading: PropTypes.bool,
  addAgentError: PropTypes.bool,
  addAgentResponse: PropTypes.object,
  updateAgentLoading: PropTypes.bool,
  updateAgentError: PropTypes.bool,
  updateAgentResponse: PropTypes.object,
  getAgentsLoading: PropTypes.bool,
  getAgentsError: PropTypes.bool,
  getAgentsResponse: PropTypes.object,
  pictureLoading: PropTypes.bool,
  pictureError: PropTypes.bool,
  pictureResponse: PropTypes.object,
  uploadPictureProp: PropTypes.func,
  addAgentProp: PropTypes.func,
  updateAgentProp: PropTypes.func,
  getAgentsProp: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  jobs: makeSelectGetJobsResponse(),
  jobsLoading: makeSelectGetJobsLoading(),
  jobsError: makeSelectGetJobsError(),
  addAgentLoading: makeSelectAddAgentLoading(),
  addAgentError: makeSelectAddAgentError(),
  addAgentResponse: makeSelectAddAgentResponse(),
  updateAgentLoading: makeSelectUpdateAgentLoading(),
  updateAgentError: makeSelectUpdateAgentError(),
  updateAgentResponse: makeSelectUpdateAgentResponse(),
  getAgentsLoading: makeSelectGetAgentsLoading(),
  getAgentsError: makeSelectGetAgentsError(),
  getAgentsResponse: makeSelectGetAgentsResponse(),
  pictureLoading: makeSelectPictureLoading(),
  pictureError: makeSelectPictureError(),
  pictureResponse: makeSelectPictureResponse(),
});

function mapDispatchToProps(dispatch) {
  return {
    getJobsProp: () => dispatch(getJobs()),
    addAgentProp: (data) => dispatch(addAgent(data)),
    updateAgentProp: (data, id) => dispatch(updateAgent(data, id)),
    getAgentsProp: () => dispatch(getAgents()),
    uploadPictureProp: (data) => dispatch(uploadPicture(data)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'adminDashboard', reducer });
const withSaga = injectSaga({ key: 'adminDashboard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AdminDashboard);
