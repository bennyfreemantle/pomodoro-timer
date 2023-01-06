import React, { useState } from "react";
import formatMillisecondsToTime from "../../../utils/formatMillisecondsToTime";
import { Settings } from "../../Clock/Clock";

export default function SettingsForm({
  settings,
  setSettings,
}: {
  settings: Settings;
  setSettings: (settings: Settings) => void;
}) {
  console.log(settings.workTime);
  return (
    <form className="flex flex-col items-center gap-8 my-4">
      <div className="flex gap-4 w-1/2 justify-evenly">
        <label className="text-slate-200" htmlFor="work-time">
          Work Time
        </label>
        <input
          onChange={(e) =>
            setSettings({ ...settings, workTime: parseInt(e.target.value) })
          }
          type="range"
          value={settings.workTime}
          min={900000}
          max={3600000}
          step={30000}
          id="work-time"
        />
        <p className="text-slate-200">
          {formatMillisecondsToTime(settings.workTime)}
        </p>
      </div>
      <div className="flex gap-4 w-1/2 justify-evenly">
        {" "}
        <label className="text-slate-200" htmlFor="short-break">
          Short Break
        </label>
        <input
          onChange={(e) =>
            setSettings({ ...settings, shortBreak: parseInt(e.target.value) })
          }
          type="range"
          value={settings.shortBreak}
          min={300000}
          max={1800000}
          step={30000}
          id="short-break"
        />
        <p className="text-slate-200">
          {formatMillisecondsToTime(settings.shortBreak)}
        </p>
      </div>
      <div className="flex gap-4 w-1/2 justify-evenly">
        <label className="text-slate-200" htmlFor="long-break">
          Long Break
        </label>
        <input
          onChange={(e) =>
            setSettings({ ...settings, longBreak: parseInt(e.target.value) })
          }
          type="range"
          value={settings.longBreak}
          min={900000}
          max={3600000}
          step={30000}
          id="long-break"
        />
        <p className="text-slate-200">
          {formatMillisecondsToTime(settings.longBreak)}
        </p>
      </div>
    </form>
  );
}
