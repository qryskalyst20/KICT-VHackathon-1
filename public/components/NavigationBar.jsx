"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/images/Screenshot 2023-05-16 003115.svg";
import clsx from "clsx";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";

export default function NavigationBar() {
  const [mode, setMode] = useState("dark");
  return (
    <div
      className={`bg-[#1b1b37] ${clsx("App", {
        dark: mode === "dark",
      })} w-screen flex flex-row justify-center items-center h-[4em] fixed top-0 z-50 shadow-3xl`}
    >
      <div
        id="navcontainer"
        className="flex justify-between min-w-[1000px] min-w-screen relative"
      >
        <div
          id="navcontainerleft"
          className="flex flex-row items-center flex-grow-[2] gap-[2em] ml-[2em]"
        >
          <Link href="/">
            <Image src={logo} width={50} height={41} />
          </Link>
          <DarkModeToggle
            mode={mode}
            size="sm"
            onChange={(mode) => {
              setMode(mode);
            }}
          />
        </div>
        <div
          id="navcontainerright"
          className="flex flex-row items-center flex-grow-[1] justify-end mr-[1em] max-w-[750px]"
        >
          <Link href="/" className="flex-grow-[1] relative text-center">
            <span className="relative">Home</span>
          </Link>
          <Link href="/" className="flex-grow-[1] relative text-center">
            <span className="relative">About Us</span>
          </Link>
          <span>
            <button className="bg-[#6f6fe8] rounded-[6px] py-[0.5em] px-[2em]">
              Login
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
