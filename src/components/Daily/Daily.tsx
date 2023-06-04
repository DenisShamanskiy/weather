import { GridItem, UnorderedList } from "@chakra-ui/react";
import { useCurrentWeatherData } from "../../store/CurrentWeatherData";
import Day from "./Day";

const Daily = () => {
  const daily = useCurrentWeatherData((state) => state.info.daily);

  return (
    <GridItem
      w="100%"
      maxW="420px"
      colStart={{ base: 1, md: 9 }}
      colEnd={{ base: 2, md: 13 }}
      rowStart={{ base: 5, md: 3 }}
      rowEnd={{ base: 6, md: 7 }}
      display="flex"
      justifySelf="center"
    >
      <UnorderedList
        listStyleType="none"
        display="flex"
        gap={4}
        w="full"
        m={0}
        flexDirection="column"
        justifyContent="space-between"
        color="white"
        overflowY="scroll"
        scrollBehavior="smooth"
        __css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {daily.slice(1).map(({ dt, temp: { min, max }, weather }, index) => (
          <Day key={index} dt={dt} min={min} max={max} weather={weather} />
        ))}
      </UnorderedList>
    </GridItem>
  );
};

export default Daily;
