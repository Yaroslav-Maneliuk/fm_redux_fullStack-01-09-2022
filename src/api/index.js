import axios from "axios";
import qs from "query-string";

const httpClient = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const createUser = (data) => httpClient.post("/users", data);
export const getAllUsers = ({ limit = 5, offset = 0 }) =>
  httpClient.get(`/users?${qs.stringify({limit, offset})}`);
// export const getUser = (id)=>httpClient.get("/users", id)
