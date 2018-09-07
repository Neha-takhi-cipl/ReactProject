/**
 *
 * ChooseTrip
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import { tripPlanTypeChange } from 'containers/App/actions';
import auth from 'utils/auth';
import messages from './messages';
import HomeButton from '../../components/HomeButton';
import InnerLogo from '../../components/InnerLogo';
import BackButton from '../../components/BackButton';
import './style/style.css';

export class ChooseTrip extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  navigateWithType = (path, type) => {
    const userDetails = auth.get('userInfo');
    if (userDetails && type === 0) {
      this.props.history.push('/tripdashboard');
    } else {
      this.props.history.push(path);
    }
    this.props.tripPlanTypeChange(type);
  }
  render() {
    const { history } = this.props;
    return (
      <div className="choose" >
        <Helmet>
          <title>ChooseTrip</title>
          <meta name="description" content="Description of ChooseTrip" />
        </Helmet>
        <div className="container">
          <InnerLogo history={history} />
          <div className="innerContainer">
            <div className="backButton">
              <BackButton onClick={() => { this.props.history.goBack(); }} />
            </div>
            <div className="topContainer">
              <p className="heading1">
                <FormattedMessage {...messages.heading1} />
              </p>
              <p className="heading2">
                <FormattedMessage {...messages.heading2} />
              </p>
            </div>
            <div className="bottomContainer">
              <p className="want">
                <FormattedMessage {...messages.choose} />
              </p>
              <div className="chooseTrip">
                <HomeButton onClick={() => { this.navigateWithType('/step1', 1); }} >
                  <FormattedMessage {...messages.button} />
                </HomeButton>
                <p>
                  <FormattedMessage {...messages.button_text} />
                </p>
              </div>
              <div className="or">
                <FormattedMessage {...messages.or} />
              </div>
              <div className="ownTrip">
                <HomeButton onClick={() => { this.navigateWithType('/done', 0); }} >
                  <FormattedMessage {...messages.button2} />
                </HomeButton>
                <p>
                  <FormattedMessage {...messages.button_text2} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ChooseTrip.propTypes = {
  history: PropTypes.object,
  tripPlanTypeChange: PropTypes.func,
};
const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    tripPlanTypeChange: (value) => { dispatch(tripPlanTypeChange(value)); },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(ChooseTrip);
