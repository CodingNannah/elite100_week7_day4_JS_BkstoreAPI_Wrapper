import { create } from "apisauce";
import base64 from "base-64";

const base = "http://127.0.0.1:5000"

export const clientNoAuth = (cancelToken) => create({
    baseURL: base,
    cancelToken
});

export const clientBasicAuth = (email, password, cancelToken) => create({
    baseURL: base,
    cancelToken,
    headers: {
        Authorization: "Basic " + base64.encode(email + ":" + password),
      },
});

export const clientTokenAuth = (token, cancelToken) => create({
    baseURL: base,
    cancelToken,
    headers: {
      Authorization: "Bearer " + token,
    },
  });