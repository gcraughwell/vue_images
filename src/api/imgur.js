import qs from "qs";
const CLIENT_ID = "7acc3fb79aa5636";
const ROOT_URL = "https://api.imgur.com";

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: "token"
    };
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring
    )}`;
  }
};
//URL
// https://api.imgur.com/oauth2/authorize?
//client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE

//Response
//http://localhost:8080/oauth2/callback#access_token=10e48247d8dac6f1b674d718f8e1d27e9684871d&expires_in=315360000&token_type=bearer&refresh_token=6ecb20432e331c88a7d73653e8d58de445434bbb&account_username=GCraughwell&account_id=91726193
