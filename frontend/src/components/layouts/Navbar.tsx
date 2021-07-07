import React from "react";
import { motion } from "framer-motion";
const navAnimationVariants = {
  hidden: {
    opacity: 0,
    y: "-10vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: 0.3,
    },
  },
};
const Navbar = () => {
  return (
    <div className="sticky h-16 top-1 z-10">
      <motion.div
        variants={navAnimationVariants}
        initial="hidden"
        animate="visible"
        className="flex sm:justify-center md:justify-between
         flex-wrap rounded-md sm:text-sm md:text-2xl md:text-bold bg-gray-50 shadow-md dark:bg-gray-600 "
      >
        <div className="mx-2 block text-center w-full md:w-auto h-auto">
          <h1 className=""> Sujan Maharjan </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
