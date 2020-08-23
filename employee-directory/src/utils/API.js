import axios from "axios";

export default {
  search: () => {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};