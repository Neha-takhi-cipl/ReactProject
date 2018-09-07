/**
*
* ChatTab
*
*/

import React from 'react';
import images from 'images';
import { SOCKET_EVENT } from 'appConfig';
import PropTypes from 'prop-types';
import './style/style.css';
class ChatTab extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      typingUsers: '',
    };
  }


  uploadAttachment = (file) => {
    const {
      uploadAttachment,
    } = this.props;
    if (file) {
      uploadAttachment(file);
    }
  }
  changeValue = (value) => {
    const {
      profileData,
      defaultTripId,
      client,
    } = this.props;
    this.setState({ message: value });
    client.emit(SOCKET_EVENT.typing, { roomId: defaultTripId, fullName: value.length > 0 ? profileData.fullName : '' });
  }
  render() {
    const {
      message,
    } = this.state;
    const {
      sendMessage,
      typingUsers,
    } = this.props;
    return (
      <div className="chatBox">
        <p className="isTyping">{typingUsers && (typingUsers !== '') && `${typingUsers} is typing...`}</p>
        <form className="inputFrom" onSubmit={(e) => { sendMessage(e, message); this.setState({ message: '' }); }}>
          <input value={message} onChange={(evt) => { this.changeValue(evt.target.value); }} type="text" placeholder="+ New message" className="message" />
        </form>
        <label htmlFor="uploadAttachment" className="attachment"><img src={images.attact} alt="attachment" />
          <input
            onChange={() => { this.uploadAttachment(this.fileUpload.files[0]); }}
            className="hide"
            id="uploadAttachment"
            type="file"
            accept=".jpg, .png, .jpeg, .mp4, .mov, .pdf, .doc, .docx, .xls, .xlsx, .txt"
            ref={(ref) => { this.fileUpload = ref; }}
          />
        </label>

      </div>
    );
  }
}

ChatTab.propTypes = {
  defaultTripId: PropTypes.string,
  profileData: PropTypes.object,
  uploadAttachment: PropTypes.func,
  sendMessage: PropTypes.func,
  typingUsers: PropTypes.string,
  client: PropTypes.object,
};

export default ChatTab;
