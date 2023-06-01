import { Text, Image, Box } from "@chakra-ui/react";
import { useCurrentWeatherData } from "../store/CurrentWeatherData";
import formate from "../service";
import { daysWeekLong, monthNames } from "../utils/constants";
import { getIcon } from "../utils/functions";

function Title() {
  const currentWeatherData = useCurrentWeatherData((state) => state.info);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      alignSelf="start"
      gap={12}
      lineHeight={1}
    >
      <Box>
        <Image
          src={getIcon(currentWeatherData.weather[0].icon)}
          alt="Dan Abramov"
          w="60px"
          mx="auto"
          bg={"rgba(255,255,255, 0.1)"}
          backdropFilter="auto"
          backdropBlur={"4px"}
          rounded="full"
        />
        <Text textAlign="center" color="white" mt={6}>
          {currentWeatherData.weather[0].description}
        </Text>
      </Box>
      <Text fontSize="9xl" color="white">
        {Math.floor(currentWeatherData.main.temp)}°
      </Text>
      <Box>
        <Text fontSize="6xl" color="white">
          {currentWeatherData.name}
        </Text>
        <Text color="white" mt={6}>
          {formate.formateDayWeek(daysWeekLong, monthNames)}
        </Text>
      </Box>
    </Box>
  );
}

export default Title;
