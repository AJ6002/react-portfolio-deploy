import { useEffect, useState } from "react";
const ASCII_BANNER = `
  ┌─────────┐
  │ <code/> │
  └─────────┘

  CSE • AIML • Data • Cloud
`;


const COMMANDS = [
  {
    prompt: "$ whoami",
    output: "Akshay Jadhav",
  },
  {
    prompt: "$ focus",
    output:
      "Building reliable systems with React, ML, and backend engineering",
  },
  {
    prompt: "$ profile",
    output: `🎓 CSE Graduate
🤖 AIML Enthusiast
📊 Data Engineering / Data Science
☁️ Cloud Solutions & DevOps`,
  },
  {
    prompt: "$ currently",
    output: "Open to internships & impactful projects",
  },
];

const TYPE_SPEED = 35;   // typing speed (ms)
const LINE_PAUSE = 600; // pause between lines (ms)

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const TerminalIntro = () => {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  /* Cursor blink */
  useEffect(() => {
    const blink = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  /* Typing animation */
  useEffect(() => {
    let cancelled = false;

    const typeSequence = async () => {
      for (const cmd of COMMANDS) {
        // Type prompt
        for (let i = 0; i < cmd.prompt.length; i++) {
          if (cancelled) return;
          setCurrentLine((prev) => prev + cmd.prompt[i]);
          await sleep(TYPE_SPEED);
        }

        await sleep(LINE_PAUSE);
        setLines((prev) => [...prev, cmd.prompt]);
        setCurrentLine("");

        // Type output
        for (let i = 0; i < cmd.output.length; i++) {
          if (cancelled) return;
          setCurrentLine((prev) => prev + cmd.output[i]);
          await sleep(TYPE_SPEED);
        }

        await sleep(LINE_PAUSE);
        setLines((prev) => [...prev, cmd.output]);
setCurrentLine(""); // cursor stays visible

      }
      // Show ASCII banner at the end
setLines((prev) => [...prev, ASCII_BANNER]);

// Final idle prompt
setCurrentLine("$ ");

    };

    typeSequence();

    return () => {
      cancelled = true;
    };
  }, []);

 return (
  <div>
    {lines.map((line, i) => (
      <p
  key={i}
  className={
    line.startsWith("$")
      ? "terminal-command"
      : line.includes("_|") || line.includes("| |")
      ? "terminal-ascii"
      : "terminal-output"
  }
>
  {line}
</p>

    ))}

    <p className="terminal-output">
      {currentLine}
      <span className="terminal-cursor">
        {cursorVisible ? "▋" : ""}
      </span>
    </p>
  </div>
);

};

export default TerminalIntro;
