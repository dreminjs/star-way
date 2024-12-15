import { BASE_URL } from "../model/constants";
import axios from "axios";

const tg = window.Telegram.WebApp.initDataUnsafe;

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "user-id": tg.user?.id,
    "username": tg.user?.username,
  },
});
