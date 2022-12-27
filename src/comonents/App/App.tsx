import { useState } from "react";
import TimerModeDisplay from "../TimerModeDisplay/TimerModeDisplay";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col h-screen p-3 items-center bg-slate-900">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-5xl text-slate-200 font-bold">Pomodoro Timer</h1>
        <TimerModeDisplay />
      </div>
    </div>
  );
}

export default App;
