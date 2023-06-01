import axios from "axios";
import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { CurrentWeatherDataResponse } from "../types/store";

interface CurrentWeatherDataState {
  info: CurrentWeatherDataResponse;
  loading: boolean;
  error: null | string;
  fetchCurrentWeatherData: (latitude: number, longitude: number) => void;
}

export const useCurrentWeatherData = create(
  devtools(
    persist(
      immer<CurrentWeatherDataState>((set) => ({
        info: {
          coord: {
            lon: 0,
            lat: 0,
          },
          weather: [
            {
              id: 0,
              main: "",
              description: "",
              icon: "",
            },
          ],
          base: "",
          main: {
            temp: 0,
            feels_like: 0,
            temp_min: 0,
            temp_max: 0,
            pressure: 0,
            humidity: 0,
            sea_level: 0,
            grnd_level: 0,
          },
          visibility: 0,
          wind: {
            speed: 0,
            deg: 0,
            gust: 0,
          },
          clouds: {
            all: 0,
          },
          dt: 0,
          sys: {
            type: 0,
            id: 0,
            country: "",
            sunrise: 0,
            sunset: 0,
          },
          timezone: 0,
          id: 0,
          name: "",
          cod: 0,
        },
        loading: false,
        error: null,
        fetchCurrentWeatherData: async (
          latitude: number,
          longitude: number
        ) => {
          set({ loading: true });
          try {
            const response = await axios<CurrentWeatherDataResponse>({
              url: "https://api.openweathermap.org/data/2.5/weather",
              params: {
                lat: latitude,
                lon: longitude,
                units: "metric",
                lang: "ru",
                appid: import.meta.env.VITE_API_KEY,
              },
              timeout: 10000,
            });
            set({ info: response.data, error: null });
          } catch (error) {
            let message = "Unknown Error";
            if (error instanceof Error) message = error.message;
            set({ error: message });
          } finally {
            set({ loading: false });
          }
        },
      })),
      {
        name: "Current Weather Data",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
