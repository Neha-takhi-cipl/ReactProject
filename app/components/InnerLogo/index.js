/**
*
* InnerLogo
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import images from 'images';
import auth from 'utils/auth';
import messages from './messages';
import './Styles/styles.css';

class InnerLogo extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      path: '',
    };
  }
  navigateWithType = () => {
    const userDetails = auth.get('userInfo');
    if (userDetails) {
      this.props.history.push('/tripdashboard');
    } else {
      this.props.history.push('/');
    }
  }
  render() {
    return (
      <div className="innerLogo">
        <div onClick={this.navigateWithType} role="menuitem" tabIndex="0" > <img src={images.siteLogo} alt="Logo" className="imgResponsive" /> <span className="greenTitle greenTitleJustify"><FormattedMessage {...messages.RoamingDuck} /></span></div>
      </div>
    );
  }
}

InnerLogo.propTypes = {
  history: PropTypes.object,
};

export default InnerLogo;
