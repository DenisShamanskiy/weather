import { ListItem, Text, Image, Box } from "@chakra-ui/react";
import formate from "../../service";
import { useCurrentWeatherData } from "../../store/CurrentWeatherData";
import { getIcon } from "../../utils/functions";

type Props = {
  dt: number;
  temp: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
};

const Hour = ({ dt, temp, weather }: Props) => {
  const timezone_offset = useCurrentWeatherData(
    (state) => state.info.timezone_offset
  );

  return (
    <ListItem
      border={1}
      p={1}
      bg={"rgba(255,255,255, 0.1)"}
      backdropFilter="auto"
      backdropBlur={"4px"}
      minWidth="65px"
    >
      <Text
        borderBottom="1px"
        borderColor="rgba(255,255,255, 0.1)"
        textAlign="center"
        pb={1}
      >
        {formate.time(dt, timezone_offset)}
      </Text>
      <Box m={2}>
        <Image src={getIcon(weather[0].icon)} alt="Dan Abramov" w="full" />
      </Box>
      <Text textAlign="center" fontSize="xl" color="#f9fbfc">
        {Math.round(temp)}°
      </Text>
    </ListItem>
  );
};

export default Hour;
