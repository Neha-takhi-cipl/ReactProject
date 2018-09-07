/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import HomeButton from 'components/HomeButton';
import MainHeader from 'components/MainHeader';
import auth from 'utils/auth';
import { USER_TYPE, AFTER_LOGIN_REDIRECT } from 'appConfig';
import messages from './messages';

import './style/style.css';
export class Home extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    const loggedInUser = auth.getUserInfo();
    this.state = {
      isAuthenticated: loggedInUser && loggedInUser.userType ? loggedInUser.userType : 'GUST',
    };
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
      <div className="home homeCover">
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <MainHeader />
        <div className="container">
          <div className="innerContainer">
            <div className="topcontainer">
              <p>
                <FormattedMessage {...messages.heading} />
              </p>
              <div className="letStart">
                <HomeButton onClick={() => { this.props.history.push('/choose'); }} >
                  <FormattedMessage {...messages.button} />
                </HomeButton>
              </div>
            </div>
            <div className="bottomcontainer">
              <h3>
                <FormattedMessage {...messages.heading3} />
              </h3>
              <div className="option1">
                <h4>
                  <FormattedMessage {...messages.option1} />
                </h4>
                <p>
                  <FormattedMessage {...messages.option1para} />
                </p>
                <ul>
                  <li>
                    <FormattedMessage {...messages.list1} />
                  </li>
                  <li>
                    <FormattedMessage {...messages.list2} />
                  </li>
                  <li>
                    <FormattedMessage {...messages.list3} />
                  </li>
                </ul>
              </div>
              <div className="option2">
                <h4>
                  <FormattedMessage {...messages.option2} />
                </h4>
                <p>
                  <FormattedMessage {...messages.option2para} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.object,
};
export default Home;
