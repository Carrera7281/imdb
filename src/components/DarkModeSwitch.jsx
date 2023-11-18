"use client";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function DarkModeSwitch() {

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <LightModeIcon
            className="text-xl cursor-pointer hover:text-amber-600"
            onClick={() => setTheme("light")}
          />
        ) : (
          <DarkModeIcon
            className="text-xl cursor-pointer hover:text-amber-600"
            onClick={() => setTheme("dark")}
          />
        ))}
    </>
  );
}
