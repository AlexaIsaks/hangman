import React from "react";
import { NavLink } from "react-router-dom";

// Help page
const Help = () => {
  return (
    <div className="h-100 text-peach">
      {/*Page header */}
      <header className="p-2">
        <NavLink
          exact
          to={"/"}
          className="ms-auto btn btn-sm border-peach text-peach"
        >
          Return to Game
        </NavLink>
      </header>

      {/*Page main content */}
      <main className="container pt-3 d-flex justify-content-center align-items-center">
        {/*Hangman instructions*/}
        <article>
          <h1 className="mb-5 h2 text-center text-tomato">
            How to play Hangman
          </h1>

          {/*Instructions to play the game*/}
          <section className="mb-5">
            <h2 className="mb-4 h4 text-tomato">Instructions</h2>
            <ul>
              <li>
                The player needs to guess the right letters before the hangman
                picture is completed.
              </li>
              <li>To choose a letter, click on the keyboard.</li>
              <li>
                If the correct letter is chosen, the position of letter will
                be revealed.
              </li>
              <li>
                If an incorrect letter is chosen, part of the hangman picture
                will be drawn.
              </li>
              <li>
                To win the game, the word must be completed before the hangman
                picture is fully drawn.
              </li>
              <li>
                Player loses the game, when the hangman picture is fully drawn.
              </li>
            </ul>
          </section>

          {/*Instructions to start the game*/}
          <section className="mb-5">
            <h2 className="mb-4 h4 text-tomato">New Game</h2>
            <ul>
              <li>Click the "New Game" button to start a new game.</li>
              <li>Scores will be kept.</li>
            </ul>
          </section>

          {/*Instructions to reset the game*/}
          <section className="mb-5">
            <h2 className="mb-4 h4 text-tomato">Reset Game</h2>
            <ul>
              <li>To start a fresh game, click on the "Reset" button.</li>
              <li>This will remove all the scores.</li>
            </ul>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Help;
