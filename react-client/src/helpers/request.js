// const basePath = "http://my-json-server.typicode.com/shubhamrawal/beach-data/";
const basePath = "/";

const get = async url => {
  const uri = basePath + url;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
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

export { get };
