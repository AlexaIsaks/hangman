import React from "react";

// Key (part of keyboard)
const Key = ({ letter, keyDisabled, handleKey }) => {
  return (
    <button
      type="button"
      className="btn mx-1 mb-1 border-peach text-peach key"
      onClick={handleKey}
      disabled={keyDisabled}
    >
      {letter}
    </button>
  );
};

export default Key;
