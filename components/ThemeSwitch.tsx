"use client";

import { useTheme } from '@/context/themeContext';
import React from 'react';
import { BsSun } from 'react-icons/bs';
import { PiSunFill } from "react-icons/pi";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme();

  return (
    <button className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:bg-opacity-25"
    onClick={toggleTheme}
    >
        {theme === "light" ? <PiSunFill /> : <BsFillMoonStarsFill />}
    </button>
  );
}
