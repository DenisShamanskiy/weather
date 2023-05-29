import { Box, UnorderedList } from "@chakra-ui/react";
import NextDaysForecastItem from "./NextDaysForecastItem";

function NextDaysForecast() {
  return (
    <Box
      m={5}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <UnorderedList
        color="white"
        gap="4"
        listStyleType="none"
        m="0"
        w="full"
        py="5"
        display="flex"
        flexDirection="column"
      >
        <NextDaysForecastItem />
        <NextDaysForecastItem />
        <NextDaysForecastItem />
        <NextDaysForecastItem />
        <NextDaysForecastItem />
        <NextDaysForecastItem />
      </UnorderedList>
    </Box>
  );
}

export default NextDaysForecast;
