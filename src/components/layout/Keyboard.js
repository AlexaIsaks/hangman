import React from "react";
import Key from "../component/Key.js";

// Keyboard
const Keyboard = ({ props, handleKey }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="d-flex flex-wrap justify-content-start align-items-center keyboard">
        {/*Display each key*/}
        {props.letters.map((letter) => {
          return (
            <Key
              key={letter}
              letter={letter}
              keyDisabled={props.keyDisabled}
              handleKey={handleKey}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Keyboard;