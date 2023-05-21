"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { FAQ } from "./types";
import { defaultFAQs } from "./defaultValues";
import { More, Less } from "./svg";

const FAQItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className="bg-[#2a1d3e] shadow-[0_0_7px_#e7e7e7] flex flex-col text-left w-full p-3 rounded-lg"
      // style={{ backgroundColor: "#EFEFEF" }}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex justify-between items-center w-full">
        <div className="text-2xl font-semibold">{props.question}</div>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={isOpen ? "minus" : "plus"}
            initial={{
              rotate: isOpen ? -90 : 90,
            }}
            animate={{
              zIndex: 1,
              rotate: 0,
              transition: {
                type: "tween",
                duration: 0.15,
                ease: "circOut",
              },
            }}
            exit={{
              zIndex: 0,
              rotate: isOpen ? -90 : 90,
              transition: {
                type: "tween",
                duration: 0.15,
                ease: "circIn",
              },
            }}
          >
            {isOpen ? <Less /> : <More />}
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.15,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
            key="test"
            className="font-light"
          >
            {props.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default function FAQComponent() {
  return (
    <div className="flex flex-col w-full p-5 justify-center items-center space-y-7">
      {defaultFAQs.map((c, i) => (
        <FAQItem key={i} {...c} />
      ))}
    </div>
  );
}
