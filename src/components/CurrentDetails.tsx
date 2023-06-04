import { ListItem, UnorderedList, Text, GridItem } from "@chakra-ui/react";
import { useCurrentWeatherData } from "../store/CurrentWeatherData";
import formate from "../utils/formate";

const CurrentDetails = () => {
  const current = useCurrentWeatherData((state) => state.info.current);

  return (
    <GridItem
      colStart={{ base: 1, md: 9 }}
      colEnd={{ base: 1, md: 13 }}
      rowStart={{ base: 3, md: 2 }}
      rowEnd={{ base: 4, md: 3 }}
      w="100%"
      p={5}
      bg={"rgba(100,100,100, 0.2)"}
      backdropFilter="auto"
      backdropBlur={"8px"}
      display="flex"
      gap={8}
      maxW="420px"
      justifyContent="space-between"
      justifySelf="center"
      boxShadow="base"
    >
      <UnorderedList
        minW="200px"
        color="white"
        gap="4"
        listStyleType="none"
        m="0"
        w="100%"
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
        </ListItem>
        <ListItem display="flex" justifyContent="space-between">
          <Text>Влажность</Text>
          <Text>{current.humidity}%</Text>
        </ListItem>
      </UnorderedList>
    </GridItem>
  );
};

export default CurrentDetails;
