import { Box, Button, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function Search() {
  return (
    <Box
      m={5}
      display="flex"
      justifyContent="center"
      alignItems="center"
      boxSizing="border-box"
    >
      <Input
        focusBorderColor="teal.500"
        variant="flushed"
        placeholder="Поиск"
        _placeholder={{ color: "rgba(255,255,255, 0.2)" }}
        size="lg"
        mr={5}
        borderColor="rgba(255,255,255, 0.2)"
        color="white"
        boxSizing="border-box"
      />
      <Button
        colorScheme="teal"
        variant="solid"
        size="lg"
        rounded="none"
        p={0}
        color="#222831"
        boxSizing="border-box"
      >
        <SearchIcon />
      </Button>
    </Box>
  );
}

export default Search;
