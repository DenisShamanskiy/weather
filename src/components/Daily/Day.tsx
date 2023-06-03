import { ListItem, Text, Box, Image } from "@chakra-ui/react";
import formate from "../../utils/formate";
import { getIcon } from "../../utils/functions";

type Props = {
  dt: number;
  min: number;
  max: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
};

const Hour = ({ dt, min, max, weather }: Props) => {
  return (
    <ListItem display="flex" w="full" h="12">
      <Image
        src={getIcon(weather[0].icon)}
        alt={`${weather[0].main} ${"icon"}`}
        w="12"
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        mx={5}
        overflowX="hidden"
      >
        <Text overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
          {formate.dayWeekLong(dt)}
        </Text>
        <Text
          fontSize="xs"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          {weather[0].description}
        </Text>
      </Box>
      <Box
        borderLeft="1px"
        borderColor="rgba(255,255,255, 0.2)"
        pl={5}
        ml="auto"
        whiteSpace="nowrap"
      >
        <Text textAlign="center" w="8">
          {Math.round(min)}°
        </Text>
        <Text textAlign="center" w="8">
          {Math.round(max)}°
        </Text>
      </Box>
    </ListItem>
  );
};

export default Hour;
