import "./App.css";
import { shallow } from "zustand/shallow";
import { useEffect } from "react";
import { Grid } from "@chakra-ui/react";
import { useCurrentWeatherData } from "./store/CurrentWeatherData";
import { useCurrentCoordinates } from "./hook/useCurrentCoordinates";
import Daily from "./components/Daily/Daily";
import CurrentDetails from "./components/CurrentDetails";
import Search from "./components/Search";
import Title from "./components/Title";
import Hourly from "./components/Hourly/Hourly";
import Footer from "./components/Footer/Footer";

const App = () => {
  const { getCurrentCoordinates } = useCurrentCoordinates();
  const { fetchCurrentWeatherData } = useCurrentWeatherData(
    (state) => ({
      loading: state.loading,
      error: state.error,
      fetchCurrentWeatherData: state.fetchCurrentWeatherData,
    }),
    shallow
  );

  const getCurrentWeatherData = async () => {
    try {
      const position = await getCurrentCoordinates();
      if (position) {
        await fetchCurrentWeatherData(position.latitude, position.longitude);
      }
      console.log("getCurrentWeatherData отработала успешно");
    } catch (error) {
      console.error("Ошибка получения координат:", error);
    }
  };

  useEffect(() => {
    getCurrentWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid
      minW="xs"
      templateColumns={{ base: "100%", md: "repeat(12, 1fr)" }}
      gridTemplateRows={{ base: "repeat(6, 1fr)", md: "repeat(6, 1fr) 56px" }}
      w={{ base: "95%", lg: "85%" }}
      height="90%"
      maxWidth="1280px"
      gap={{ base: 8, md: 4 }}
      p={{ base: 0, md: 2 }}
    >
      <Title />
      <Hourly />
      <Search />
      <CurrentDetails />
      <Daily />
      <Footer />
    </Grid>
  );
};

export default App;
