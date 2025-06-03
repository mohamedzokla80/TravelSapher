import { HiFilter } from "react-icons/hi"; // تأكد انك مستورد الآيكون
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React, { useState } from "react";
import video from "../../assets/video1.mp4";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FiCodepen } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";

const Home = () => {
  const [price, setPrice] = useState(1000);

  return (
    <section className="relative h-screen w-full overflow-hidden flex justify-center items-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={video}
        loop
        muted
        autoPlay
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

      {/* Content */}
      <div className=" inset-0 flex flex-col justify-center items-center text-center z-20 px-4 w-full relative">
        {/* Title */}
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" mt-28 uppercase text-white tracking-widest text-sm sm:text-base"
        >
          Our Packages
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-3xl sm:text-5xl font-bold text-white mt-4"
        >
          Search Your Holiday
        </motion.h1>

        {/* Inputs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-10 w-full max-w-7xl bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row gap-8 md:gap-6 items-center text-left"
        >
          {/* Text Input */}
          <div className="w-full">
            <label className="block text-white mb-2 font-semibold tracking-wide">
              Destination
            </label>
            <input
              type="text"
              placeholder="Search..."
              className="text-lg font-medium capitalize w-full p-4 rounded-md bg-white bg-opacity-90 text-black shadow-md focus:outline-none"
            />
          </div>

          {/* Date Picker */}
          <div className="w-full">
            <label className="block text-white mb-2 font-semibold tracking-wide">
              Date
            </label>
            <input
              type="date"
              className="text-lg font-medium uppercase w-full p-4 rounded-md bg-white bg-opacity-90 text-black shadow-md focus:outline-none placeholder-gray-400"
              placeholder="Select date"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />
          </div>

          {/* Range Slider */}
          <div className="w-full">
            <div className="flex justify-between items-center mb-2 ">
              <label className="text-white font-semibold tracking-wide">
                Price Range:
              </label>
              <span className="text-yellow-300 font-bold">${price}</span>
            </div>

            <input
              type="range"
              min={1000}
              max={5000}
              step={100}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full h-2 rounded-lg bg-white bg-opacity-90 shadow-md focus:outline-none"
            />
          </div>
        </motion.div>

        {/* Button */}
        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 50, scale: 0.9 }} // تبدأ بحجم أصغر قليلاً
          animate={{ opacity: 1, y: 0, scale: 1 }} // التكبير إلى الحجم الطبيعي
          transition={{ duration: 0.5, delay: 1.5 }} // الانتقال التلقائي بعد التأخير
          whileHover={{
            scale: 1.05, // التكبير قليلاً عند الـ hover
            backgroundColor: "linear-gradient(to right, #primary, #secondary)", // تغيير الخلفية (اختياري)
            transition: { duration: 0.1 }, // تأخير في التأثير أثناء الـ hover
          }}
          className="mt-8 px-8 py-3 
             bg-gradient-to-r from-primary to-secondary text-white 
             rounded-3xl shadow-lg hover:bg-gradient-to-l transition-all 
             duration-700 flex items-center gap-2 z-30 relative bottom-14"
        >
          <HiFilter className="text-2xl duration-700" />
          Book Now
        </motion.button>

        {/* Social Media Icons */}
{/* Social Media Icons */}
<div className="container absolute w-[90%] bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 items-center justify-between">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 2 }}
    className="mt-4 text-white text-sm flex items-center justify-center gap-4 cursor-pointer"
  >
    <FaFacebook className="text-2xl hover:text-primary hover:scale-150 duration-300" />
    <FaWhatsapp className="text-2xl hover:text-primary hover:scale-150 duration-300" />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 2.5 }}
    className="mt-4 text-white text-sm flex items-center justify-center gap-4 cursor-pointer"
  >
    <FiCodepen className="text-2xl hover:text-primary hover:scale-150 duration-300" />
    <FiGrid className="text-2xl hover:text-primary hover:scale-150 duration-300" />
  </motion.div>
</div>

      </div>
    </section>
  );
};

export default Home;
