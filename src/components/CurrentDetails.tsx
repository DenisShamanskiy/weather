import { Box, ListItem, UnorderedList, Text } from "@chakra-ui/react";

function CurrentDetails() {
  return (
    <Box
      m={5}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <UnorderedList
        color="white"
        gap="4"
        listStyleType="none"
        m="0"
        w="full"
        py="5"
        display="flex"
        flexDirection="column"
      >
        <ListItem display="flex" justifyContent="space-between">
          <Text>Cloudy</Text>
          <Text>86%</Text>
        </ListItem>
        <ListItem display="flex" justifyContent="space-between">
          <Text>Humidity</Text>
          <Text>62%</Text>
        </ListItem>
        <ListItem display="flex" justifyContent="space-between">
          <Text>Wind</Text>
          <Text>8km/h</Text>
        </ListItem>
        <ListItem display="flex" justifyContent="space-between">
          <Text>Rain</Text>
          <Text>8mm</Text>
        </ListItem>
      </UnorderedList>
    </Box>
  );
}

export default CurrentDetails;
