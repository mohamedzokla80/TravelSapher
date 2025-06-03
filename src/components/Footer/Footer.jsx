// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
import video2 from "../../assets/video2.mp4";
import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiCodeAiLine } from "react-icons/ri";

// متغيرات الحركة (Variants) لتسهيل إدارة الحركات
const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Footer = () => {
  return (
    <section className="cursor-pointer relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-start">
      {/* خلفية الفيديو */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={video2}
        loop
        muted
        autoPlay
      />

      {/* طبقة شفافة فوق الفيديو */}
      <div className="absolute inset-0 bg-black opacity-30 z-10" />

      {/* قسم العنوان وصندوق الاشتراك */}
      <div className="z-20 w-full px-4 flex flex-col items-center text-center mt-28">
        {/* عنوان فرعي */}
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase text-white tracking-widest text-sm sm:text-base"
        >
          KEEP IN TOUCH
        </motion.span>

        {/* العنوان الرئيسي */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-3xl sm:text-5xl font-bold text-white mt-4"
        >
          Travel With Us
        </motion.h1>

        {/* صندوق الاشتراك */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-10 w-full max-w-7xl flex flex-col md:flex-row gap-8 md:gap-6 items-center"
        >
          {/* حقل الإدخال بدون خلفية */}
          <div className="w-full relative flex items-center">
            <MdEmail className="absolute left-4 text-2xl text-white" />
            <input
              type="text"
              placeholder="Enter Your Email..."
              className="text-sm sm:text-base font-medium w-full h-[50px] pl-12 pr-4 rounded-2xl bg-transparent text-white border border-white focus:outline-none focus:border-primary focus:border-2  placeholder:text-white/70 transition-all duration-300 ease-in-out"
            />
          </div>

          {/* زر الاشتراك بدون خلفية */}
          <button className="text-sm sm:text-base font-bold bg-primary h-[50px] px-6 rounded-2xl  text-white flex items-center gap-2 transition-all duration-300 ease-in-out hover:scale-105">
            Subscribe
            <LuSend className="text-xl" />
          </button>
        </motion.div>
      </div>

      {/* قسم الأعمدة السفلية (Footer Text Section) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.2 },
          },
        }}
        // لضمان ظهور الحركة عند التمرير إذا كان السكشن طويلاً
        viewport={{ once: true, amount: 0.2 }}
        className="my-5 z-20 w-[90%] max-w-7xl mx-auto bg-white/70 py-8 px-6 mt-10 rounded-lg shadow-3xl grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        {/* العمود الأول */}
        <motion.div variants={fadeInVariant} className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <MdOutlineTravelExplore className="text-2xl text-primary" />
            <h1 className="text-2xl font-bold text-primary">
              T<span className="text-xl text-blackColor">ravel.</span>
            </h1>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            doloribus voluptates quisquam! Alias maiores quos fugiat, tenetur
            assumenda aperiam quae ipsa aspernatur consectetur maxime.
          </p>
        </motion.div>

        {/* العمود الثاني */}
        <motion.div variants={fadeInVariant} className="flex flex-col">
          <h2 className="text-lg font-bold text-primary mb-2">OUR AGENCY</h2>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <FooterListItem text="Services" />
            <FooterListItem text="Insurance" />
            <FooterListItem text="Agency" />
            <FooterListItem text="Tourism" />
            <FooterListItem text="Payment" />
          </ul>
        </motion.div>

        {/* العمود الثالث */}
        <motion.div variants={fadeInVariant} className="flex flex-col">
          <h2 className="text-lg font-bold text-primary mb-2">PARTNERS</h2>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <FooterListItem text="Booking" />
            <FooterListItem text="Trivago" />
            <FooterListItem text="Tripadvisor" />
            <FooterListItem text="Expedia" />
            <FooterListItem text="Travel" />
          </ul>
        </motion.div>

        {/* العمود الرابع */}
        <motion.div variants={fadeInVariant} className="flex flex-col">
          <h2 className="text-lg font-bold text-primary mb-2">LAST MINUTE</h2>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <FooterListItem text="London" />
            <FooterListItem text="Paris" />
            <FooterListItem text="Germany" />
            <FooterListItem text="Italy" />
            <FooterListItem text="Spain" />
          </ul>
        </motion.div>
      </motion.div>
{/* قسم حقوق النشر */}
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  className="flex flex-wrap justify-center items-center gap-4 mt-10 z-20 w-full px-4 text-white text-lg font-bold bg-white/10 backdrop-blur-md py-4 rounded-t-xl shadow-3xl"
>
  {/* الجزء الأيسر */}
  <div className="flex items-center gap-2">
    <span className="text-white">© 2025 All rights reserved.</span>
    <span className="text-blackColor text-xl">Travel.</span>
  </div>

  {/* الجزء الأيمن */}
  <div className="flex items-center gap-2">
    <span>Created by</span>
    <RiCodeAiLine className="text-primary" />
    <span className="text-blackColor text-xl font-bold">VeNoM</span>
  </div>
</motion.div>

    </section>
  );
};

// مكوّن مساعد لعناصر القائمة مع تأثير hover
const FooterListItem = ({ text }) => {
  return (
    <li className="flex items-center gap-2 group transition-all duration-300 ease-in-out hover:pl-2">
      <FaArrowRight className="text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        {text}
      </span>
    </li>
  );
};

export default Footer;
