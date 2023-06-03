import { Box, ListItem, UnorderedList, Text } from "@chakra-ui/react";
import { useCurrentWeatherData } from "../store/CurrentWeatherData";
import formate from "../utils/formate";

const CurrentDetails = () => {
  const current = useCurrentWeatherData((state) => state.info.current);
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
        <ListItem
          display="flex"
          justifyContent="space-between"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          <Text>Давление</Text>
          <Text>{formate.pressure(current.pressure)}</Text>
        </ListItem>
        <ListItem display="flex" justifyContent="space-between">
          <Text>Ветер</Text>
          <Text>{Math.round(current.wind_speed)} м.с.</Text>
          {/* <Text>{formate.windDirection(current.wind_deg)}</Text> */}
        </ListItem>
        <ListItem display="flex" justifyContent="space-between">
          <Text>Влажность</Text>
          <Text>{current.humidity}%</Text>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default CurrentDetails;
