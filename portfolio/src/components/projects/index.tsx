import React from "react";
import { PROJECTS } from "../../constants";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="w-full h-auto mt-20" id="projects">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] text-center lg:text-start"
      >
        Proyectos
      </motion.h1>
      <div className="mt-5">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-evenly flex-col-reverse lg:flex-row"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4 flex items-center justify-center"
            >
              <div className="relative hover:scale-105 transition duration-300 ease-in-out mt-5 lg:mt-0">
                <img
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={300}
                  className="rounded-lg object-cover  block"
                />
                <div className="rounded-lg w-full h-full top-0 left-0 absolute flex justify-center items-center opacity-0 transition duration-200 hover:opacity-100 bg-opacity-70 bg-black text-white">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg"
                  >
                    Ver proyecto
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4r mx-auto lg:mx-0"
            >
              <h6 className="mb-2 font-semibold mt-3 lg:mt-0">
                {project.title}
              </h6>
              <p className="text-sm mb-4">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded-lg mr-2"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
            <hr
              style={{
                color: "#FFFFF",
                backgroundColor: "#FFFFF",
                height: 1,
                width: "80%",
                marginTop: "1rem",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
