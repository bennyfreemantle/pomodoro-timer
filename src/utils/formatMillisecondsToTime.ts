export default function formatMillisecondsToTime(time: number) {
  let seconds: number | string = Math.floor((time / 1000) % 60);
  let minutes: number | string = Math.floor((time / 1000 / 60) % 60);
  let hours: number | string = Math.floor((time / (1000 * 60 * 60)) % 24);
  // const days = Math.floor(time / (1000 * 60 * 60 * 24)); not needed but worth keeping
  let timeString: string;

  minutes = minutes <= 9 ? minutes.toString().padStart(2, "0") : minutes;
  seconds = seconds <= 9 ? seconds.toString().padStart(2, "0") : seconds;
  hours = hours <= 9 ? hours.toString().padStart(2, "0") : hours;

  hours > 0
    ? (timeString = `${hours}:${minutes}:${seconds}`)
    : (timeString = `${minutes}:${seconds}`);

  return timeString;
}
