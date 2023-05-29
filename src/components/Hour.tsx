import { ListItem, Text, Image, Box } from "@chakra-ui/react";
import img from "../assets/linear.svg";

function Hour() {
  return (
    <ListItem
      border={1}
      p={1}
      bg={"rgba(255,255,255, 0.1)"}
      backdropFilter="auto"
      backdropBlur={"4px"}
      minWidth="65px"
    >
      <Text borderBottom="1px" textAlign="center" pb={1}>
        10:00
      </Text>
      <Box m={2}>
        <Image src={img} alt="Dan Abramov" w="full" />
      </Box>
      <Text textAlign="center" fontSize="xl" color="#f9fbfc">
        18°
      </Text>
    </ListItem>
  );
}

export default Hour;
