import axios from 'axios';
const api = axios.create({
  // we don't need to set base url in api because we already set this in our index.js file in view/src
  // baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
});
export default api;
