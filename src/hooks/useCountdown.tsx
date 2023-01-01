import { useEffect, useState } from "react";

export default function useCountdown(
  timeLeft: number
): [number, () => void, () => void] {
  const [time, setTime] = useState(timeLeft);
  const [isPaused, setIsPaused] = useState(false);

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

  return [time, pause, resume];
}
