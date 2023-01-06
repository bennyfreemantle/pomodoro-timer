import { useState } from "react";

import TimerModeDisplay from "../TimerModeDisplay/TimerModeDisplay";
import { RxHamburgerMenu } from "react-icons/rx";
import Scene from "../Scene/Scene";

export const defaultValues = {
  currentMode: "WORK",
  currentMilliseconds: 1500000,
  rounds: 0,
  maxRounds: 4,
  workTime: 1500000,
  shortBreak: 900000,
  longBreak: 1500000,
};

function App() {
  const [settings, setSettings] = useState(defaultValues);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen p-3 items-center bg-slate-900">
      <div className="flex flex-col max-w-3xl flex-1 w-full text-center">
        <h1 className="text-5xl text-slate-200 font-bold">Pomodoro Timer</h1>
        <div className="flex justify-end">
          <RxHamburgerMenu
            onClick={() =>
              settingsOpen ? setSettingsOpen(false) : setSettingsOpen(true)
            }
            size={40}
            className="text-slate-200 hover:cursor-pointer"
          />
        </div>
        {settings && (
          <>
            <TimerModeDisplay settings={settings} />
            <Scene
              settingsOpen={settingsOpen}
              settings={settings}
              setSettings={setSettings}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
