/**
*
* LogoutDialog
*
*/

import React from 'react';
import Dialog from 'rc-dialog';
import PropTypes from 'prop-types';
import './style/style.css';

class LogoutDialog extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { closeLogoutModal, logout, visible } = this.props;
    return (
      <Dialog title={'Logout Here'} onClose={closeLogoutModal} visible={visible}>
        <p>Are you sure you want to exit the application?</p>
        <div className="rc-dialog-footer">
          <div className="rc-scaller"></div>
          <button className="rc-btn rc-btn-ghost" onClick={closeLogoutModal} type="ghost">Cancel</button>
          <button className="rc-btn rc-btn-primary" onClick={logout} type="primary">Logout</button>
        </div>
      </Dialog>
    );
  }
}

LogoutDialog.propTypes = {
  closeLogoutModal: PropTypes.func,
  logout: PropTypes.func,
  visible: PropTypes.bool,
};

export default LogoutDialog;
