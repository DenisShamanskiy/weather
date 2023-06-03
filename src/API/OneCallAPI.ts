import axios from "axios";
import { General } from "../types/store";

export const oneCallAPI = async (latitude: number, longitude: number) => {
  return axios<General>({
    url: "https://api.openweathermap.org/data/3.0/onecall?",
    params: {
      lat: latitude,
      lon: longitude,
      exclude: "minutely",
      units: "metric",
      lang: "ru",
      appid: import.meta.env.VITE_API_KEY,
    },
    timeout: 10000,
  });
};
