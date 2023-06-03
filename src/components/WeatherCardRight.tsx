import { GridItem } from "@chakra-ui/react";
import CurrentDetails from "./CurrentDetails";
import Search from "./Search";
import Daily from "./Daily/Daily";

function WeatherCardRight() {
  return (
    <GridItem
      colStart={9}
      colEnd={13}
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
      <Daily />
    </GridItem>
  );
}

export default WeatherCardRight;
