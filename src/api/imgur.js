import qs from "qs";
import axios from "axios";
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
  },
  //using axios to get the endpoint from imgur while passing the header auth
  //not sure how token works at this stage
  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  uploadImages(images, token) {
    const promises = Array.from(images).map(image => {
      const formData = new FormData();
      formData.append("image", image);

      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    });
    return Promise.all(promises);
  }
};

//URL
// https://api.imgur.com/oauth2/authorize?
//client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE

//Response
//http://localhost:8080/oauth2/callback#access_token=10e48247d8dac6f1b674d718f8e1d27e9684871d&expires_in=315360000&token_type=bearer&refresh_token=6ecb20432e331c88a7d73653e8d58de445434bbb&account_username=GCraughwell&account_id=91726193
