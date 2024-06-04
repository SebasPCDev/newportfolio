import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../../assets/blackcat.png";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const [scroll, setScroll] = React.useState(0);
  const [t, i18n] = useTranslation("global");

  const handleLanguage = (e: any) => {
    e.target.checked ? i18n.changeLanguage("es") : i18n.changeLanguage("en");
  };

  const setNavbar = () => {
    setScroll(window.scrollY);
  };
  window.addEventListener("scroll", setNavbar);

  return (
    <div className="fixed top-0 z-10 overflow-hidden w-full">
      <nav
        className={
          scroll === 0
            ? "bg-opacity-0 transition duration-500 ease-in-out"
            : "bg-slate-200 bg-opacity-95 transition duration-500 ease-in-out"
        }
      >
        <div className="blur-none">
          <div className="flex justify-between mx-40">
            <div className="flex items-center">
              <span>
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="hero"
                  className="cursor-pointer"
                >
                  <img src={logo} alt="logo" width={60} height={60} />
                </Link>
              </span>
            </div>
            <ul className="text-primary flex gap-10 justify-center items-center">
              <li className="cursor-pointer p-2 rounded-xl hover:scale-110 transition duration-300 hover:bg-slate-300">
                <Link activeClass="active" smooth spy to="experience">
                  {t("navbar.experience")}
                </Link>
              </li>
              <li className="cursor-pointer p-2 rounded-xl hover:scale-110 transition duration-300 hover:bg-slate-300">
                <Link activeClass="active" smooth spy to="projects">
                  {t("navbar.projects")}
                </Link>
              </li>
              <li className="cursor-pointer p-2 rounded-xl hover:scale-110 transition duration-300 hover:bg-slate-300">
                <Link activeClass="active" smooth spy to="about">
                  {t("navbar.about")}
                </Link>
              </li>
            </ul>
            <div className="flex m-5 items-center justify-center gap-5">
              <span>
                <a href="https://github.com/SebasPCDev" target="_blank">
                  <FaGithub className="w-5 h-5 hover:scale-125 transition duration-150" />
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/sebaspcdev/"
                  target="_blank"
                >
                  <FaLinkedin className="w-5 h-5 hover:scale-125 transition duration-150" />
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/sebaspalomares7/"
                  target="_blank"
                >
                  <FaInstagram className="w-5 h-5 hover:scale-125 transition duration-150" />
                </a>
              </span>
              <span className="flex">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={handleLanguage}
                  />
                  <div className="peer ring-0 bg-amber-900 text-[12px] font-bold rounded-full outline-none duration-300 after:duration-500 w-8 h-8 shadow-md peer-checked:bg-black peer-focus:outline-none  after:content-['EN'] after:rounded-full after:absolute after:outline-none after:h-6 after:w-6 after:bg-gray-50 after:top-1 after:left-1 after:flex after:justify-center after:items-center  peer-hover:after:scale-75 peer-checked:after:content-['ES'] after:-rotate-0 peer-checked:after:rotate-0"></div>
                </label>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
