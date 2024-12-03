export const formatTime = (totalMilliseconds: number): string => {
    const seconds = Math.floor(totalMilliseconds / 1000);
    const milliseconds = Math.floor((totalMilliseconds % 1000) / 10); // Преобразуем миллисекунды в двухзначный формат
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    const formattedMilliseconds = milliseconds < 10 ? `0${milliseconds}` : `${milliseconds}`;
    return `${formattedSeconds}:${formattedMilliseconds}`;
  };