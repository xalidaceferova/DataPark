import axios from "axios";
const apiEndpoint = import.meta.env.VITE_ENDPOINT;
const instance = axios.create({
  baseURL: apiEndpoint,
});
export { instance };
