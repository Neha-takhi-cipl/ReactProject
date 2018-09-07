/**
*
* UserPopup
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import CropViewer from 'rc-cropping';
import Dialog from 'rc-dialog';
import messages from './messages';
import DivClick from '../DivClick';
import './style/style.css';
import './style/rc-cropping.css';
import './style/rc-dialog.css';
import images from '../../images';
import { getInitials } from '../../appFunctions';
class UserPopup extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    const {
      profileData,
    } = this.props;
    this.state = {
      profilePic: profileData && profileData.picture ? profileData.picture : '',
      fullName: profileData && profileData.fullName ? profileData.fullName : '',
      email: profileData && profileData.email ? profileData.email : '',
      password: '',
      tempPic: '',
      cropPic: '',
      fullNameError: '',
      emailError: '',
      passwordError: '',
      uploading: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.profileData !== nextProps.profileData) {
      this.setState({
        profilePic: nextProps.profileData.picture,
        fullName: nextProps.profileData.fullName ? nextProps.profileData.fullName : '',
        email: nextProps.profileData.email ? nextProps.profileData.email : '',
        password: '',
        uploading: false,
      });
    }
  }
  onSubmit = (evt) => {
    evt.preventDefault();
    let flag = 1;
    const emailRegx = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegx = /^([a-zA-Z]{6,10}|[a-zA-Z\d]{6,10}|[\d]{6,10})$/;
    if (!this.state.fullName) {
      flag = 0;
      this.setState({ fullNameError: <FormattedMessage {...messages.fieldWarning} /> });
    } else {
      this.setState({ fullNameError: '' });
    }
    if (!this.state.email) {
      flag = 0;
      this.setState({ emailError: <FormattedMessage {...messages.fieldWarning} /> });
    } else if (!emailRegx.test(this.state.email)) {
      flag = 0;
      this.setState({ emailError: <FormattedMessage {...messages.emailFieldWarning} /> });
    } else {
      this.setState({ emailError: '' });
    }
    if (!this.state.password || this.state.password === '') {
      this.setState({ passwordError: '' });
    } else if (!passwordRegx.test(this.state.password)) {
      flag = 0;
      this.setState({ passwordError: <FormattedMessage {...messages.passwordFieldWarning} /> });
    } else {
      this.setState({ passwordError: '' });
    }
    if (flag) {
      this.props.updateData(this.state);
    }
  }
  onSelectImage = (file) => {
    this.uploadProfilePicture(file);
  }
  uploadProfilePicture = (file) => {
    this.props.updateProfilePicture(file);
  }
  emptyFunction = () => { }
  render() {
    const nameInitials = this.state.fullName !== '' ? getInitials(this.state.fullName) : '';
    return (
      <div>
        <div className="userPopup desktop">
          <form onSubmit={this.onSubmit}>
            <div className="topPart">
              <div className="leftPart">
                <label htmlFor="file-input" className="inputfile">
                  {!this.state.uploading && <CropViewer
                    getSpinContent={this.emptyFunction}
                    size={[106, 106]}
                    thumbnailSizes={[[106, 106], [64, 64]]}
                    renderModal={() => <Dialog closable={false} />}
                    locale="en-US"
                    ref={(ele) => { this.cropper = ele; }}
                    circle={false}
                    onChange={(file) => { this.onSelectImage(file); }}
                    showSelected={false}
                    resetPreviewAfterSelectImage
                    accept="image/jpeg,image/png,image/jpg"
                  />}
                  {((this.state.profilePic !== undefined) && (this.state.profilePic !== '')) ? <img className="profilepic" src={this.state.profilePic} alt="Profile" /> : <DivClick ><p >{nameInitials}</p></DivClick>}
                </label>
              </div>
              <div className="RightPart">
                <div className="groupForm">
                  <label htmlFor="Name"><FormattedMessage {...messages.name} />:</label>
                  <input type="text" value={this.state.fullName} onChange={(evt) => { this.setState({ fullName: evt.target.value, fullNameError: '' }); }} placeholder="Name" className="formInput cpitalize" />
                  <div className="warning">{this.state.fullNameError}</div>
                </div>
                <div className="groupForm">
                  <label htmlFor="Email"><FormattedMessage {...messages.email} />:</label>
                  <input type="email" value={this.state.email} onChange={(evt) => { this.setState({ email: evt.target.value, emailError: '' }); }} placeholder="Email" className="formInput" />
                  <div className="warning">{this.state.emailError}</div>
                </div>
                <div className="groupForm">
                  <label htmlFor="Password"><FormattedMessage {...messages.password} />:</label>
                  <input type="password" value={this.state.password} onChange={(evt) => { this.setState({ password: evt.target.value, passwordError: '' }); }} placeholder="********" className="formInput" />
                  <div className="warning">{this.state.passwordError}</div>
                </div>
              </div>
            </div>
            <div className="bottomPart">
              <input type="submit" value="Confirm" className="confirm" />
            </div>
          </form>
          {/* } */}
        </div>

        <div className="userPopup mobile">
          <button type="button" onClick={this.props.cancel} className="BackArrow"><img src={images.MobBack} alt="backIcon" /></button>
          <p className="popupHeading">Edit Profile</p>
          <form onSubmit={this.onSubmit}>
            <div className="topPart">
              <div className="leftPart">
                <label htmlFor="file-input" className="inputfile">
                  {!this.state.uploading && <CropViewer
                    getSpinContent={this.emptyFunction}
                    size={[106, 106]}
                    thumbnailSizes={[[106, 106], [64, 64]]}
                    renderModal={() => <Dialog closable={false} />}
                    locale="en-US"
                    ref={(ele) => { this.cropper = ele; }}
                    circle={false}
                    onChange={(file) => { this.onSelectImage(file); }}
                    showSelected={false}
                    resetPreviewAfterSelectImage
                    accept="image/jpeg,image/png,image/jpg"
                  />}
                  {((this.state.profilePic !== undefined) && (this.state.profilePic !== '')) ? <img className="profilepic" src={this.state.profilePic} alt="Profile" /> : <DivClick ><p >{nameInitials}</p></DivClick>}
                </label>
              </div>
              <div className="RightPart">
                <div className="groupForm">
                  <label htmlFor="Name"><FormattedMessage {...messages.name} />:</label>
                  <input type="text" value={this.state.fullName} onChange={(evt) => { this.setState({ fullName: evt.target.value, fullNameError: '' }); }} placeholder="Name" className="formInput cpitalize" />
                  <div className="warning">{this.state.fullNameError}</div>
                </div>
                <div className="groupForm">
                  <label htmlFor="Email"><FormattedMessage {...messages.email} />:</label>
                  <input type="email" value={this.state.email} onChange={(evt) => { this.setState({ email: evt.target.value, emailError: '' }); }} placeholder="Email" className="formInput" />
                  <div className="warning">{this.state.emailError}</div>
                </div>
                <div className="groupForm">
                  <label htmlFor="Password"><FormattedMessage {...messages.password} />:</label>
                  <input type="password" value={this.state.password} onChange={(evt) => { this.setState({ password: evt.target.value, passwordError: '' }); }} placeholder="********" className="formInput" />
                  <div className="warning">{this.state.passwordError}</div>
                </div>
              </div>
            </div>
            <div className="bottomPart">
              <input type="submit" value="Confirm" className="confirm" />
            </div>
          </form>
          {/* } */}
        </div>
      </div>
    );
  }
}

UserPopup.propTypes = {
  profileData: PropTypes.object,
  updateProfilePicture: PropTypes.func,
  updateData: PropTypes.func,
  cancel: PropTypes.func,
};

export default UserPopup;
