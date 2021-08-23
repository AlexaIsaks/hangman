import React from "react";
import { NavLink } from "react-router-dom";

// Game page header
const Header = (props) => {
  return (
    <header className="p-2 d-flex justify-content-between align-items-center">
      <h1 className="h3 text-tomato text-center">Hangman</h1>
      <div>
        {/*New game and restart buttons */}
        <button
          type="button"
          onClick={props.handleNewGame}
          className="me-2 btn btn-sm border-peach text-peach"
        >
          New Game
        </button>
        <button
          type="button"
          className="me-2 btn btn-sm border-peach text-peach"
          onClick={props.handleReset}
        >
          Reset
        </button>
        {/*Link to help page*/}
        <NavLink to={"/help"} className="btn btn-sm border-peach text-peach">
          Help
        </NavLink>
      </div>
    </header>
  );
};

export default Header;