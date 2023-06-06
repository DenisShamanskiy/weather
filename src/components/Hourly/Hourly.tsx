import { GridItem, UnorderedList } from "@chakra-ui/react";
import Hour from "./Hour";
import { useHorizontalScroll } from "../../hook/useHorizontalScroll";
import { useCurrentWeatherData } from "../../store/CurrentWeatherData";

const Hourly = () => {
  const containerRef = useHorizontalScroll();
  const hourly = useCurrentWeatherData((state) => state.info.hourly);

  return (
    <GridItem
      colStart={1}
      colEnd={{ base: 2, md: 9 }}
      rowStart={{ base: 4, md: 4 }}
      rowEnd={{ base: 5, md: 7 }}
      display="flex"
      flexDirection="column"
      mt="auto"
      w="full"
      alignItems="end"
      px={{ base: 4, md: 0 }}
      gap={12}
    >
      <UnorderedList
        listStyleType="none"
        m={0}
        display="flex"
        gap={4}
        w="full"
        pt={{ base: 8, md: 12 }}
        pb={{ base: 8, md: 0 }}
        borderTop="1px"
        borderBottom={{ base: "1px", md: "none" }}
        borderColor="rgba(255,255,255, 0.2)"
        color="white"
        overflowX="auto"
        scrollBehavior="smooth"
        ref={containerRef}
      >
        {hourly.slice(1, 25).map(({ dt, temp, weather }, index) => (
          <Hour key={index} dt={dt} temp={temp} weather={weather} />
        ))}
      </UnorderedList>
    </GridItem>
  );
};

export default Hourly;
