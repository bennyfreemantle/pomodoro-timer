import { createContext, useState } from "react";

type TimerValuesState = {
  settings: Settings;
  setSettings: React.Dispatch<React.SetStateAction<Settings>>;
};

type Settings = {
  currentMode: string;
  rounds: number;
  workTime: number;
  shortBreak: number;
  longBreak: number;
};

const defaultValues = {
  currentMode: "WORK",
  rounds: 0,
  workTime: 5000,
  shortBreak: 900000,
  longBreak: 1500000,
};

export const TimerValuesContext = createContext<TimerValuesState>({
  settings: defaultValues,
  setSettings: () => {},
});

export function TimerValuesProvider(children: React.ReactNode) {
  const [settings, setSettings] = useState(defaultValues);

  const value = { settings, setSettings };

  return (
    <TimerValuesContext.Provider value={value}>
      {children}
    </TimerValuesContext.Provider>
  );
}
