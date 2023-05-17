"use client";

import React from "react";
import logo from "@/public/images/Screenshot 2023-05-16 003115.svg";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { BsCalendar, BsArrowRight } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="flex items-center justify-center mt-[100px]">
      <div
        id="landingbadge"
        className="flex flex-col items-center justify-center"
      >
        <Image src={logo} width={500} height={500} />
        <div className="flex flex-row">
          <SocialIcon
            url="https://www.instagram.com/vhackiium"
            target="_blank"
            rel="noopener noreferrer"
            bgColor="transparent"
            fgColor="white"
            style={{ width: 100, height: 100 }}
          />
          <SocialIcon
            url="https://www.twitter.com/nrmnqdds"
            target="_blank"
            rel="noopener noreferrer"
            bgColor="transparent"
            fgColor="white"
            style={{ width: 100, height: 100 }}
          />
          <SocialIcon
            url="https://www.github.com/qryskalyst20"
            target="_blank"
            rel="noopener noreferrer"
            bgColor="transparent"
            fgColor="white"
            style={{ width: 100, height: 100 }}
          />
        </div>
      </div>
      <div
        id="landingcontainer"
        className="relative min-w-[300px] max-w-[600px]"
      >
        <p className="text-[70px]">VHackathon 2023</p>
        <p className="text-[24px] my-[1em]">
          VHackathon is the largest hackathon in Santa Cruz. Each year, we
          invite hundreds of students to develop solutions to real-world
          problems, pursue inclusion in tech, and kindle the spirit of
          innovation.
        </p>
        <div id="moreinfo" className="flex flex-row justify-center gap-[0.5em]">
          <div id="date" className="items-center inline-flex gap-[0.5em]">
            <BsCalendar />
            <p>February 3-5, 2023</p>
          </div>
          <div id="location" className="flex gap-[0.25em] items-center">
            <MdLocationPin />
            <p>Stevenson Event Center @ UC Santa Cruz</p>
          </div>
        </div>
        <div
          id="landingcontainerinputs"
          className="text-center mt-[10px] w-full"
        >
          <div
            id="landingcontainerinputrowcontainer"
            className="flex justify-center items-center"
          >
            <input
              type="text"
              placeholder="Enter email for updates"
              className="px-2 py-2 rounded-xl relative w-[75%]"
            />
            <div className="flex justify-end items-center">
              <motion.button
                className="absolute justify-self-end items-center mr-2 bg-[#6f6fe8] w-[2.5rem] h-[25px] rounded-xl"
                whileHover={{ width: "3rem" }}
              >
                <BsArrowRight
                  style={{
                    color: "white",
                    backgroundColor: "#6f6fe8",
                    width: "2.5rem",
                    height: "25px",
                    borderRadius: "10px",
                  }}
                />
              </motion.button>
            </div>
          </div>
          <div
            id="landingcontainerinputrow2"
            className="flex items-center justify-center gap-[1em]"
          >
            <motion.button
              whileHover={{
                scale: 1.1,
                width: "32%",
                backgroundColor: "#6f6fe8",
              }}
              className="border-[#6f6fe8] border-[1px] bg-transparent w-[30%] min-w-[8rem] rounded-[6px] flex items-center justify-center h-[30px] m-[10px]"
            >
              Devpost
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, width: "32%" }}
              className="bg-[#6f6fe8] w-[30%] min-w-[8rem] rounded-[6px] flex items-center justify-center h-[30px] m-[10px]"
            >
              Photo Album
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
