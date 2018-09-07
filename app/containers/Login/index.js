/**
 *
 * Login
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import auth from 'utils/auth';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectLoginLoading, makeSelectLoginResponse, makeSelectLoginError } from 'containers/App/selectors';
import { USER_TYPE, FACEBOOK_APPID, AFTER_LOGIN_REDIRECT } from 'appConfig';
import { makeSelectEmail, makeSelectPassword } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import './style/style.css';
import MainHeader from '../../components/MainHeader';
import { facebookLoginRequest, loginRequest } from '../App/actions';
import { changeEmail, changePassword, facebookData } from './actions';
export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    const loggedInUser = auth.getUserInfo();
    this.state = {
      emailError: '',
      passwordError: '',
      fbemailError: '',
      responseError: '',
      isAuthenticated: loggedInUser && loggedInUser.userType ? loggedInUser.userType : 'GUST',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { loginLoading, loginError, loginResponse } = nextProps;
    if ((this.props.loginResponse !== loginResponse) && loginResponse.status === 404) { // email not found in database
      this.setState({ responseError: <FormattedMessage {...messages.emailNotRegistered} /> });
      this.props.onChangePassword('');
    } else if ((this.props.loginResponse !== loginResponse) && loginResponse.status === 401) { // password incorrect found in database
      this.setState({ responseError: <FormattedMessage {...messages.passwordIncorrect} /> });
      this.props.onChangePassword('');
    } else if ((this.props.loginResponse !== loginResponse) && loginResponse.status && !loginLoading && !loginError) {
      this.props.onChangePassword('');
      this.props.onChangeEmail('');
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
  fbcalllback = (response) => {
    this.props.onChangeFacebookData(response.name, response.email, response.picture.data.url, response.id, true);
    this.props.onFacebookClick();
  }

  render() {
    const { history } = this.props;
    const { isAuthenticated } = this.state;
    if (isAuthenticated === USER_TYPE.traveller) {
      history.replace(AFTER_LOGIN_REDIRECT.traveller);
    } else if (isAuthenticated === USER_TYPE.agent) {
      history.replace(AFTER_LOGIN_REDIRECT.agent);
    } else if (isAuthenticated === USER_TYPE.admin) {
      history.replace(AFTER_LOGIN_REDIRECT.admin);
    }
    return (
      <div className="loginPage homeCover">
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Description of Login" />
        </Helmet>
        <MainHeader />
        <div className="container">
          <div className="innerContainer">
            <div className="whiteContainer">
              <div className="topContainer">
                <p className="greenHeadTitle"><FormattedMessage {...messages.header} /></p>
              </div>
              <div className="formMsgs"><div className="warning"><div className="warning">{this.state.responseError}</div></div></div>
              <div className="bottom_container">
                <div className="form_div">
                  <div className="fbTop">
                    <FacebookLogin
                      appId={FACEBOOK_APPID}
                      autoLoad={false}
                      fields="name,email,picture"
                      render={(renderProps) => (
                        <button onClick={renderProps.onClick} className="facebookLogin marginTopTwenty"><FormattedMessage {...messages.facebook} /></button>
                      )}
                      callback={this.fbcalllback}
                    />
                    <div className="warning">{this.state.fbemailError}</div>
                  </div>
                  <form onSubmit={this.onSubmitForm}>
                    <div className="formField">
                      <input type="email" value={this.props.email} onChange={(evt) => { this.setState({ emailError: '', fbemailError: '', responseError: '' }); this.props.onChangeEmail(evt.target.value); }} className="inputTypeOne" placeholder="Email" />
                      <div className="warning">{this.state.emailError}</div>
                    </div>
                    <div className="formField">
                      <input type="password" value={this.props.password} onChange={(evt) => { this.setState({ passwordError: '', fbemailError: '', responseError: '' }); this.props.onChangePassword(evt.target.value); }} className="inputTypeOne" placeholder="Password" />
                      <div className="warning">{this.state.passwordError}</div>
                    </div>
                    <div className="marginBottomfifteen">
                      <button type="submit" className="Login" ><FormattedMessage {...messages.loginbtn} /></button>
                    </div>
                  </form>
                  <div className="linkOne"><Link to={'/forgotpassword'}><FormattedMessage {...messages.forgotPassword} /></Link></div>
                  <div className="fbBottom">
                    <FacebookLogin
                      appId={FACEBOOK_APPID}
                      autoLoad={false}
                      fields="name,email,picture"
                      render={(renderProps) => (
                        <button onClick={renderProps.onClick} className="facebookLogin marginTopTwenty"><FormattedMessage {...messages.facebook} /></button>
                      )}
                      callback={this.fbcalllback}
                    />
                    <div className="warning">{this.state.fbemailError}</div>
                  </div>
                </div>
                <div className="notAccount"><FormattedMessage {...messages.notAccount} /></div>
                <div className="signin"><Link to={'/signup'}><FormattedMessage {...messages.signup} /></Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  onSubmitForm: PropTypes.func,
  onChangeFacebookData: PropTypes.func,
  onFacebookClick: PropTypes.func,
  loginResponse: PropTypes.object,
  loginLoading: PropTypes.bool,
  loginError: PropTypes.bool,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  password: makeSelectPassword(),
  loginLoading: makeSelectLoginLoading(),
  loginError: makeSelectLoginError(),
  loginResponse: makeSelectLoginResponse(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeEmail: (value) => { dispatch(changeEmail(value)); },
    onChangePassword: (value) => { dispatch(changePassword(value)); },
    onChangeFacebookData: (fullName, email, picture, facebookId, facebook) => { dispatch(facebookData(fullName, email, picture, facebookId, facebook)); },
    onSubmitForm: () => { dispatch(loginRequest()); },
    onFacebookClick: () => { dispatch(facebookLoginRequest()); },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Login);
