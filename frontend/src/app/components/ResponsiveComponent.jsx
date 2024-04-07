"use clint";
import React from "react";
import useScreenSize from "./hooks/useScreenSize.jsx";

const ResponsiveComponent = ({ children }) => {
  const size = useScreenSize();

  return <>{children({ size })}</>;
};

export default ResponsiveComponent;
