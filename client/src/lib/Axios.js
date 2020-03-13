import axios from "axios";

const Axios = axios.create({
  baseUrl:
    process.env.NODE_ENV === "development" ? "http://localhost:3001/" : "",
  timeout: 50000
});

export default Axios;
