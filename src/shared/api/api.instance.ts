import { BASE_URL } from "../model/constants";
import axios from "axios";

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "user-id": 1413661451,
    username: "@dreami_e",
  },
});
