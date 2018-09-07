
export const FACEBOOK_APPID = '1821987291379594';
// export const BASE_URL = 'http://192.168.1.69:3000'; // Abhishek Mani api url
export const BASE_URL = 'http://192.168.1.27:3000'; // pravin api url
// export const BASE_URL = 'http://192.168.1.50:3000'; // Shivani api url
// export const BASE_URL = 'http://203.122.29.213:3061'; // release server Api url
export const SOCKET_URL = BASE_URL; // local api url
const API_PREFIX = `${BASE_URL}/api`;
export const USER_TYPE = {
  traveller: 'traveller',
  agent: 'agent',
  admin: 'admin',
};
export const ITINERARY_TYPE = {
  flights: 'flights',
  accommodation: 'accommodation',
  transport: 'transport',
  activities: 'activities',
  other: 'other',
};
export const ITINERARY_ACTION_TYPE = {
  add: 'add',
  edit: 'edit',
  remove: 'remove',
  back: 'back',
};
export const AFTER_LOGIN_REDIRECT = {
  traveller: '/tripdashboard',
  agent: '/agentdashboard',
  admin: '/admindashboard',
};
export const API_ENDPOINTS = {
  login: `${API_PREFIX}/login`,
  register: `${API_PREFIX}/register`,
  agentRegister: `${API_PREFIX}/register-agent`,
  updateAgent: `${API_PREFIX}/agent`, // agentId in url param
  getAgents: `${API_PREFIX}/agent`,
  forgotPassword: `${API_PREFIX}/forgotPassword`,
  getUserProfile: `${API_PREFIX}/getUserProfile`,
  addTripItinerary: `${API_PREFIX}/addTripItinerary`,
  uploadProfilePic: `${API_PREFIX}/uploadProfilePic`,
  updateUserProfile: `${API_PREFIX}/updateUserProfile`,
  uesrTutotial: `${API_PREFIX}/user`, // to update tutorial flag pass /userid

  createTrip: `${API_PREFIX}/createTrip`,
  tripById: `${API_PREFIX}/trip`,
  userTrips: `${API_PREFIX}/user-trip`, // get all trips of logged in user
  tripUpdate: `${API_PREFIX}/trip`, // Updates 'tripName' on the basis of 'USER_ID' passes as 'tripId'

  createTripItinerary: `${API_PREFIX}/trip-itinerary`,
  itinerary: `${API_PREFIX}/itinerary`, // put /itinerary/:itineraryID TO ADD itinerary
  updateItinerary: `${API_PREFIX}/update-key`,
  removeItinerary: `${API_PREFIX}/itinerary`, // DELETE method with /itineray

  adminJobs: `${API_PREFIX}/job`,
  newJobs: `${API_PREFIX}/available-job`,
  agentJob: `${API_PREFIX}/agent-job`,
  assignJob: `${API_PREFIX}/assign-job`,

  uploadPicture: `${API_PREFIX}/upload-image`,
  uploadAttachment: `${API_PREFIX}/upload`,
  inviteFriend: `${API_PREFIX}/invite-friend`,
};

export const SOCKET_EVENT = {
  chat: 'chat',
  room: 'room',
  history: 'history',
  typing: 'typing',
  online: 'online',
  offline: 'offline',
  detailsUpdated: 'detailsUpdated',
};
export const CHAT_TYPE = {
  message: 'message',
  image: 'image',
  file: 'file',
};
export const SETTING_CONSTANT = {
  defaultTimeZone: 'AEST',
};
