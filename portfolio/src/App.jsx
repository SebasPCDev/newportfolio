import About from "./components/about";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Hero from "./components/hero";
import NavBar from "./components/navbar";
import Projects from "./components/projects";

export default function App() {
  return (
    <>
      <div className="overflow-x-hidden antialiased">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-gradient-to-b from-amber-50 to-neutral-400 "></div>
        </div>
        <NavBar />
        <div className="max-w-[65rem] mx-auto container ">
          <Hero />
          <Experience />
          <Projects />
          <About />
        </div>
        <Footer />
      </div>
    </>
  );
}
