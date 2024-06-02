import Hero from "./components/hero";
import NavBar from "./components/navbar";

export default function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-amber-50 to-neutral-400 font-mono h-screen">
        <div className="max-w-[60rem] mx-auto">
          <NavBar />
          <Hero />
        </div>
      </div>
    </>
  );
}
