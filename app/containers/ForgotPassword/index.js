/**
 *
 * ForgotPassword
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectEmail, makeSelectLoading, makeSelectError, makeSelectResponse } from './selectors';
import { changeEmail, forgetPasswordRequest } from './actions';
import './style/style.css';
import MainHeader from '../../components/MainHeader';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class ForgotPassword extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      emailError: '',
      response: '',
      responseError: '',
    };
  }
  componentWillReceiveProps(nextProps) {
    const { loading, error, response } = nextProps;
    if ((this.props.response !== nextProps.response) && !response.success && !loading) {
      this.setState({ responseError: <FormattedMessage {...messages.emailNotFound} /> });
      this.props.onChangeEmail('');
    } else if ((this.props.response !== nextProps.response) && response.status === 200 && !loading && !error) {
      this.setState({ emailError: '', response: <FormattedMessage {...messages.passwordSend} /> });
      this.props.onChangeEmail('');
    }
  }
  onSubmitForm = (evt) => {
    evt.preventDefault();
    let flag = 1;
    const emailRegx = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!this.props.email) {
      flag = 0;
      this.setState({ emailError: <FormattedMessage {...messages.fieldWarning} /> });
    } else if (!emailRegx.test(this.props.email)) {
      flag = 0;
      this.setState({ emailError: <FormattedMessage {...messages.emailFieldWarning} /> });
    } else {
      this.setState({ emailError: '' });
    }
    if (flag) {
      this.props.onSubmitForm();
    }
  }
  render() {
    return (
      <div className="forgotPassword">
        <Helmet>
          <title>ForgotPassword</title>
          <meta name="description" content="Description of ForgotPassword" />
        </Helmet>
        <div className="container">
          <MainHeader />
          <div className="innerContainer">
            <div className="topContainer">
              <p><FormattedMessage {...messages.Forgot} /></p>
            </div>
            <div className="formMsgs">
              <div className="info">{this.state.response}</div>
              <div className="warning">{this.state.responseError}</div>
            </div>
            <div className="bottom_container">
              <div className="form_div">
                <form onSubmit={this.onSubmitForm}>
                  <div className="formField">
                    <input type="text" value={this.props.email} onChange={(evt) => { this.setState({ emailError: '', response: '', responseError: '' }); this.props.onChangeEmail(evt.target.value); }} className="inputTypeOne" placeholder="Email" />
                    <div className="warning">{this.state.emailError}</div>
                  </div>
                  <div className="marginBottomfifteen">
                    <button type="submit" className="submit signup" ><FormattedMessage {...messages.submit} /></button>
                  </div>
                </form>
              </div>
              <div className="already_account"><FormattedMessage {...messages.already_account} /></div>
              <div className="signin"><Link to={'/login'}><FormattedMessage {...messages.signin} /></Link></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  email: PropTypes.string,
  onChangeEmail: PropTypes.func,
  onSubmitForm: PropTypes.func,
  response: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  response: makeSelectResponse(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeEmail: (value) => { dispatch(changeEmail(value)); },
    onSubmitForm: () => {
      dispatch(forgetPasswordRequest());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'forgotPassword', reducer });
const withSaga = injectSaga({ key: 'forgotPassword', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ForgotPassword);
