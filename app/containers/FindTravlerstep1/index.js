/**
 *
 * FindTravlerstep1
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import HomeButton from 'components/HomeButton';
import InnerLogo from 'components/InnerLogo';
import BackButton from 'components/BackButton';
import images from 'images';
import { guestJobDataOne } from 'containers/App/actions';
import { makeSelectFlight, makeSelectAccom, makeSelectActivities, makeSelectTotalbudget, makeSelectTraveller, makeSelectKidsunder15 } from './selectors';
import reducer from './reducer';
import messages from './messages';

import './style/style.css';
import { changeFlight, changeAccom, changeActivities, changeTotalbudget, changeTraveller, changeKidsunder15 } from './actions';

export class FindTravlerstep1 extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * @description onNext save data in global state and redirect to step2
   * @author PravinKumar
   */
  onNext = () => {
    const {
      onChangeGetJob,
      history,
    } = this.props;
    const data = {
      flight: this.props.flight,
      accom: this.props.accom,
      activities: this.props.activities,
      totalbudget: this.props.totalbudget,
      travellers: this.props.travellers,
      kidsunder15: this.props.kidsunder15,
    };
    onChangeGetJob(data);
    history.push('/step2');
  }
  render() {
    const { history } = this.props;
    return (
      <div className="Roaming_step1">
        <Helmet>
          <title>FindTravlerstep1</title>
          <meta name="description" content="Description of FindTravlerstep1" />
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
                <p><FormattedMessage {...messages.Help} /></p>
                <ul>
                  <li className={this.props.flight ? 'green' : 'gray'} >
                    <divClick onClick={() => { this.props.onChangeFlight(!this.props.flight); }}>
                      <div className="boxHeight"> <img src={images.flight} alt="flight" /></div>
                      <span><FormattedMessage {...messages.Flights} /></span>
                    </divClick>
                  </li>
                  <li className={this.props.accom ? 'green' : 'gray'} >
                    <divClick onClick={() => { this.props.onChangeAccom(!this.props.accom); }} >
                      <div className="boxHeight"> <img src={images.accomodation} alt="accomodation" /> </div>
                      <span><FormattedMessage {...messages.Accom} /></span>
                    </divClick>
                  </li>
                  <li className={this.props.activities ? 'green' : 'gray'} >
                    <divClick onClick={() => { this.props.onChangeActivities(!this.props.activities); }} >
                      <div className="boxHeight"><img src={images.activities} alt="activities" /></div>
                      <span><FormattedMessage {...messages.Activities} /></span>
                    </divClick>
                  </li>
                </ul>
              </div>
              <div className="bottom_container">
                <div className="form_div">
                  <form>
                    <div className="formField">
                      <label htmlFor="Budget"><FormattedMessage {...messages.Budget} /></label>
                      <input type="text" value={this.props.totalbudget} onChange={(evt) => { this.props.onChangeTotalbudget(evt.target.value); }} className="inputTypeOne" placeholder="Total budget" />
                    </div>
                    <div className="formField">
                      <label htmlFor="No. of Travlers"><FormattedMessage {...messages.Travlers} /></label>
                      <select value={this.props.travellers} onChange={(evt) => { this.props.onChangeTravellers(evt.target.value); }} className="inputTypeOne desktop">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="Over 3">Over 3</option>
                      </select>
                      <div className="inputTypeOne mobile">
                        <span className="mobileLabel"><FormattedMessage {...messages.Travlers} /></span>
                        <select value={this.props.travellers} onChange={(evt) => { this.props.onChangeTravellers(evt.target.value); }} className="innerSelect">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="Over 3">Over 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="formField_checkbox">
                      <label htmlFor="Kids"><FormattedMessage {...messages.Kids} /></label>
                      <div className="checkUncheckIconWrap" onClick={() => { this.props.onChangeKidsunder15(!this.props.kidsunder15); }} role="button" tabIndex={0} >{!this.props.kidsunder15 ? <img className="smallIcon" src={images.uncheckIconSmall} alt="CheckIcon" /> : <img className="smallIcon" src={images.checkIconSmall} alt="CheckIcon" />}</div>
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
                  <FormattedMessage {...messages.Nextbtn} />
                </HomeButton>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

FindTravlerstep1.propTypes = {
  history: PropTypes.object,
  flight: PropTypes.bool,
  accom: PropTypes.bool,
  activities: PropTypes.bool,
  totalbudget: PropTypes.string,
  travellers: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  kidsunder15: PropTypes.bool,
  onChangeFlight: PropTypes.func,
  onChangeAccom: PropTypes.func,
  onChangeActivities: PropTypes.func,
  onChangeTotalbudget: PropTypes.func,
  onChangeTravellers: PropTypes.func,
  onChangeKidsunder15: PropTypes.func,
  onChangeGetJob: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  flight: makeSelectFlight(),
  accom: makeSelectAccom(),
  activities: makeSelectActivities(),
  totalbudget: makeSelectTotalbudget(),
  travellers: makeSelectTraveller(),
  kidsunder15: makeSelectKidsunder15(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeGetJob: (value) => dispatch(guestJobDataOne(value)),
    onChangeFlight: (value) => dispatch(changeFlight(value)),
    onChangeAccom: (value) => dispatch(changeAccom(value)),
    onChangeActivities: (value) => dispatch(changeActivities(value)),
    onChangeTotalbudget: (value) => dispatch(changeTotalbudget(value)),
    onChangeTravellers: (value) => dispatch(changeTraveller(value)),
    onChangeKidsunder15: (value) => dispatch(changeKidsunder15(value)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'findTravlerstep1', reducer });

export default compose(
  withReducer,
  withConnect,
)(FindTravlerstep1);
