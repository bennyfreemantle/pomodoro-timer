import React from "react";
import Clock, { Settings } from "../Clock/Clock";
import SettingsPanel from "../SettingsPanel/SettingsPanel";

export default function Scene({
  settingsOpen,
  settings,
  setSettings,
}: {
  settingsOpen: boolean;
  settings: Settings;
  setSettings: (settings: Settings) => void;
}) {
  return (
    <>
      {settingsOpen ? (
        <SettingsPanel settings={settings} setSettings={setSettings} />
      ) : (
        <Clock settings={settings} setSettings={setSettings} />
      )}
    </>
  );
}
