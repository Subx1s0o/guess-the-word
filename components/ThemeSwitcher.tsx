"use client";

import { useTheme } from "next-themes";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`${className} px-4 py-2 dark:bg-white dark:text-black bg-gray-800 text-white rounded hover:bg-gray-900`}
    >
      Switch theme
    </button>
  );
};

export default ThemeSwitcher;
