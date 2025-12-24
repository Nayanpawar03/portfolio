import React from 'react';
import { motion } from "framer-motion"

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
}

const TabButton = ({
  active,
  selectTab,
  children,
}: {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}) => {

  // Add classes for text color and border color based on the active state
  const buttonClasses = active ? "text-[var(--foreground)]" : "text-[#ADB7BE]";

  return (
    <button
      onClick={selectTab}
    // className="relative group" // Add 'group' class for grouping styles
    >
      <p
        className={`mr-3 font-semibold text-[16px] tracking-wider hover:text-[var(--foreground)] ${buttonClasses}`}
      >
        {children}
      </p>
      {/* <div
        className={`absolute bottom-0 -left-[5px]  top-8 bg-gradient-to-br from-red-800 via-orange-600 to-yellow-500 h-[4px] transition-all duration-300 ease-in-out ${active ? "w-full" : "w-0"}`} // Transition width for smooth animation
      ></div> */}
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className='h-1 rounded-full bg-gradient-to-br from-red-800 via-orange-600 to-yellow-500 mt-2 mr-3'
      >
      </motion.div>
    </button>
  );
};

export default TabButton;
