import { Box, UnorderedList } from "@chakra-ui/react";
import Hour from "./Hour";

function Hours() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderTop="1px"
      w="full"
      pt={12}
      borderColor="rgba(255,255,255, 0.2)"
    >
      <UnorderedList
        display="flex"
        listStyleType="none"
        color="white"
        gap={4}
        overflow="hidden"
        m={0}
      >
        <Hour />
        <Hour />
        <Hour />
        <Hour />
        <Hour />
        <Hour />
        <Hour />
        <Hour />
        <Hour />
      </UnorderedList>
    </Box>
  );
}

export default Hours;
