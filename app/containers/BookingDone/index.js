/**
 *
 * BookingDone
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
import { makeSelectSignUpResponse, makeSelectSignupLoading, makeSelectSignupError } from 'containers/App/selectors';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { signupRequest } from 'containers/App/actions';
import { Link } from 'react-router-dom';
import { FACEBOOK_APPID } from '../../appConfig';
import { changeFullname, changeEmail, changePassword, facebookSignup } from './actions';
import { makeSelectFullname, makeSelectEmail, makeSelectPassword, makeSelectFacebooksignup } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import images from '../../images';
import './style/style.css';
import InnerLogo from '../../components/InnerLogo';
import BackButton from '../../components/BackButton';

export class BookingDone extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      fullNameError: '',
      emailError: '',
      passwordError: '',
      fbemailError: '',
      responseError: '',
    };
  }
  componentWillReceiveProps(nextProps) {
    const { signuploading, singupError, signUpResponse } = nextProps;
    this.setState({ responseError: '' });
    if (signUpResponse && !signUpResponse.success && (signUpResponse.status === 422)) {
      this.setState({ responseError: <FormattedMessage {...messages.emailalreadyregistered} /> });
    } else if (signUpResponse && !signUpResponse.success && (signUpResponse.status === 400)) {
      this.setState({ responseError: <FormattedMessage {...messages.emailFieldWarning} /> });
    } else if (signUpResponse && signUpResponse.status && !signuploading && !singupError) {
      this.props.onChangeFullname('');
      this.props.onChangeEmail('');
      this.props.onChangePassword('');
    }
  }

  /**
   * @description handleSubmit is for validation of fields value as required.
   * @author PravinKumar
   * @since May 16 2018
   */

  onSubmitForm = (e) => {
    e.preventDefault();
    let flag = 1;
    const emailRegx = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegx = /^([a-zA-Z]{6,10}|[a-zA-Z\d]{6,10}|[\d]{6,10})$/;
    if (!this.props.fullname) {
      flag = 0;
      this.setState({ fullNameError: <FormattedMessage {...messages.fieldWarning} /> });
    } else {
      this.setState({ fullNameError: '' });
    }
    if (!this.props.email) {
      flag = 0;
      this.setState({ emailError: <FormattedMessage {...messages.fieldWarning} /> });
    } else if (!emailRegx.test(this.props.email)) {
      flag = 0;
      this.setState({ emailError: <FormattedMessage {...messages.emailFieldWarning} /> });
    } else {
      this.setState({ emailError: '' });
    }
    if (!this.props.password) {
      flag = 0;
      this.setState({ passwordError: <FormattedMessage {...messages.fieldWarning} /> });
    } else if (!passwordRegx.test(this.props.password)) {
      flag = 0;
      this.setState({ passwordError: <FormattedMessage {...messages.passwordFieldWarning} /> });
    } else {
      this.setState({ passwordError: '' });
    }
    if (flag) {
      this.props.onSubmitForm();
    }
  }

  /**
   * @description fbcalllback facebook graph api call back.
   * @author PravinKumar
   * @since May 24 2018
   * @param {string} response is contains user details
   */

  fbcalllback = (response) => {
    if (!response.email) {
      this.props.onChangeFullname(response.name);
      this.setState({ fbemailError: <FormattedMessage {...messages.fbEmailWarning} /> });
    } else {
      this.props.onfacebookSignup(response.name, response.email, response.picture.data.url, response.id, true);
    }
  }

  render() {
    return (
      <div className="Booking">
        <Helmet>
          <title>BookingDone</title>
          <meta name="description" content="Description of BookingDone" />
        </Helmet>
        <div className="container">
          <InnerLogo />
          <div className="innerContainer">
            <div className="whiteContainer">
              <div className="backButton">
                <BackButton onClick={() => { this.props.history.goBack(); }} />
              </div>
              <div className="topContainer">
                <p className="done">
                  <FormattedMessage {...messages.done} />
                </p>
                <p>
                  <FormattedMessage {...messages.signup} />
                </p>
              </div>
              <div className="bottom_container">
                <FacebookLogin
                  appId={FACEBOOK_APPID}
                  autoLoad={false}
                  fields="name,email,picture"
                  render={(renderProps) => (
                    <button onClick={renderProps.onClick} className="facebook"><img src={images.fb} alt="FbLogo" /><FormattedMessage {...messages.facebook} /></button>
                  )}
                  callback={this.fbcalllback}
                />
                <div className="form_div">
                  <p><FormattedMessage {...messages.otherwise} /></p>
                  <form onSubmit={this.onSubmitForm}>
                    <div className="formField">
                      <input type="text" value={this.props.fullname} onChange={(evt) => { this.setState({ fullNameError: '' }); this.props.onChangeFullname(evt.target.value); }} className="inputTypeOne cpitalize" placeholder="Full Name" />
                      <div className="warning">{this.state.fullNameError}</div>
                    </div>
                    <div className="formField">
                      <input type="email" value={this.props.email} onChange={(evt) => { this.setState({ emailError: '', fbemailError: '', responseError: '' }); this.props.onChangeEmail(evt.target.value); }} className="inputTypeOne" placeholder="Email" />
                      <div className="warning">{this.state.emailError}</div>
                      <div className="warning">{this.state.responseError}</div>
                    </div>
                    <div className="formField">
                      <input type="password" value={this.props.password} onChange={(evt) => { this.setState({ passwordError: '' }); this.props.onChangePassword(evt.target.value); }} className="inputTypeOne" placeholder="Password" />
                      <div className="warning">{this.state.passwordError}</div>
                    </div>
                    <div >
                      <button onClick={this.onSubmitForm} type="submit" className="signupBtn" ><FormattedMessage {...messages.signupbtn} /></button>
                    </div>
                  </form>
                </div>
                <div className="already_account">
                  <FormattedMessage {...messages.already_account} />
                </div>
                <div className="signin">
                  <Link to={'/login'} className="signin">
                    <FormattedMessage {...messages.signin} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BookingDone.propTypes = {
  fullname: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  onChangeFullname: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  onSubmitForm: PropTypes.func,
  onfacebookSignup: PropTypes.func,
  signuploading: PropTypes.bool,
  signUpResponse: PropTypes.object,
  singupError: PropTypes.bool,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  fullname: makeSelectFullname(),
  email: makeSelectEmail(),
  password: makeSelectPassword(),
  facebooksignup: makeSelectFacebooksignup(),
  signuploading: makeSelectSignupLoading(),
  singupError: makeSelectSignupError(),
  signUpResponse: makeSelectSignUpResponse(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeFullname: (value) => dispatch(changeFullname(value)),
    onChangeEmail: (value) => dispatch(changeEmail(value)),
    onChangePassword: (value) => dispatch(changePassword(value)),
    onfacebookSignup: (name, email, picture, facebookId, facebook) => dispatch(facebookSignup(name, email, picture, facebookId, facebook)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(signupRequest());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'bookingDone', reducer });
const withSaga = injectSaga({ key: 'bookingDone', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BookingDone);
