/**
 *
 * AgentLogin
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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectLoginLoading, makeSelectLoginResponse, makeSelectLoginError } from 'containers/App/selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import './styles/styles.css';
import MainHeader from '../../components/MainHeader';
import { makeSelectEmail, makeSelectPassword } from './selectors';
import { loginRequest } from '../App/actions';
import { changeEmail, changePassword } from './actions';

export class AgentLogin extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      emailError: '',
      passwordError: '',
      responseError: '',
    };
  }
  componentWillReceiveProps(nextProps) {
    const { loginLoading, loginError, loginResponse } = nextProps;
    this.setState({ responseError: '' });
    if (loginResponse.status === 404) { // email not found in database
      this.setState({ responseError: <FormattedMessage {...messages.emailNotRegistered} /> });
    } if (loginResponse.status === 401) { // password incorrect found in database
      this.setState({ responseError: <FormattedMessage {...messages.passwordIncorrect} /> });
    } else if (loginResponse.status && !loginLoading && !loginError) {
      localStorage.setItem('@user', JSON.stringify(loginResponse));
      nextProps.history.push('/dashboard');
    }
  }

  /**
  * @description handleSubmit is for validation of fields value as required.
  * @author PravinKumar
  * @since May 16 2018
  */

  onSubmitForm = () => {
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
  render() {
    return (
      <div className="agentLogin homeCover">
        <Helmet>
          <title>AgentLogin</title>
          <meta name="description" content="Description of AgentLogin" />
        </Helmet>
        <MainHeader />
        <div className="container">
          <div className="innerContainer">
            <div className="whiteContainer">
              <div className="topContainer">
                <p className="greenHeadTitle"><FormattedMessage {...messages.header} /></p>
              </div>
              <p className="headsubTitle"><FormattedMessage {...messages.headerSubtitle} /></p>
              <div className="bottom_container">
                <div className="form_div">
                  <form >
                    <div className="formField">
                      <input type="email" value={this.props.email} onChange={(evt) => { this.setState({ emailError: '', fbemailError: '' }); this.props.onChangeEmail(evt.target.value); }} className="inputTypeOne" placeholder="Email" />
                      <div className="warning">{this.state.emailError}</div>
                    </div>
                    <div className="formField">
                      <input type="password" value={this.props.password} onChange={(evt) => { this.setState({ passwordError: '' }); this.props.onChangePassword(evt.target.value); }} className="inputTypeOne" placeholder="Password" />
                      <div className="warning">{this.state.passwordError}</div>
                    </div>
                    <div className="marginBottomfifteen">
                      <button type="button" onClick={this.onSubmitForm} className="Login" placeholder="Password" ><FormattedMessage {...messages.loginbtn} /></button>
                      <div className="warning">{this.state.responseError}</div>
                    </div>
                  </form>
                  <div className="linkOne"><Link to={'/forgotpassword'}><FormattedMessage {...messages.forgotPassword} /></Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AgentLogin.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  onSubmitForm: PropTypes.func,
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
    onSubmitForm: () => { dispatch(loginRequest()); },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'agentLogin', reducer });
const withSaga = injectSaga({ key: 'agentLogin', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AgentLogin);
