"use client";
import React from "react";
import { motion } from "framer-motion";
import { BtnList } from "@/app/data.js";
import NavButton from "./NavButton.jsx";
import useScreenSize from "../hooks/useScreenSize.jsx";
import ResponsiveComponent from "../ResponsiveComponent.jsx";

// animation variants for the navigation navigation 
const container = {
  hidden: { opacity: 0 },
  // stagger the children to create a wave effect
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Navigation = () => {
  // calculate the angle increment for each button in the navigation menu
  const angleIncrement = 360 / BtnList.length;
  const size = useScreenSize();

  const isLarge = size >= 1024;
  const isMedium = size >= 768;

  return (
    <div className="fixed h-screen w-full flex items-center justify-center">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <motion.div 
              variants={container}
              initial="hidden" // initial animation state
              animate="show" // animate to the show state
              className="flex items-center justify-center relative hover:pause animate-spin-slow group"
            >
              {BtnList.map((btn, index) => {
                // calculate the angle in radian for each button
                const angleRad = (angleIncrement * index * Math.PI) / 180;
                const radius = isLarge
                  ? `calc(20vw - 1rem)`
                  : isMedium
                  ? `calc(30vw - 1rem)`
                  : `calc(40vw - 1rem)`;
                // calculate the coordinations of the button
                const x = `calc(${radius} * ${Math.cos(angleRad)})`;
                const y = `calc(${radius} * ${Math.sin(angleRad)})`;

                return <NavButton key={btn.label} x={x} y={y} {...btn} />;
              })}
            </motion.div>
          ) : (
            <>
              {/* buttons on the left side */}
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-start xs:items-center justify-center relative group"
              >
                {BtnList.slice(0, BtnList.length / 2).map((btn, index) => {
                  return <NavButton key={btn.label} x={0} y={0} {...btn} />;
                })}
              </motion.div>
              {/* buttons on the right side */}
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center relative group"
              >
                {BtnList.slice(BtnList.length / 2, BtnList.length).map(
                  (btn, index) => {
                    return (
                      <NavButton
                        key={btn.label}
                        x={0}
                        y={0}
                        {...btn}
                        labelDirection="left"
                      />
                    );
                  }
                )}
              </motion.div>
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;
