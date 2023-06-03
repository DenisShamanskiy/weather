import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { General } from "../types/store";
import { geocodingAPI } from "../API/GeocodingAPI";
import { oneCallAPI } from "../API/OneCallAPI";

interface CurrentWeatherDataState {
  info: General;
  name: string;
  loading: boolean;
  error: null | string;
  fetchCurrentWeatherData: (latitude: number, longitude: number) => void;
}

export const useCurrentWeatherData = create(
  devtools(
    persist(
      immer<CurrentWeatherDataState>((set) => ({
        info: {
          lat: 0,
          lon: 0,
          timezone: "string",
          timezone_offset: 0,
          current: {
            dt: 0,
            sunrise: 0,
            sunset: 0,
            temp: 0,
            feels_like: 0,
            pressure: 0,
            humidity: 0,
            dew_point: 0,
            uvi: 0,
            clouds: 0,
            visibility: 0,
            wind_speed: 0,
            wind_deg: 0,
            wind_gust: 0,
            weather: [
              {
                id: 0,
                main: "string",
                description: "string",
                icon: "string",
              },
            ],
          },
          // minutely: [],
          hourly: [],
          daily: [],
          alerts: [],
        },
        name: "",
        loading: false,
        error: null,
        fetchCurrentWeatherData: async (
          latitude: number,
          longitude: number
        ) => {
          set({ loading: true });
          try {
            const responseOneCallAPI = await oneCallAPI(latitude, longitude);
            const responseGeocoding = await geocodingAPI(latitude, longitude);
            set({
              info: responseOneCallAPI.data,
              name: responseGeocoding.data[0].local_names.ru,
              error: null,
            });
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
