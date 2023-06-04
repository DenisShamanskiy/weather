import { Text, Image, GridItem, Flex } from "@chakra-ui/react";
import { useCurrentWeatherData } from "../store/CurrentWeatherData";
import { daysWeekLong, monthNames } from "../utils/constants";
import { getIcon } from "../utils/functions";
import formate from "../service";

const Title = () => {
  const currentWeatherData = useCurrentWeatherData((state) => state);

  return (
    <GridItem
      colStart={1}
      colEnd={{ base: 2, md: 9 }}
      rowStart={1}
      rowEnd={{ base: 2, md: 5 }}
      w={{ base: "auto", md: "100%" }}
      display="flex"
      flexWrap="wrap"
      justifyContent={{ base: "center", md: "flex-start" }}
      alignSelf="end"
      bg={{ base: "rgba(100,100,100, 0.2)", md: "none" }}
      backdropFilter={{ base: "auto", md: "none" }}
      backdropBlur="8px"
      px={{ base: 6, md: 0 }}
      py={{ base: 3, md: 0 }}
      columnGap={12}
      mx="auto"
      boxShadow="base"
    >
      <Flex gap={12} alignItems={{ base: "center" }}>
        <Text fontSize={{ base: "5xl", md: "9xl" }} color="white">
          {Math.round(currentWeatherData.info.current.temp)}°
        </Text>
        <Flex direction="column" justifyContent="center">
          <Image
            src={getIcon(currentWeatherData.info.current.weather[0].icon)}
            alt="Dan Abramov"
            w={{ base: "60px", md: "100px" }}
            mx="auto"
            bg={"rgba(255,255,255, 0.1)"}
            backdropFilter="auto"
            backdropBlur={"4px"}
            rounded="full"
          />
        </Flex>
      </Flex>

      <Flex
        direction="column"
        justifyContent="center"
        alignSelf="center"
        textAlign="center"
        order={{ base: "-1", md: "1" }}
      >
        <Text
          fontSize={{ base: "5xl", md: "6xl" }}
          fontWeight="medium"
          color="white"
        >
          {currentWeatherData.name}
        </Text>
        <Text color="white">
          {formate.formateDayWeek(daysWeekLong, monthNames)}
        </Text>
        <Text textAlign="center" color="white">
          {currentWeatherData.info.current.weather[0].description}
        </Text>
      </Flex>
    </GridItem>
  );
};

export default Title;
