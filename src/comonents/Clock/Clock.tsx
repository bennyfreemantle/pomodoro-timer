import React, { useEffect, useRef, useState } from "react";
import formatMillisecondsToTime from "../../utils/formatMillisecondsToTime";

type ClockProps = {
  settings: Settings;
  setSettings: (settings: Settings) => void;
};

type Settings = {
  currentMode: string;
  rounds: number;
  workTime: number;
  shortBreak: number;
  longBreak: number;
};

export default function Clock({ settings, setSettings }: ClockProps) {
  const [mode, setMode] = useState(settings.currentMode);
  const modeRef = useRef(mode);
  const millisecond =
    mode === "WORK"
      ? settings.workTime
      : mode === "SHORT"
      ? settings.shortBreak
      : settings.longBreak;

  const [time, setTime] = useState(millisecond);
  const [isPaused, setIsPaused] = useState(true);

  const strokeDasharray = 1005;
  const strokeDasharrayOffSetRef = useRef(strokeDasharray);
  const difference = strokeDasharray / (millisecond / 1000);

  function updateRadialProgress() {
    strokeDasharrayOffSetRef.current -= difference;
    // TODO bugfix - radial progress goes beyond 0, this is a quick fix
    if (strokeDasharrayOffSetRef.current < 0) {
      strokeDasharrayOffSetRef.current = 0;
    }
  }

  function incrementRound() {
    if (modeRef.current === "WORK") {
      setSettings({ ...settings, rounds: (settings.rounds += 1) });
    }
  }

  function switchMode() {
    let nextMode;
    incrementRound();

    if (settings.rounds !== 0 && settings.rounds % 4 === 0) {
      nextMode = modeRef.current === "WORK" ? "LONG" : "WORK";
    } else {
      nextMode = modeRef.current === "WORK" ? "SHORT" : "WORK";
    }
    modeRef.current = nextMode;
    setMode(modeRef.current);
    setSettings({
      ...settings,
      currentMode: modeRef.current,
    });

    if (modeRef.current === "WORK") {
      setTime(settings.workTime);
    } else if (modeRef.current === "SHORT") {
      setTime(settings.shortBreak);
    } else {
      setTime(settings.longBreak);
    }

    // reset radial
    strokeDasharrayOffSetRef.current = strokeDasharray;
  }

  let interval: number;

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
        strokeDashoffset={strokeDasharrayOffSetRef.current} // 10.05 == 1%
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
      <button
        className="text-slate-200 text-2xl border p-2 mx-2 my-2 w-2/5 rounded-2xl bg-slate-800"
        onClick={() => (isPaused ? setIsPaused(false) : setIsPaused(true))}
      >
        {isPaused ? "Resume" : "Pause"}
      </button>
    </div>
  );
}
