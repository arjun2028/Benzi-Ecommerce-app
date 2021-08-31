import axios from "axios";

const instance = axios.create({
  baseURL: "...", //THE API
});

export default instance;
