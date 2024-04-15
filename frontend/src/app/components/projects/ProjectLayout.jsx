import Link from "next/link.js";
import React from "react";
import { delay, motion } from "framer-motion";
import { Code, Play } from "lucide-react";

// item animation for the navigation buttons
const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } },
};

// motion link component with framer motion animation
const NavLink = motion(Link);

const ProjectLayout = ({ name, description, date, demoLink, codeLink }) => {
  return (
    <div className="text-sm md:text-base sm:flex items-center justify-between w-full relative rounded-lg overflow-hidden p-5 md:p-8 custom-bg">
      <div className="text-sm md:text-base flex items-center justify-between w-full relative overflow-hidden p-5 md:p-8 ">
        <div className="flex items-center justify-center space-x-2">
          <h2 className="text-foreground text-lg md:text-2xl pr-2">{name}</h2>
          <p className="text-muted hidden sm:inline-block">{description}</p>
        </div>
        <div className=" self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
        <p className="text-muted sm:text-foreground">
          {new Date(date).toDateString()}
        </p>
      </div>
      <div className="flex sm:flex-col justify-center items-center gap-4 pr-5">
        <NavLink
          variants={item}
          href={codeLink}
          target="_blank"
          className="custom-bg rounded-full w-fit p-3"
        >
          <Code />
          <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
          <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-1g whitespace-nowrap">
            code
          </span>
        </NavLink>
        {demoLink && (
          <NavLink
            variants={item}
            href={demoLink}
            target="_blank"
            className="custom-bg rounded-full w-fit p-3"
          >
            <Play />
            <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
            <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-1g whitespace-nowrap">
              live
            </span>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default ProjectLayout;
