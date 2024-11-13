import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "381d00fd0c024ecc809f5060a2331538",
  },
});
