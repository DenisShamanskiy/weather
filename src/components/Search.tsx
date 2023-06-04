import { Button, GridItem, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Search = () => {
  return (
    <GridItem
      colStart={{ base: 1, md: 9 }}
      colEnd={{ base: 1, md: 13 }}
      rowStart={{ base: 2, md: 1 }}
      rowEnd={2}
      w="100%"
      maxW="420px"
      mt="auto"
      minW={{ md: "340px" }}
      p={5}
      bg={"rgba(100,100,100, 0.2)"}
      backdropFilter="auto"
      backdropBlur="8px"
      display="flex"
      justifyContent="space-between"
      justifySelf="center"
      boxShadow="base"
    >
      <Input
        focusBorderColor="teal.500"
        variant="flushed"
        placeholder="in progress..."
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
    </GridItem>
  );
};

export default Search;
