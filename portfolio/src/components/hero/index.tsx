import React from "react";

export default function Hero() {
  return (
    <div className="h-96">
      <div className="flex flex-wrap gap-10 h-full justify-start items-center mt-10">
        <div>
          <p className="text-5xl">SEBASTIAN PALOMARES CABRERA</p>

          <p className="mt-5 w-[40rem] mb-5 text-xl">
            Desarrollador de software con formación profesional en{" "}
            <strong className="text-amber-950">ingeniería. </strong>
            Experiencia en el desarrollo de aplicaciones web, con conocimientos
            en tecnologías que involucran el front-end y back-end.
          </p>
          <button className="cursor-pointer relative group overflow-hidden border-2 px-5 py-2 border-amber-950 rounded-xl">
            <span className="font-bold text-white relative z-10 group-hover:text-black duration-500">
              Disponible
            </span>
            <span className="absolute top-0 left-0 w-full bg-amber-950 duration-500 group-hover:-translate-x-full h-full"></span>
            <span className="absolute top-0 left-0 w-full bg-amber-950 duration-500 group-hover:translate-x-full h-full"></span>

            <span className="absolute top-0 left-0 w-full bg-amber-950 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
            <span className="absolute delay-300 top-0 left-0 w-full bg-amber-950 duration-500 group-hover:translate-y-full h-full"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
