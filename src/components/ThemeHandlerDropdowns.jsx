"use client";

import { useDarkMode } from "../hooks/useDarkMode"; // Aquí llamamos al hook
import { SettingsDropdown } from "./SettingsDropdown";
import { MobileDropdown } from "./MobileDropdown";

export default function ThemeHandlerDropdowns() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <>
      <div className="h-12 w-12 md:hidden">
        <MobileDropdown setIsDarkMode={setIsDarkMode} IsDarkMode={isDarkMode} />
      </div>

      <li className="ml-11 flex justify-end">
        <SettingsDropdown setIsDarkMode={setIsDarkMode} IsDarkMode={isDarkMode} type="desktop" />
      </li>
    </>
  );
}
