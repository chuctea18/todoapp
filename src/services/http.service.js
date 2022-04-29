import axios from "axios";

// const prodURL = "http://134.209.101.116/";
const devURL = "http://localhost:5000/";
const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

const apiClient = axios.create({
  baseURL: devURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json",
    Authorization: ACCESS_TOKEN ? `Bearer ${ACCESS_TOKEN}` : "NO_AUTHORIZATION",
  },
});

export default apiClient;
