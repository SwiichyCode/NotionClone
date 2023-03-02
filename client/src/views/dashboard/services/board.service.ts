import axios from "axios";
import authHeader from "../../../services/auth-header";
import api from "@/api/api";

type Board = {
  id: string;
  name: string;
  emoji: string;
  owner: string;
};

const API_URL = "http://localhost:8080/api/dashboard/";

const getBoards = async () => {
  const _id = JSON.parse(localStorage.getItem("user") as string).id;
  return await api.get(API_URL + "all/" + _id);
};

const addBoard = async (data: Board) => {
  console.log("addBoard data: ", data);
  return await axios.post(API_URL + "add", data);
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
