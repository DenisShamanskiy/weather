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
    const monthNames = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];
    // const month = new Date(time * 1000).getMonth();
    return `${date} ${monthNames[new Date(time * 1000).getMonth()]}`;
  }

  dayWeek(day: number) {
    const days = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];
    return days[new Date(day * 1000).getDay()];
  }
  // Вероятность осадков для недельного прогноза
  precipitation = (precipitation: number) =>
    `${Math.round(precipitation * 100)}%`;

  formateDayWeek = (dayArr: string[], monthArr: string[]): string => {
    const date = new Date();
    const day = dayArr[date.getDay()];
    const dayMonth = date.getDate();
    const month = monthArr[date.getMonth()];
    const year = date.getFullYear();
    return `${day}, ${dayMonth} ${month} ${year}`;
  };
}

const formate = new Formate();

export default formate;
