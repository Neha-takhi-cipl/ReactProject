/**
 *
 * FindTravelerstep2
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
import { guestJobDataTwo } from 'containers/App/actions';
import auth from 'utils/auth';
import {
  changeFlight,
  changeAccom,
  changeActivities,
  changeTotalbudget,
  changeTraveller,
  changeKidsunder15,
} from 'containers/FindTravlerstep1/actions';
import {
  makeSelectWhere,
  makeSelectWhereFlexible,
  makeSelectWhen,
  makeSelectWhenFlexible,
  makeSelectOtherDetails,
} from './selectors';
import {
  changeWhere,
  changeWhereFlexible,
  changeWhen,
  changeWhenFlexible,
  changeOtherDetails,
} from './actions';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import images from '../../images';
import HomeButton from '../../components/HomeButton';
import InnerLogo from '../../components/InnerLogo';
import BackButton from '../../components/BackButton';

import './style/style.css';

export class FindTravelerstep2 extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * @description onNext save data in global state and redirect to step2
   * @author PravinKumar
   */
  onNext = () => {
    const {
      onChangeGetJob,
      history,
      onChangeWhere,
      onChangeWhereFlexible,
      onChangeWhen,
      onChangeWhenFlexible,
      onChangeOtherDetails,
      onChangeFlight,
      onChangeAccom,
      onChangeActivities,
      onChangeTotalbudget,
      onChangeTravellers,
      onChangeKidsunder15,
    } = this.props;
    const data = {
      where: this.props.where,
      whereFlexible: this.props.whereFlexible,
      when: this.props.when,
      whenFlexible: this.props.whenFlexible,
      otherDetails: this.props.otherDetails,
    };
    onChangeGetJob(data);
    onChangeWhere('');
    onChangeWhereFlexible(false);
    onChangeWhen('');
    onChangeWhenFlexible(false);
    onChangeOtherDetails('');
    onChangeFlight(false);
    onChangeAccom(false);
    onChangeActivities(false);
    onChangeTotalbudget('');
    onChangeTravellers(1);
    onChangeKidsunder15(false);
    const userDetails = auth.get('userInfo');
    if (userDetails) {
      this.forwardTo('/tripdashboard');
    } else {
      history.push('/done');
    }
  }
  /**
   * Helper to handle navigation from sagas.
   * @param  {Sting} location The path to navigate
   */
  forwardTo = (location) => {
    this.props.history.push(location);
  }
  render() {
    const { history } = this.props;
    return (
      <div className="Roaming_step2">
        <Helmet>
          <title>FindTravelerstep2</title>
          <meta name="description" content="Description of FindTravelerstep2" />
        </Helmet>
        <div className="container">
          <InnerLogo history={history} />
          <div className="innerContainer">
            <div className="whiteContainer">
              <div className="backButton">
                <BackButton onClick={() => { this.props.history.goBack(); }} />
              </div>
              <p className="steps">
                <FormattedMessage {...messages.Steps} />
              </p>
              <div className="topContainer">
                <p>
                  <FormattedMessage {...messages.heading} />
                </p>
              </div>
              <div className="bottom_container">
                <p className="Flexible"><FormattedMessage {...messages.Flexible} /></p>
                <div className="form_div">
                  <form>
                    <div className="formField">
                      <input type="text" autoComplete="off" autocorrect="off" value={this.props.where} onChange={(evt) => { this.props.onChangeWhere(evt.target.value); }} className="inputTypeOne" placeholder="Where... eg. Melbourne to thailand" />
                      <divClick onClick={() => { this.props.onChangeWhereFlexible(!this.props.whereFlexible); }}>
                        <img className="unCheck" src={this.props.whereFlexible ? images.check : images.uncheck} alt="Uncheck" />
                      </divClick>
                    </div>
                    <div className="formField">
                      <input type="text" autoComplete="off" autocorrect="off" value={this.props.when} onChange={(evt) => { this.props.onChangeWhen(evt.target.value); }} className="inputTypeOne" placeholder="When... eg. 01/08/19  -   01/01/20" />
                      <divClick onClick={() => { this.props.onChangeWhenFlexible(!this.props.whenFlexible); }}>
                        <img className="unCheck" src={this.props.whenFlexible ? images.check : images.uncheck} alt="Uncheck" />
                      </divClick>
                    </div>
                    <div className="formField">
                      <textarea autoComplete="off" autocorrect="off" value={this.props.otherDetails} onChange={(evt) => { this.props.onChangeOtherDetails(evt.target.value); }} className="inputTypeOne" placeholder="Other details... eg. We want to fly first class!">
                      </textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="bottom_btn">
              <div className="back">
                <HomeButton onClick={() => { this.props.history.goBack(); }} >
                  <FormattedMessage {...messages.Backbtn} />
                </HomeButton>
              </div>
              <div className="next">
                <HomeButton onClick={this.onNext} >
                  <FormattedMessage {...messages.Finish} />
                </HomeButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FindTravelerstep2.propTypes = {
  history: PropTypes.object,
  where: PropTypes.string,
  whereFlexible: PropTypes.bool,
  when: PropTypes.string,
  whenFlexible: PropTypes.bool,
  otherDetails: PropTypes.string,
  onChangeGetJob: PropTypes.func,
  onChangeWhere: PropTypes.func,
  onChangeWhereFlexible: PropTypes.func,
  onChangeWhen: PropTypes.func,
  onChangeWhenFlexible: PropTypes.func,
  onChangeOtherDetails: PropTypes.func,
  onChangeFlight: PropTypes.func,
  onChangeAccom: PropTypes.func,
  onChangeActivities: PropTypes.func,
  onChangeTotalbudget: PropTypes.func,
  onChangeTravellers: PropTypes.func,
  onChangeKidsunder15: PropTypes.func,
};
const mapStateToProps = createStructuredSelector({
  where: makeSelectWhere(),
  whereFlexible: makeSelectWhereFlexible(),
  when: makeSelectWhen(),
  whenFlexible: makeSelectWhenFlexible(),
  otherDetails: makeSelectOtherDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeGetJob: (value) => { dispatch(guestJobDataTwo(value)); },
    onChangeWhere: (value) => { dispatch(changeWhere(value)); },
    onChangeWhereFlexible: (value) => { dispatch(changeWhereFlexible(value)); },
    onChangeWhen: (value) => { dispatch(changeWhen(value)); },
    onChangeWhenFlexible: (value) => { dispatch(changeWhenFlexible(value)); },
    onChangeOtherDetails: (value) => { dispatch(changeOtherDetails(value)); },
    onChangeFlight: (value) => dispatch(changeFlight(value)),
    onChangeAccom: (value) => dispatch(changeAccom(value)),
    onChangeActivities: (value) => dispatch(changeActivities(value)),
    onChangeTotalbudget: (value) => dispatch(changeTotalbudget(value)),
    onChangeTravellers: (value) => dispatch(changeTraveller(value)),
    onChangeKidsunder15: (value) => dispatch(changeKidsunder15(value)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'findTravelerstep2', reducer });
const withSaga = injectSaga({ key: 'findTravelerstep2', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FindTravelerstep2);
