import React from "react";
import { PROJECTS } from "../../constants";
import { motion } from "framer-motion";
import profileAbout from "../../assets/profileabout.jpg";
import { useTranslation } from "react-i18next";

export default function About() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="w-full h-auto mt-20 mb-20" id="about">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] text-center lg:text-start"
      >
        {t("about.title")}
      </motion.h1>
      <div className="mt-5">
        <div className="flex flex-col lg:flex-row justify-center items-top gap-10">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className=" w-full max-w-xl lg:w-3/4r mx-auto lg:mx-0 lg:text-start p-5 md:p-0"
          >
            <p>{t("about.description1")}</p>
            <br />
            <p>{t("about.description2")}</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={profileAbout}
              alt="profile"
              width={1200}
              height={1200}
              className="rounded-xl rotate-3 shadow-xl object-cover block w-96 h-96 lg:w-96 lg:h-96 mx-auto lg:mx-0"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
