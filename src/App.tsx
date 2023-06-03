import "./App.css";
import { shallow } from "zustand/shallow";
import { useEffect } from "react";
import { Box, Grid } from "@chakra-ui/react";
import WeatherCardRight from "./components/WeatherCardRight";
import WeatherCardLeft from "./components/WeatherCardLeft";
import { useCurrentWeatherData } from "./store/CurrentWeatherData";
import { useCurrentCoordinates } from "./hook/useCurrentCoordinates";

function App() {
  const { getCurrentCoordinates } = useCurrentCoordinates();
  const { fetchCurrentWeatherData } = useCurrentWeatherData(
    (state) => ({
      loading: state.loading,
      error: state.error,
      fetchCurrentWeatherData: state.fetchCurrentWeatherData,
    }),
    shallow
  );

  // console.log(new Date().getDay());

  // console.log(formate.dayWeek(Number(new Date())));

  // const getCurrentWeatherData = async () => {
  //   try {
  //     const position = await getCurrentCoordinates();
  //     if (position) {
  //       await fetchCurrentWeatherData(position.latitude, position.longitude);
  //     }
  //     console.log("getCurrentWeatherData отработала успешно");
  //   } catch (error) {
  //     console.error("Ошибка получения координат:", error);
  //   }
  // };

  useEffect(() => {
    // getCurrentWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      bg="grey"
      w="85%"
      height="85%"
      display="flex"
      maxWidth="1280px"
      bgImg={"src/assets/andrew-neel-unsplash.jpg"}
      bgSize="cover"
      shadow="2xl"
    >
      <Grid w="100%" templateColumns="repeat(12, 1fr)">
        <WeatherCardLeft />
        <WeatherCardRight />
      </Grid>
    </Box>
  );
}

export default App;
