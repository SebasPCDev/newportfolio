import React from "react";
import { PROJECTS } from "../../constants";
import { motion } from "framer-motion";
import profileAbout from "../../assets/profileabout.jpg";

export default function About() {
  return (
    <div className="w-full h-auto mt-20 mb-20" id="about">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] text-center lg:text-start"
      >
        Sobre mí
      </motion.h1>
      <div className="mt-5">
        <div className="flex flex-col lg:flex-row justify-center items-top gap-10">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className=" w-full max-w-xl lg:w-3/4r mx-auto lg:mx-0 text-center lg:text-start"
          >
            <p>
              Mis acercamientos con la programación inician desde el año 2015,
              cuando comencé mi carrera de <strong>ingeniería biomédica</strong>
              . Desde entonces, he desarrollado una gran afinidad por la
              resolución de problemas mediante <strong>código</strong> y{" "}
              <strong>algoritmos.</strong>
            </p>
            <br />
            <p>
              En enero de 2024, tras casi cuatro años de experiencia laboral,
              decidí formalizar mis habilidades como{" "}
              <strong>desarrollador full stack.</strong> Emprendí un nuevo
              camino hacia una etapa de crecimiento personal y profesional, con
              el objetivo de poner en práctica y llevar al siguiente nivel mis
              conocimientos y capacidades como potencial desarrollador Full
              Stack.
            </p>
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
