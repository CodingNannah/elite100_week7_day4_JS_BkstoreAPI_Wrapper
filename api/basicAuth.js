import {clientBasicAuth} from "./client.js";

// verify this endpoint!
const endpoint = "/login";

export const getUser = async (email, password, cancelToken) => {
    let error;
    let user;
  
    const response = await clientBasicAuth(email, password, cancelToken).get(
        endpoint
    ); if (response.ok) {
        user = response.data;
    } else if (response.status == 401) {
        error = "I'm gonna need to see some identification.";
    } else {
        error = "These are not the droids we're looking for. Move along.";
    }
  
    return {
      error,
      user,
    };
  
  };
  
