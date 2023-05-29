import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid } from "@chakra-ui/react";
import { getCurrentCoordinates } from "./service";
import WeatherCardRight from "./components/WeatherCardRight";
import WeatherCardLeft from "./components/WeatherCardLeft";

function App() {
  const [data, setData] = useState();

  async function сurrentWeatherAPI(latitude: number, longitude: number) {
    const response = await axios({
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
    return response.data;
  }

  async function fetchWeather() {
    try {
      const position = await getCurrentCoordinates();
      if (position) {
        console.log(position.latitude, position.longitude);
        const res = await сurrentWeatherAPI(
          position.latitude,
          position.longitude
        );
        setData(res);
      }
      return null;
    } catch (error) {
      console.error("Ошибка получения координат:", error);
    }
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <Box
      bg="grey"
      w="85%"
      height="85%"
      display="flex"
      maxWidth="1280px"
      bgImg={"src/assets/andrew-neel-unsplash.jpg"}
      bgSize="contain"
      shadow="2xl"
    >
      <Grid w="100%" templateColumns="repeat(3, 1fr)">
        <WeatherCardLeft />
        <WeatherCardRight />
      </Grid>
    </Box>
  );
}

export default App;
