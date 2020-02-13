import store from "../store";
import { navigate } from "@reach/router";

// const basePath = "http://my-json-server.typicode.com/shubhamrawal/beach-data/";
const basePath = "/";

const get = async url => {
  const options = {
    method: "GET"
  };
  return await req(url, options);
};

const post = async (url, body) => {
  const options = {
    method: "POST",
    body: JSON.stringify(body)
  };
  return await req(url, options);
};

const req = async (url, options) => {
  const uri = basePath + url;
  const common = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const token = await store.getState().auth.token;
  if (token) {
    common.headers.Authorization = `Bearer ${token}`;
  }
  options = { ...options, ...common };
  let res;
  try {
    res = await fetch(uri, options);
  } catch (err) {
    // TODO: display error
    console.log(err);
    return;
  }

  if (!res.ok) {
    switch (res.status) {
      case 401:
        return;
      case 404:
        navigate("/404");
        return;
      default:
        return;
    }
  }

  return await res.json();
};

export { get, post };
