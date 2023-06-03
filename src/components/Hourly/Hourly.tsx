import { UnorderedList } from "@chakra-ui/react";
import Hour from "./Hour";
import { useHorizontalScroll } from "../../hook/useHorizontalScroll";
import { useCurrentWeatherData } from "../../store/CurrentWeatherData";

const Hourly = () => {
  const containerRef = useHorizontalScroll();
  const hourly = useCurrentWeatherData((state) => state.info.hourly);

  return (
    <UnorderedList
      listStyleType="none"
      display="flex"
      gap={4}
      w="full"
      m={0}
      pt={12}
      borderTop="1px"
      borderColor="rgba(255,255,255, 0.2)"
      color="white"
      overflow="hidden"
      scrollBehavior="smooth"
      ref={containerRef}
    >
      {hourly.slice(1, 25).map(({ dt, temp, weather }, index) => (
        <Hour key={index} dt={dt} temp={temp} weather={weather} />
      ))}
    </UnorderedList>
  );
};

export default Hourly;
