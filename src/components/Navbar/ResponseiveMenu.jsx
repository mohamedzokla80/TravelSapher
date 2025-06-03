/* eslint-disable no-unused-vars */
// ResponsiveMenu.js
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { IoMdClose } from "react-icons/io";

const ResponsiveMenu = ({ open, setOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="absolute left-0 right-0 w-[95%] mx-auto md:hidden bg-primary rounded-xl z-20 shadow-3xl shadow-secondary"
        style={{
          top: "80px", // يجب أن يتطابق مع ارتفاع الـ Navbar
          shadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          maxHeight: "100vh",
        }}
      >
          <div className="absolute top-4 right-4 hover:rotate-180 transition-all duration-300 shadow-3xl shadow-secondary">
            <button
              onClick={() => setOpen(false)}
              className="bg-white text-primary p-2 rounded-full shadow-md hover:bg-gray-200 transition-all"
            >
              <IoMdClose size={20} />
            </button>
          </div>
          
          <div className="flex justify-center items-center">
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-6 text-2xl font-bold text-white py-8"
            >
              {["Home", "Shop", "About", "Pages", "News", "Contact"].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="transition-all hover:text-2xl hover:shadow-lg hover:shadow-blackColor rounded-3xl py-2 px-6"
                >
                  <a href="#">{item}</a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="transition-all"
              >
                <button className="btn m4-5 transition-all">Book Now</button>
              </motion.li>
            </motion.ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;