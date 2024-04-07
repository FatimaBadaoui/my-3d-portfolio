"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Slack } from "lucide-react";
import Link from "next/link.js";
import React from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const NavLink = motion(Link);

const Socials = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex items-center justify-between space-x-7 "
    >
      <NavLink
        variants={item}
        href={"https://github.com/FatimaBadaoui"}
        target="_blank"
        className="w-fit text-foreground rounded-full flex items-center justify-center custom-bg"
      >
        <span className="relative w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent">
          <Github className="w-full h-auto" strokeWidth={1.5} />
          <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
          <span className="absolute hidden peer-hover:block py-1 px-2 top-full my-2 mx-2.5 -translate-x-1/2 bg-background text-foreground text-sm rounded-md shadow-1g whitespace-nowrap">
            github
          </span>
        </span>
      </NavLink>
      <NavLink
        variants={item}
        href={"https://www.linkedin.com/in/fatima-badaoui/"}
        target="_blank"
        className="w-fit text-foreground rounded-full flex items-center justify-center custom-bg"
      >
        <span className="relative w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent">
          <Linkedin className="w-full h-auto" strokeWidth={1.5} />
          <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
          <span className="absolute hidden peer-hover:block py-1 px-2 top-full my-2 mx-2.5 -translate-x-1/2 bg-background text-foreground text-sm rounded-md shadow-1g whitespace-nowrap">
            linkedin
          </span>
        </span>
      </NavLink>
      <NavLink
        variants={item}
        href={"https://e06-23.slack.com/team/U05FHBA9C48"}
        target="_blank"
        className="w-fit text-foreground rounded-full flex items-center justify-center custom-bg"
      >
        <span className="relative w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent">
          <Slack className="w-full h-auto" strokeWidth={1.5} />
          <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
          <span className="absolute hidden peer-hover:block py-1 px-2 top-full my-2 mx-2.5 -translate-x-1/2 bg-background text-foreground text-sm rounded-md shadow-1g whitespace-nowrap">
            slack
          </span>
        </span>
      </NavLink>
    </motion.div>
  );
};

export default Socials;
