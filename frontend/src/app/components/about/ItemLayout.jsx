"use client";
import { motion } from "framer-motion";

const ItemLayout = ({ children, className }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }} // animate to scale 1 when in view
      transition={{ duration: 0.5 }} // animate for 0.5 seconds
      viewport={{ once: true }} // animate only once
      className={`custom-bg p-6 sm:p-8 rounded-xl flex justify-center ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;
