import Link from "next/link.js";
import React from "react";
import { motion } from "framer-motion";

// item animation for the navigation buttons
const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

// motion link component with framer motion animation
const NavLink = motion(Link);

const ProjectLayout = ({ name, description, date, demoLink }) => {
  return (
    <NavLink
      variants={item}
      href={demoLink}
      target="_blank"
      className="text-sm md:text-base flex items-center justify-between w-full relative rounded-lg overflow-hidden p-5 md:p-8 custom-bg"
    >
      <div className="flex items-center justify-center space-x-2">
        <h2 className="text-foreground md:text-2xl pr-2">{name}</h2>
        <p className="text-muted hidden sm:inline-block">{description}</p>
      </div>
      <div className=" self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
      <p className="text-muted sm:text-foreground">
        {new Date(date).toDateString()}
      </p>
    </NavLink>
  );
};

export default ProjectLayout;
