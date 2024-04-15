"use client";
import { Henny_Penny } from "next/font/google";
import ProjectLayout from "./ProjectLayout.jsx";
import { motion } from "framer-motion";
import clsx from "clsx";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delay: 1.5,
    },
  },
};

const hennyPenny = Henny_Penny({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-henny",
});

const ProjectList = ({ projects }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-auto xl:max-w-4xl px-4 mx:auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
    >
      <h1
        className={clsx(
          hennyPenny.variable,
          "text-accent text-5xl sm:text-6xl md:text-7xl font-henny mb-6"
        )}
      >
        Projects
      </h1>
      {projects.map((project, index) => (
        <ProjectLayout key={index} {...project} />
      ))}
    </motion.div>
  );
};

export default ProjectList;
