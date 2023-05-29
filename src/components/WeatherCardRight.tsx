import { GridItem } from "@chakra-ui/react";
import CurrentDetails from "./CurrentDetails";
import NextDaysForecast from "./NextDaysForecast";
import Search from "./Search";

function WeatherCardRight() {
  return (
    <GridItem
      w="100%"
      h="100%"
      bg={"rgba(0,0,0, 0.2)"}
      backdropFilter="auto"
      backdropBlur={"8px"}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Search />
      <CurrentDetails />
      <NextDaysForecast />
    </GridItem>
  );
}

export default WeatherCardRight;
