import axios from "axios";

const basePath = "http://my-json-server.typicode.com/shubhamrawal/beach-data/";

const get = async url => {
  const options = {
    url: basePath + url,
    method: "GET"
  };
  const res = await axios(options);
  return res;
};

export { get };
