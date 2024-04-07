"use client";

import { useEffect, useState } from "react";

// create a custom hook to get the screen size
const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    function getSize() {
      return window.innerWidth;
    }

    function handleResize() {
      setScreenSize(getSize());
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export default useScreenSize;
