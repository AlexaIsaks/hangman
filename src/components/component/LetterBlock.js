import React from "react";

// Single letter block (part of the selected word)
const LetterBlock = ({ letter }) => {
  return (
    <div>
      {/*All letters are initially not displayed. When the player selects
      the correct letter, letter will be displayed*/}
      <span className="d-block mx-1 mb-1 text-center letter-block">
        {letter.selected ? letter.letter : null}
      </span>
    </div>
  );
};

export default LetterBlock;
