"use client";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="waith">
        <div key={pathname}>
          <div className="h-screen pointer-events-none z-40 flex  w-screen fixed top-0 right-0 left-0 ">
            <Stairs />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
