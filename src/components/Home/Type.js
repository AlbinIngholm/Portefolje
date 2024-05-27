import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Student",
          ".NET Developer",
          "Problem-Solver",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

function Type2() {
  return (
    <Typewriter
      options={{
        strings: [
          "Hi There!",
          "Hei der!",
          "Bonjour!",
          "Hola!",
          "Ciao!",
          "Konnichiwa!",
          "Aloha!",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export { Type, Type2 };
