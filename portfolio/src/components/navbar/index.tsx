import React from "react";

export default function NavBar() {
  return (
    <div>
      <nav className="pt-5">
        <div>
          <div className="flex justify-center">
            <ul className="text-primary flex gap-10 justify-center items-center">
              <li>
                <a href="#home">Experiencia</a>
              </li>
              <li>
                <a href="#about">Sobre Mi</a>
              </li>
              <li>
                <a href="#projects">Proyectos</a>
              </li>
              <li>
                <a href="#contact">Contacto</a>
              </li>
            </ul>
            <span>Dark/Ligth Icon</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
