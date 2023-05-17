"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function TrackCard({ image, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center bg-white rounded-[12px] h-[365px] w-[240px] m-[20px] p-[5px]"
    >
      <Image src={image} width={110} height={116} />
      <p className="text-[1.5rem] font-[500] h-fit text-center m-[10px] text-black">
        {title}
      </p>
      <div
        id="textcontainer"
        className="flex items-center text-left text-[1rem] h-[150px] mx-[15px] mt-[10px] w-[200px] text-clip"
      >
        <p className="text-black">{description}</p>
      </div>
    </motion.div>
  );
}
