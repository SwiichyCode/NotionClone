import axios from "axios";
import authHeader from "../../../services/auth-header";

const API_URL = "http://localhost:8080/api/dashboard/";

const getBoards = async () => {
  const _id = JSON.parse(localStorage.getItem("user") as string).id;
  return await axios.get(API_URL + "all/" + _id);
};

const addBoard = async (id: string, name: string) => {
  const _id = JSON.parse(localStorage.getItem("user") as string).id;

  return await axios.post(API_URL + "add", {
    id: id,
    name: name,
    owner: _id,
  });
};

const deleteBoard = (id: string) => {
  return axios.delete(API_URL + "delete/" + id, { headers: authHeader() });
};

const BoardService = {
  getBoards,
  addBoard,
  deleteBoard,
};

export default BoardService;
