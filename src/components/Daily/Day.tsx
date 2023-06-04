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

const Day = ({ dt, min, max, weather }: Props) => {
  return (
    <ListItem
      display="flex"
      w="full"
      minHeight="65px"
      backdropFilter="auto"
      backdropBlur={"8px"}
      bg={"rgba(100,100,100, 0.2)"}
      p={1}
      boxShadow="base"
    >
      <Image
        src={getIcon(weather[0].icon)}
        alt={`${weather[0].main} ${"icon"}`}
        w={10}
        h={10}
        m={2}
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        mx={5}
        overflowX="hidden"
      >
        <Box display="inline-flex" gap={1}>
          <Text whiteSpace="nowrap">{formate.dayWeekLong(dt)}</Text>
          <Text overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
            {formate.dayAndMonth(dt)}
          </Text>
        </Box>
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
        pl={{ base: 5, md: 2 }}
        pr={{ base: 4, md: 0 }}
        ml="auto"
        my="auto"
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

export default Day;
