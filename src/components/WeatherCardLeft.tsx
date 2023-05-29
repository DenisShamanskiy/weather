import { GridItem } from "@chakra-ui/react";
import Hours from "./Hours";
import Title from "./Title";

function WeatherCardLeft() {
  return (
    <GridItem
      colStart={1}
      colEnd={3}
      display="flex"
      flexDirection="column"
      mt="auto"
      alignItems="end"
      p={12}
      gap={12}
    >
      <Title />
      <Hours />
    </GridItem>
  );
}

export default WeatherCardLeft;
