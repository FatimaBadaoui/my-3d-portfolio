"use client";
import React, { useEffect } from "react";

// Create a new firefly with random position and animation duration
const createFirefly = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});

const FirefliesBg = () => {
  const [fireflies, setFireflies] = React.useState([]);

  useEffect(() => {
    const addFireflyPeriodically = () => {
      const newFirefly = createFirefly();
      // Keep only the last 14 fireflies
      setFireflies((prev) => [...prev.slice(-14), newFirefly]);
    };
    // Add a new firefly every second
    const interval = setInterval(addFireflyPeriodically, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {fireflies.map((firefly) => {
        return (
          <div
            key={firefly.id}
            className="absolute rounded-full bg-accent w-[7px] h-[7px] bg-firefly-radial opacity-70 shadow-xl"
            style={{
              top: firefly.top,
              left: firefly.left,
              animation: `move ${firefly.animationDuration} infinite alternate`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default FirefliesBg;
