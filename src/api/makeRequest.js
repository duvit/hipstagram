import axios from "axios";

const API_ENDPOINT = "http://52.3.249.107:9000/";

export const makeRequest = (config) => {
  config.url = `${API_ENDPOINT}/${config.url}`;

  return axios(config);
};
