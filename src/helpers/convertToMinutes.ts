export const convertToMinutes = (remainingTime: number): string => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const displayedMin = minutes < 10 ? `0${minutes}` : minutes;
  const displayedSec = seconds < 10 ? `0${seconds}` : seconds;

  return displayedMin + " : " + displayedSec;
};

export const convertMinutesToSeconds = (minutes: number): number => {
  return Math.floor(minutes * 60);
};
