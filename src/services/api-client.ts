import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c88388382ac74490bbe8cf987605ad79", 
  },
});
