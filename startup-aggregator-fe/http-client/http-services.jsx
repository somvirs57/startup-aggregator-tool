import axios from "axios";

const getHeader = (tokenType, token) => {
  if (tokenType == "defult") {
    return {
      "Content-Type": "application/json",
    };
  } else {
    return {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    };
  }
};
const baseUrl = "http://localhost:4000/auth/v1";
export const postMethod = async (request) => {
  const { endpoint, payload, tokenType } = request;
  const _headers = await getHeader(tokenType);
  const Url = baseUrl + endpoint;
  return axios.post(Url, payload, { headers: _headers });
};
