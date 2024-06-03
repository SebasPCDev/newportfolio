import React from "react";
import { EXPERIENCES } from "../../constants";
import { HiCodeBracket } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="w-full h-auto mt-20" id="experience">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] text-center lg:text-start"
      >
        Experiencia Laboral
      </motion.h1>
      <div className="mt-10 ">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <p className="text-sm text-center lg:text-start">
                {experience.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4 mx-5 lg:mx-0"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm">{experience.company}</span>
              </h6>
              {experience.description.map((desc, index) => (
                <p key={index} className="text-sm mb-2 flex gap-2 px-5">
                  <div>
                    <HiCodeBracket className="w-4 h-4" />
                  </div>

                  {desc}
                </p>
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
