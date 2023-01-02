export default function formatMillisecondsToTime(time: number) {
  let seconds: number | string = Math.floor((time / 1000) % 60);
  let minutes: number | string = Math.floor((time / 1000 / 60) % 60);
  let hours: number | string = Math.floor((time / (1000 * 60 * 60)) % 24);
  // const days = Math.floor(time / (1000 * 60 * 60 * 24)); not needed but worth keeping
  let timeString: string;

  // adds a padded 0 if the number is less than 10
  minutes = minutes < 10 ? minutes.toString().padStart(2, "0") : minutes;
  seconds = seconds < 10 ? seconds.toString().padStart(2, "0") : seconds;
  hours = hours < 10 ? hours.toString().padStart(2, "0") : hours;

  // if no hours remaining, only display minutes and seconds
  hours > 0
    ? (timeString = `${hours}:${minutes}:${seconds}`)
    : (timeString = `${minutes}:${seconds}`);

  return timeString;
}
