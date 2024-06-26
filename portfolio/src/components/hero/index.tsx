import React from "react";
import { HERO_CONTENT } from "../../constants";
import { BiEnvelope, BiMapPin } from "react-icons/bi";
import heroImg from "../../assets/profile.png";
import { motion } from "framer-motion";
import { PiNavigationArrow } from "react-icons/pi";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="h-auto w-full" id="hero">
      <div className="flex flex-wrap gap-10 h-full justify-center items-center mt-20 lg:justify-start mx-5 lg:mx-0">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center my-5 gap-5 md:justify-start">
            <img
              src={heroImg}
              alt="Sebastian Palomares"
              className="w-24 h-24 rounded-full object-cover shadow-xl"
            />
          </div>
          <h1 className="text-5xl mb-2 [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] text-center md:text-start">
            SEBASTIAN PALOMARES CABRERA
          </h1>
          <div className="text-center md:text-start">
            <span className="bg-gradient-to-r from-black via-amber-950 to-black bg-clip-text tracking-tight text-transparent text-3xl">
              Jr Full Stack Developer
            </span>
          </div>
          <span className="flex gap-4 mt-2 justify-center md:justify-start">
            <BiMapPin className="w-5 h-5 text-amber-950" />
            Colombia
          </span>
          <span className="flex justify-center md:justify-start">
            <p className="mt-5 md:w-[40rem] mb-5 text-xl">
              {t("hero.description")}
            </p>
          </span>
          <span className="flex justify-center md:justify-start">
            <button className="cursor-pointer relative group overflow-hidden border-2 px-5 py-2 border-amber-950 rounded-xl">
              <span className="font-bold text-white relative z-10 group-hover:text-black duration-500">
                <a
                  href="mailto:sebpa.16@gmail.com"
                  className="flex items-center gap-2"
                >
                  <BiEnvelope className="w-5 h-5" />
                  {t("hero.button")}
                </a>
              </span>
              <span className="absolute top-0 left-0 w-full bg-amber-950 duration-500 group-hover:-translate-x-full h-full"></span>
              <span className="absolute top-0 left-0 w-full bg-amber-950 duration-500 group-hover:translate-x-full h-full"></span>

              <span className="absolute top-0 left-0 w-full bg-amber-950 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
              <span className="absolute delay-300 top-0 left-0 w-full bg-amber-950 duration-500 group-hover:translate-y-full h-full"></span>
            </button>
          </span>
        </motion.div>
      </div>
    </div>
  );
}
