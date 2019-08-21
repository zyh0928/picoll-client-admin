import axios, { Method } from "axios";

axios.defaults.timeout = 30000;

axios.interceptors.response.use(
  resp => {
    const { error } = resp.data;

    if (error) throw error;

    return resp;
  },
  e => {
    if (e.message.includes("timeout")) throw 111;
  }
);

export default async (url = "", method: Method = "get", data = {}) => {
  const resp = await axios({
    url,
    method,
    data,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }).catch(e => {
    if (typeof e === "number") throw e;
    else if (e.constructor === Error) throw e.response.status;
    else throw "unknown";
  });

  return resp.data.result;
};
