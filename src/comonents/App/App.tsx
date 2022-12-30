import { useState } from "react";
import Button from "../Button/Button";
import Clock from "../Clock/Clock";
import TimerModeDisplay from "../TimerModeDisplay/TimerModeDisplay";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen p-3 items-center bg-slate-900">
      <div className="flex flex-col max-w-3xl flex-1 w-full text-center">
        <h1 className="text-5xl text-slate-200 font-bold">Pomodoro Timer</h1>
        <TimerModeDisplay />
        <Clock />
        <Button>Settings</Button>
      </div>
    </div>
  );
}

export default App;
