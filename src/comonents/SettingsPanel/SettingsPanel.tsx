import React from "react";
import { Settings } from "../../types";
import SettingsForm from "./SettingsForm/SettingsForm";

export default function SettingsPanel({
  settings,
  setSettings,
}: {
  settings: Settings;
  setSettings: (settings: Settings) => void;
}) {
  return (
    <div className="container bg-slate-800 rounded-xl">
      <h1 className="text-slate-200 text-2xl">Pomodoro Settings</h1>
      <SettingsForm settings={settings} setSettings={setSettings} />
    </div>
  );
}
