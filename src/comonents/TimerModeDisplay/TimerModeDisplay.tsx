import React from "react";

export default function TimerModeDisplay() {
  return (
    <div className="my-4 w-auto">
      <ul className="flex gap-5 p-1 text-xl bg-slate-700 rounded-2xl">
        <li className="p-3 rounded-2xl border-solid w-1/3 text-slate-900 bg-slate-300">
          Work
        </li>
        <li className="p-3 rounded-2xl border-solid w-1/3 text-slate-200 bg-slate-700">
          Short Break
        </li>
        <li className="p-3 rounded-2xl border-solid w-1/3 text-slate-200 bg-slate-700">
          Long Break
        </li>
      </ul>
    </div>
  );
}
