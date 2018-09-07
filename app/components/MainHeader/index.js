/**
*
* MainHeader
*
*/

import React from 'react';
import auth from 'utils/auth';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import messages from './messages';
import images from '../../images';
import './Styles/styles.css';

function MainHeader() {
  const loggedInUser = auth.getUserInfo();
  return (
    <div className="headerWrapper">
      <div className="headerLogoWrapper">
        <Link to={'/'} > <img src={images.siteLogo} alt="Logo" className="imgResponsive" /> <span className="greenTitle greenTitleJustify">RoamingDuck</span> </Link> </div>
      <div className="headerLinks">
        {!(loggedInUser && loggedInUser.userType) && <ul>
          <li>
            <Link to={'/signup'} className="linkGreen"><FormattedMessage {...messages.signup} /></Link>
          </li>
          <li>
            <Link to={'/login'} className="linkGreen"><FormattedMessage {...messages.login} /></Link>
          </li>
          <li>
            <Link to={'/agent'} className="linkGray"><FormattedMessage {...messages.agent} /></Link>
          </li>
        </ul>}
      </div>
    </div>
  );
}

MainHeader.propTypes = {

};

export default MainHeader;
