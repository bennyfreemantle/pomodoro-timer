import React from "react";

type TimerModeDisplayProps = {
  settings: Settings;
};

type Settings = {
  currentMode: string;
  rounds: number;
  workTime: number;
  shortBreak: number;
  longBreak: number;
};

export default function TimerModeDisplay({ settings }: TimerModeDisplayProps) {
  return (
    <div className="my-4 w-auto">
      <ul className="flex gap-5 p-1 text-xl bg-slate-800 rounded-2xl">
        <li
          className={`inline-block p-2 rounded-2xl border-solid w-1/3 ${
            settings.currentMode === "WORK"
              ? "text-slate-900 bg-slate-300"
              : "text-slate-200 bg-slate-700"
          }`}
        >
          Work
        </li>
        <li
          className={`inline-block p-2 rounded-2xl border-solid w-1/3 ${
            settings.currentMode === "SHORT"
              ? "text-slate-900 bg-slate-300"
              : "text-slate-200 bg-slate-700"
          }`}
        >
          Short Break
        </li>
        <li
          className={`inline-block p-2 rounded-2xl border-solid w-1/3 ${
            settings.currentMode === "LONG"
              ? "text-slate-900 bg-slate-300"
              : "text-slate-200 bg-slate-700"
          }`}
        >
          Long Break
        </li>
      </ul>
    </div>
  );
}
