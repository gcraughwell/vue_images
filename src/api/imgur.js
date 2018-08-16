import qs from 'qs';
const CLIENT_ID = '7acc3fb79aa5636';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring
    )}`;
  }
};
//URL
// https://api.imgur.com/oauth2/authorize?
//client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE
