import React from "react";
import LetterBlock from "../component/LetterBlock";

// Selected game word
const Word = ({ word }) => {
  return (
    <div className="mb-3 d-flex justify-content-center align-items-center">
      <div className="d-flex flex-wrap justify-content-start align-items-center">
        {/*Display each letter block*/}
        {word.map((letter, index) => {
          return <LetterBlock key={index} letter={letter} />;
        })}
      </div>
    </div>
  );
};

export default Word;
