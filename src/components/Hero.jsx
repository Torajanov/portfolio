import React from "react";
import { Download } from "lucide-react";
import { FaFacebook, FaInstagram, FaTelegram, FaGithub } from "react-icons/fa";
import Abdulatifimg from "../assets/rasmm.jpg";
import { motion } from "framer-motion";
import "../Css/Hero.css";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "Executive-Resume (2).pdf"; // public papkada bo'lishi kerak
    link.download = "Abdulatif-Torajanov-CV.pdf"; // Fayl nomi
    link.click(); // Faylni yuklab olish
  };

  return (
    <section className="h-max md:h-screen bg-gradient-to-l bg-gray-950 text-white flex flex-col justify-center items-center relative z-10 pb-10 px-[100px]">
      {/* Yulduzlar */}
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between">
        <div className="md:space-y-6 px-4">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:text-6xl text-4xl font-bold mb-4"
          >
            Hello, I am... <p className="text-[#27ae60]">Abdulatif Torajanov</p>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="md:text-2xl text-lg mb-3"
          >
            Full-Stack Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="lg:w-[600px] mb-4 md:mb-0 text-sm text-gray-300"
          >
            I am a developer with experience in creating web and mobile
            applications. I enjoy working with React, Node.js, and other modern
            technologies.
          </motion.p>
          {/* Foydalanuvchi tarmoqlari */}
          <div className="flex gap-3 text-2xl transition-all mt-5 md:mt-0">
            <a
              href="https://www.facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:text-[#27ae60]" />
            </a>
            <a
              href="https://t.me/Torajanov_o1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram className="hover:text-[#27ae60]" />
            </a>
            <a
              href="https://www.instagram.com/torajanov.o1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-[#27ae60]" />
            </a>

            <a
              href="https://github.com/Torajanov"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#27ae60]"
            >
              <FaGithub />
            </a>
          </div>
          {/* Download tugmasi */}
          <div className="mt-5">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-[#27ae60] text-white py-2 px-4 rounded-lg hover:bg-[#2ecc71] transition-all"
            >
              Download CV
              <Download size={25} />
            </button>
          </div>
        </div>
        <div className="relative group">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0 }}
            src={Abdulatifimg}
            alt="Abdulatif Torajanov"
            className="rounded-full border border-[#27ae60] md:w-[500px] w-[300px] shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-[#27ae60]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;  // Bu yerda default eksport qo'shish kerak
