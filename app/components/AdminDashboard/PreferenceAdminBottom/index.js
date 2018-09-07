/**
*
* PreferenceAdminBottom
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import messages from './messages';
import './style/style.css';

class PreferenceAdminBottom extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  agentNameParse = (agentNames) => {
    let names = '';
    agentNames.map((item, key) => {
      let sufix = '';
      if (key >= 0 && key < (agentNames.length - 1)) {
        sufix = ', ';
      }
      names += `${item.fullName}${sufix}`;
      return true;
    });
    return names;
  }
  render() {
    const { totalUser, agentNames, createdOn, updatedOn, onClick, isSelfPlanned } = this.props;
    const createdAgo = moment((createdOn / 1000), 'X').fromNow();
    const UpdatedAgo = moment((updatedOn / 1000), 'X').fromNow();
    return (
      <div role="button" tabIndex={0} onClick={onClick} className="PreferenceAdminBottom">
        <div className="users">
          <FormattedMessage {...messages.Users} />: <span>{totalUser}{((agentNames) && agentNames.length > 0) && <span className="AgentName"> (Agent: {this.agentNameParse(agentNames)})</span>}
            {isSelfPlanned && <span className="AgentName"> {'Self Planned'}</span>}</span>
        </div>
        {!isSelfPlanned && <div>{agentNames ? (<div className="updated">
          <FormattedMessage {...messages.updated} />: <span>{UpdatedAgo}</span>
        </div>) : (<div className="updated">
          <FormattedMessage {...messages.created} />: <span>{createdAgo}</span>
        </div>)}</div>}
        {isSelfPlanned && (<div className="updated">
          <FormattedMessage {...messages.created} />: <span>{createdAgo}</span>
        </div>)}
      </div>
    );
  }
}

PreferenceAdminBottom.propTypes = {
  totalUser: PropTypes.number,
  agentNames: PropTypes.array,
  createdOn: PropTypes.number,
  updatedOn: PropTypes.number,
  onClick: PropTypes.func,
  isSelfPlanned: PropTypes.bool,
};

export default PreferenceAdminBottom;
