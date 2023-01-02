import React, { useEffect, useState } from "react";

import Clock from "../Clock/Clock";
import TimerModeDisplay from "../TimerModeDisplay/TimerModeDisplay";
import { RxHamburgerMenu } from "react-icons/rx";

const defaultValues = {
  currentMode: "WORK",
  rounds: 0,
  workTime: 5000,
  shortBreak: 900000,
  longBreak: 1500000,
};

function App() {
  const [settings, setSettings] = useState(defaultValues);

  return (
    <div className="flex flex-col min-h-screen p-3 items-center bg-slate-900">
      <div className="flex flex-col max-w-3xl flex-1 w-full text-center">
        <h1 className="text-5xl text-slate-200 font-bold">Pomodoro Timer</h1>
        <div className="flex justify-end">
          <RxHamburgerMenu size={40} className="text-slate-200" />
        </div>
        {settings && (
          <>
            <TimerModeDisplay settings={settings} />
            <Clock settings={settings} setSettings={setSettings} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
