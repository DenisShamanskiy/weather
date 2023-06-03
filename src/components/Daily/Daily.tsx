import { UnorderedList } from "@chakra-ui/react";
import Day from "./Day";
import { useCurrentWeatherData } from "../../store/CurrentWeatherData";

const Daily = () => {
  const daily = useCurrentWeatherData((state) => state.info.daily);
  console.log(daily);

  return (
    <UnorderedList
      color="white"
      gap={4}
      listStyleType="none"
      m={5}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      overflowX="hidden"
    >
      {daily.slice(1).map(({ dt, temp: { min, max }, weather }, index) => (
        <Day key={index} dt={dt} min={min} max={max} weather={weather} />
      ))}

      {/* <Day />
      <Day />
      <Day />
      <Day />
      <Day /> */}
    </UnorderedList>
  );
};

export default Daily;
