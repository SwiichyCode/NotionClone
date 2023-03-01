import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";
const USER_API = "http://localhost:8080/api/user/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const updateUser = (username: string, email: string) => {
  const id = JSON.parse(localStorage.getItem("user") as string).id;

  return axios.post(USER_API + id, {
    username,
    password: "alphabeta",
    email,
  });
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  updateUser,
};

export default UserService;
