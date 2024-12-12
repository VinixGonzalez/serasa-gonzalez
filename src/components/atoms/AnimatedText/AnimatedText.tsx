import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { AnimatedTextProps } from "./AnimatedText.types";

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  phrases,
  duration = 4000,
}) => {
  const [index, setIndex] = useState(0);
  const [reversing, setReversing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReversing(true);
      setTimeout(() => {
        setReversing(false);
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, 1500 + phrases[index].split("\n").length * 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [index]);

  const lines = phrases[index].split("\n");

  return (
    <div className="relative flex flex-col justify-center overflow-hidden w-fit bg-primary">
      {lines.map((line, i) => (
        <div key={i} className="relative overflow-hidden mb-4">
          <div className="inline-block relative">
            <motion.div
              initial={{ width: "0%" }}
              animate={{
                width: reversing ? "0%" : "100%",
              }}
              transition={{
                duration: reversing ? 0.3 : 0.5,
                delay: reversing ? (lines.length - 1 - i) * 0.2 : i * 0.3,
              }}
              className="absolute top-0 left-0 h-full bg-white"
              style={{ display: "inline-block" }}
            ></motion.div>
            <span className="relative text-primary text-title z-10">
              {line}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedText;
