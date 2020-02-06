// const basePath = "http://my-json-server.typicode.com/shubhamrawal/beach-data/";
const basePath = "/";

const get = async url => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  return await req(url, options);
};

const post = async (url, body) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  };
  return await req(url, options);
};

const req = async (url, options) => {
  const uri = basePath + url;
  let res;
  try {
    res = await fetch(uri, options);
  } catch (err) {
    // TODO: display error
    console.log(err);
    return;
  }

  if (!res.ok) {
    console.log(res);
    return;
  }

  return await res.json();
};

export { get, post };
