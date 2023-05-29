import { Box, Text, Image } from "@chakra-ui/react";
import img from "../assets/linear.svg";

function Title() {
  return (
    <Box display="flex" w="full" alignItems="center">
      <Text fontSize="9xl" color="white" lineHeight="114px">
        8°
      </Text>
      <Box mx={12}>
        <Text fontSize="6xl" color="white">
          London
        </Text>
        <Text color="white">Sunday, 6 Oct 19</Text>
      </Box>
      <Box h="114px">
        <Image src={img} alt="Dan Abramov" w="90px" />
        <Text textAlign="center" color="white">
          Rain
        </Text>
      </Box>
    </Box>
  );
}

export default Title;
