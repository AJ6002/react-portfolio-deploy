import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";
import ContributionGraph from "../components/ContributionGraph/ContributionGraph";
import TerminalIntro from "../components/TerminalIntro"; // ✅ FIX: IMPORT ADDED

const About = () => {
  const grid2Container = useRef(null);

  return (
    <section id="about" className="c-space section-spacing" >
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">

        {/* ================= GRID 1 : INTRO ================= */}
        
     {/* ================= GRID 1 : TERMINAL INTRO ================= */}
<div className="grid-1 flex items-start justify-start p-4 md:p-5">
  <div className="terminal-window w-full">
    <TerminalIntro/>
  </div>
</div>


        {/* ================= GRID 2 : GITHUB CONTRIBUTIONS ================= */}
<div
  ref={grid2Container}
  className="grid-2 flex items-center justify-center"
>
  <ContributionGraph username="aj6002" />
</div>

        {/* ================= GRID 3 : TIME ZONE ================= */}
        <div className="grid-black-color grid-3 relative overflow-hidden">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm open to remote work worldwide
            </p>
          </div>

          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* ================= GRID 4 : CONTACT ================= */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Interested in building something meaningful together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* ================= GRID 5 : TECH STACK ================= */}
        <div className="grid-terminal-bg grid-5 relative overflow-hidden">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools
              that allow me to build robust and scalable applications
            </p>
          </div>

          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
