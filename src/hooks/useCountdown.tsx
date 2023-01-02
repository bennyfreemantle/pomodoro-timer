import { useEffect, useState } from "react";

export default function useCountdown(
  timeLeft: number
): [number, boolean, () => void, () => void, (timeLeft: number) => void] {
  const [time, setTime] = useState(timeLeft);
  const [isPaused, setIsPaused] = useState(true);

  let interval: number;

  useEffect(() => {
    if (!isPaused) {
      interval = setInterval(() => {
        if (time > 0) {
          setTime((time) => time - 1000);
        } else {
          clearInterval(interval);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPaused, time]);

  function pause() {
    setIsPaused(true);
  }

  function resume() {
    setIsPaused(false);
  }

  return [time, isPaused, pause, resume, setTime];
}
