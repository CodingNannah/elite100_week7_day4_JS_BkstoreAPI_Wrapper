import { clientNoAuth, clientTokenAuth } from "./client.js";

const userEndpoint = "/user";

// Create a user = POST
export const registerUser = async (userData, cancelToken) => {
  let error;
  const response = await clientNoAuth(cancelToken).post(userEndpoint, userData);
  if (!response.ok) {
    error = "You are already in the system.";
  }
  return {
    error,
  };
};

// Edit a user = PUT
export const editUser = async (token, data, cancelToken) => {
  let error;
  const response = await clientTokenAuth(token, cancelToken).put(
    userEndpoint, data)
  if (!response.ok) {
    error = "I'm gonna need to see some identification.";
  }
  return {
    error,
  };
};


// Delete a user
export const deleteUser = async (token, cancelToken) => {
  let error;
  const response = await clientTokenAuth(token, cancelToken).delete(
    userEndpoint
  );
  if (!response.ok) {
    error = "I'm gonna need to see some identification.";
  }
  return { error };
};
