import { useEffect, useState } from "react";
import formatMillisecondsToTime from "../../utils/formatMillisecondsToTime";

type ClockProps = {
  settings: Settings;
  setSettings: (settings: Settings) => void;
};

export type Settings = {
  currentMode: string;
  rounds: number;
  maxRounds: number;
  workTime: number;
  shortBreak: number;
  longBreak: number;
};

export default function Clock({ settings, setSettings }: ClockProps) {
  let interval: number;
  const [milliseconds, setMilliseconds] = useState(settings.workTime);

  const [time, setTime] = useState(milliseconds);
  const [isPaused, setIsPaused] = useState(true);

  const strokeDasharray = 1005; // Magic number (2 PI * r)
  const [strokeDasharrayOffSet, setStrokeDasharrayOffSet] =
    useState(strokeDasharray);
  const difference = strokeDasharray / (milliseconds / 1000);

  function updateRadialProgress() {
    setStrokeDasharrayOffSet((prev) => prev - difference);
  }

  function incrementRound() {
    if (settings.currentMode === "WORK") {
      setSettings({ ...settings, rounds: (settings.rounds += 1) });
    }
  }

  function switchMode() {
    let nextMode;
    incrementRound();

    if (settings.rounds !== 0 && settings.rounds % settings.maxRounds === 0) {
      nextMode = settings.currentMode === "WORK" ? "LONG" : "WORK";
    } else {
      nextMode = settings.currentMode === "WORK" ? "SHORT" : "WORK";
    }

    setSettings({
      ...settings,
      currentMode: nextMode,
    });

    switch (nextMode) {
      case "WORK":
        setMilliseconds(settings.workTime);
        setTime(settings.workTime);
        break;
      case "SHORT":
        setMilliseconds(settings.shortBreak);
        setTime(settings.shortBreak);
        break;
      case "LONG":
        setMilliseconds(settings.longBreak);
        setTime(settings.longBreak);
        break;
      default:
        return "Error";
    }
    // reset radial
    setStrokeDasharrayOffSet(strokeDasharray);
  }

  useEffect(() => {
    interval = setInterval(() => {
      if (isPaused) {
        return;
      }
      if (time > 0) {
        setTime((time) => time - 1000);
        updateRadialProgress();
      } else {
        switchMode();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isPaused, time]);

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <svg
        className=""
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDasharrayOffSet} // 10.05 == 1%
        height="360"
        width="360"
      >
        <circle
          cx="180"
          cy="180"
          r="160"
          stroke="#e2e8f0"
          strokeWidth="10"
          strokeLinecap="round"
          fill="#334155"
          strokeLinejoin="round"
        />
        <text
          x="180"
          y="180"
          fill="#e2e8f0"
          textAnchor="middle"
          fontSize={"2rem"}
          alignmentBaseline="middle"
          fontFamily="Helvetica"
        >
          {formatMillisecondsToTime(time)}
        </text>
      </svg>
      <div className="flex w-1/4 justify-around">
        {[...Array(settings.maxRounds)].map((n, i) => (
          <div
            key={i}
            className={`w-5 h-5 rounded-full ${
              i + 1 <= settings.rounds ? "bg-slate-300" : "bg-slate-800"
            }`}
          ></div>
        ))}
      </div>
      <button
        className="text-slate-200 text-2xl border p-2 my-8 mx-2 w-2/5 rounded-2xl bg-slate-800"
        onClick={() => (isPaused ? setIsPaused(false) : setIsPaused(true))}
      >
        {isPaused ? "Start" : "Pause"}
      </button>
    </div>
  );
}
