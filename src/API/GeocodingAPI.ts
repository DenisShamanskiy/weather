import axios from "axios";
import { ResponseReverseGeocoding } from "../types/store";

export const geocodingAPI = async (latitude: number, longitude: number) => {
  return axios<ResponseReverseGeocoding>({
    url: "https://api.openweathermap.org/geo/1.0/reverse",
    params: {
      lat: latitude,
      lon: longitude,
      limit: 1,
      appid: import.meta.env.VITE_API_KEY,
    },
    timeout: 10000,
  });
};
