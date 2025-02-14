"use client";

import { Typewriter } from "react-simple-typewriter";

const TypewriterComponent = () => {
  return (
    <div className="text-primary">
      <h1 className="text-md md:text-3xl">I work with </h1>
      <span className="text-4xl md:text-9xl font-bold">
        <Typewriter
          words={["Next.js", "TypeScript", "Node.js" ,"C/C++"]}
          loop={0} 
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </div>
  );
};

export default TypewriterComponent;
