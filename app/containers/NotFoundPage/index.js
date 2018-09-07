/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import FlyBack from '../../components/FlyBack';
import './style/style.css';
import messages from './messages';


export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container">
        <div id="clouds">
          <div className="cloud x1"></div>
          <div className="cloud x1_5"></div>
          <div className="cloud x2"></div>
          <div className="cloud x3"></div>
          <div className="cloud x4"></div>
          <div className="cloud x5"></div>
        </div>
        <div className="ineerContainer">
          <div className="_404"><FormattedMessage {...messages.Error} /></div>
          <div className="Page"><FormattedMessage {...messages.PAGE} /></div>
          <div className="notFound"><FormattedMessage {...messages.NOT_FOUND} /></div>
          <FlyBack />

        </div>
      </div>
    );
  }
}
