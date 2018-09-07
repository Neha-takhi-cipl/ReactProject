/**
*
* TripDashboardTutorial
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import images from 'images';
import { FormattedMessage } from 'react-intl';
import { getInitials } from 'appFunctions';
import Dialog from 'rc-dialog';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BottomBox from 'components/BottomBox';
import ChatTab from 'components/TripDashboard/ChatTab';
import './style/style.css';
import messages from './messages';
import MobileMenu from '../MobileMenu';

class TripDashboardTutorial extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    const { invitedUser } = this.props;
    this.state = {
      tutorialState: invitedUser ? 0 : 1,
      tutorialPop: invitedUser,
    };
  }
  next = (value) => {
    if (value !== 4) {
      this.setState({ tutorialState: value });
    } else {
      this.props.tutorialOpen();
    }
  }
  skipTutorial = () => {
    this.props.tutorialOpen();
    this.setState({ tutorialPop: !this.state.tutorialPop });
  }
  showTutorial = () => {
    this.setState({ tutorialState: 1, tutorialPop: !this.state.tutorialPop });
  }
  render() {
    const { profileData } = this.props;
    const { tutorialPop } = this.state;
    const nameInitials = (profileData && profileData.fullName) ? getInitials(profileData.fullName) : '';
    return (
      <div>
        <div className="TripDashboardTutorial desktop homeCover">
          <Helmet>
            <title>TripDashboard</title>
            <meta name="description" content="Description of TripDashboard" />
          </Helmet>
          <Dialog prefixCls="WelcomePopup" closable={false} maskClosable={false} visible={this.state.tutorialPop}>
            <div className="welcomePopTwo">
              <p className="mainHeading">Welcome to RoamingDuck</p>
              <p className="subHeading">trip planning made easy</p>
              <div className="middlePart">
                <p>Want to do a quick tutorial?</p>
              </div>
              <div className="bottomPart">
                <div className="bottomLeft">
                  <span role="button" tabIndex={0} onClick={() => { this.skipTutorial(); }} className="Skip">Skip</span>
                </div>
                <button onClick={() => { this.showTutorial(); }} type="submit" className="Done">Yes</button>
              </div>
            </div>
          </Dialog>
          <div>
            {(this.state.tutorialState !== 3) && !tutorialPop && <div className="overlayTop"></div>}
            <div className="tripHeader">
              {(this.state.tutorialState === 3) && <div className="overlayTopHalf"></div>}
              {(this.state.tutorialState === 3) && <div className="overlayTopHalfActive"></div>}
              <div className="book">
                <div className="bookComp">
                  <span>Book</span>
                  <img src={images.Book} className="bookImg" alt="book" />
                </div>
              </div>
              <div className="trip">
                <div className="tripInfo">
                  {/* <div className="tripName"><FormattedMessage {...messages.header} /></div> */}
                </div>
              </div>
              <div className="updates">
                <div className="updatedate">
                  <ul className="updateList">
                    <li className="bell"><img src={images.Bell} alt="bell" /></li>
                    <li className="addUser">
                      <div className="addTraveler">
                        <div>
                          <img className="addImg" src={images.Adduser} alt="Adduser" />
                        </div>
                      </div>
                    </li>
                    <li className="info">
                      <div className="invite">
                        <div>
                          <img className="infoImg" src={images.Info} alt="Info" />
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="profile">
                    <div className="EditProfile">
                      <div className="profilePic">
                        {(profileData && profileData.picture) ? <img className="profilepic" src={profileData.picture} alt="userPic" /> : <p className="userPic">{nameInitials}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="leftContainer">
              <div className="middleText">
                {!tutorialPop && ((this.state.tutorialState === 1) ? <div className="overlayActive"></div> : <div className="overlay"></div>)}
                <p className="rightText"><FormattedMessage {...messages.Collabrate} /></p>
                {(this.state.tutorialState === 1) && <div className="chatSection zIndex">
                  <p className="mainHeading">
                    <FormattedMessage {...messages.Chatsection} />
                  </p>
                  <p className="subHeading"><FormattedMessage {...messages.Discuss} /></p>
                  <div className="bottomPart">
                    <button onClick={() => { this.next(4); }} type="button" className="skip"><FormattedMessage {...messages.Skip} /></button>
                    <span className="pagination"><span>1</span>of<span>3</span></span>
                    <button onClick={() => { this.next(2); }} type="button" className="next"><FormattedMessage {...messages.Next} /></button>
                  </div>
                </div>}
              </div>
              <div className="addbox">
                <div className="add">
                  <input type="text" placeholder="+ New message" className="message" />
                  <button type="submit" className="attachment"><img src={images.attact} alt="attachment" /></button>
                </div>
              </div>
            </div>
            <div className="middleBar">{!tutorialPop && (<div className="overlay"></div>)}</div>
            <div className="rightContainer">
              <div className="middleText">
                {!tutorialPop && ((this.state.tutorialState === 2) ? <div className="overlayActive"></div> : <div className="overlay"></div>)}
                {(this.state.tutorialState === 3) && <div className="TopbarSection zIndex">
                  <p className="mainHeading">
                    <FormattedMessage {...messages.topbar} />
                  </p>
                  <p className="manage">Manage:</p>
                  <ul>
                    <li>trips</li>
                    <li>users (<span>add friends</span>)</li>
                    <li>trip preferances</li>
                    <li>trips</li>
                    <li>profile</li>
                  </ul>
                  <div className="bottomPart">
                    <button onClick={() => { this.next(4); }} type="button" className="skip"></button>
                    <span className="pagination"><span>3</span>of<span>3</span></span>
                    <button onClick={() => { this.next(4); }} type="button" className="next"><FormattedMessage {...messages.Done} /></button>
                  </div>
                </div>}
                <p className="rightText"><FormattedMessage {...messages.buildText} /></p>
                {(this.state.tutorialState === 2) && <div className="itiSection">
                  <p className="mainHeading">
                    <FormattedMessage {...messages.Itinerarysection} />
                  </p>
                  <p className="subHeading"><FormattedMessage {...messages.BuildManage} /></p>
                  <div className="bottomPart">
                    <button onClick={() => { this.next(4); }} type="button" className="skip"><FormattedMessage {...messages.Skip} /></button>
                    <span className="pagination"><span>2</span>of<span>3</span></span>
                    <button onClick={() => { this.next(3); }} type="button" className="next"><FormattedMessage {...messages.Next} /></button>
                  </div>
                </div>}
              </div>
              <div className="addbox">
                <div className="add"><span className="addIcon"><FormattedMessage {...messages.addIcon} /></span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="TripDashboardTutorial mobile homeCover">
          <div className="overlay"></div>
          <div className="tripHeader Dashboard_Mobile">
            <div className="book">
              {/* <img className="addImg" src={images.Bell} alt="bell" /> */}
            </div>
            <div className="trip">
              {/* <div className="tripName">Thailand trip</div> */}
            </div>
            <div className="updates">
            </div>
            <MobileMenu />
          </div>
          <div className="container">
            <Tabs>
              <TabList className="TripDashTab zIndex">
                <Tab><FormattedMessage {...messages.chat} /></Tab>
                <Tab><FormattedMessage {...messages.Itinerary} /></Tab>
              </TabList>
              <TabPanel>
                <div className="leftContainer">
                  <div className="leftContainerInner">
                    <div className="middleText">
                      <div className="mobileTutorial zIndex">
                        <p className="mainHeading">
                          Tip!
                        </p>
                        <p className="subHeading">Navigate our 2 main sections here:</p>
                        <div className="bottomPart">
                          <button onClick={this.skipTutorial} type="button" className="skip">x</button>
                        </div>
                      </div>
                      <p className="rightText"></p>
                    </div>
                  </div>
                  <BottomBox>
                    <ChatTab />
                  </BottomBox>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="rightContainer">
                  <div className="rightContainerInner">
                    <div className="middleText">
                      <p className="rightText"></p>
                    </div>
                  </div>
                  <BottomBox>
                    <div className="absoluteContainer"></div>
                    <div className="addIcon" role="button" tabIndex="0" >+</div>
                    <div className="addAmountInfo">yi</div>
                  </BottomBox>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>

      </div>
    );
  }
}

TripDashboardTutorial.propTypes = {
  tutorialOpen: PropTypes.func,
  profileData: PropTypes.object,
  invitedUser: PropTypes.any,
};

export default TripDashboardTutorial;
