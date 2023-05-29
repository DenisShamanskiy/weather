import { ListItem, Image, Box, Text } from "@chakra-ui/react";
import img from "../assets/linear.svg";

function NextDaysForecastItem() {
  return (
    <ListItem display="flex" justifyContent="space-between" w="full" h="12">
      <Image src={img} alt="Dan Abramov" w="12" h="12" />
      <Box mr="auto" ml={5}>
        <Text>Friday, April 21</Text>
        <Text>Heavy Rain</Text>
      </Box>
      <Box borderLeft="1px" pl={5}>
        <Text textAlign="center" w="6">
          9
        </Text>
        <Text textAlign="center" w="6">
          16
        </Text>
      </Box>
    </ListItem>
  );
}

export default NextDaysForecastItem;
