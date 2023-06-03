import { daysWeek, daysWeekLong, monthNames } from "./constants";

class Formate {
  time(time: number, timeZone: number) {
    const hours = new Date(
      (time + (timeZone !== 10800 ? timeZone - 10800 : 0)) * 1000
    ).getHours();
    const minutes = new Date(time * 1000).getMinutes();
    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }`;
  }

  day(time: number, timeZone: number) {
    const date = new Date(
      (time + (timeZone !== 10800 ? timeZone - 10800 : 0)) * 1000
    ).getDate();
    return `${date} ${monthNames[new Date(time * 1000).getMonth()]}`;
  }

  // Метод возвращает КРАТКОЕ наименование дня недели - ("Пн")
  dayWeek = (data: number) => daysWeek[new Date(data * 1000).getDay()];

  // Метод возвращает ПОЛНОЕ наименование дня недели - ("Понедельник")
  dayWeekLong = (data: number) => daysWeekLong[new Date(data * 1000).getDay()];

  // Вероятность осадков для недельного прогноза
  precipitation = (precipitation: number) =>
    `${Math.round(precipitation * 100)}%`;

  // Метод конвертирует значение атмосферного давления из гПа в мм.р.с.
  pressure = (pressure: number) => `${Math.trunc(pressure / 1.333)} мм рт. ст.`;

  // Метод преобразует значение направления ветра из градусов в текстовое описание
  windDirection(wind_deg: number) {
    if (wind_deg >= 337.5 || wind_deg < 22.5) {
      return "северный";
    } else if (wind_deg >= 22.5 && wind_deg < 67.5) {
      return "северо-восточный";
    } else if (wind_deg >= 67.5 && wind_deg < 112.5) {
      return "восточный";
    } else if (wind_deg >= 112.5 && wind_deg < 157.5) {
      return "юго-восточный";
    } else if (wind_deg >= 157.5 && wind_deg < 202.5) {
      return "южный";
    } else if (wind_deg >= 202.5 && wind_deg < 247.5) {
      return "юго-западный";
    } else if (wind_deg >= 247.5 && wind_deg < 292.5) {
      return "западный";
    } else {
      return "северо-западный";
    }
  }
}

const formate = new Formate();

export default formate;
