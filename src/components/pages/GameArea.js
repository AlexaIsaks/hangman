import React from 'react';
import Header from '../layout/Header.js';
import Word from '../layout/Word.js';
import Keyboard from '../layout/Keyboard.js';

// Game area page
class GameArea extends React.Component {
  constructor(props) {
    super(props);

    // Game logic
    this.state = {
      dictionary: [
        "abruptly",
        "banknote",
        "deeply",
        "interest",
        "lawful",
        "pulsation",
        "radical",
        "scale",
        "witchery",
        "Zulu",
      ],
      keyDisabled: true,
      letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
      word: "",
      wordArray: [],
      hangmanState: 1,
      wins: 0,
      loses: 0,
    };
  }

  /* Selects a random word for the game.
   * Populates all the keys (enables and sets styles)
  */
  populateGame = () => {
    // Select a random word
    const dictionary = [...this.state.dictionary];
    const dictionaryLength = dictionary.length;
    const randomIndex = Math.floor(Math.random() * dictionaryLength);
    const selectedWord = dictionary[randomIndex].toUpperCase();

    /* Break up the word into single letters.Create an object for each letter. 
     * The object will contain the property "letter" for the actual letter
     * and "selected" which is used to indicate if the letter has been selected by the player
     */
    const singleLetters = [];
    for (let letter of selectedWord) {
      singleLetters.push({
        letter: letter,
        selected: false,
      });
    }

    // Enable keys that are disabled
    const keys = document.querySelectorAll(".key");
    keys.forEach((key) => {
      // Remove current key styles
      key.classList.remove("key--incorrect-letter", "key--correct-letter");

      // Reset key styles
      if (!key.classList.contains("text-peach")) {
        key.classList.add("text-peach", "border-peach");
      }

      // Enable any keys that are still disabled
        key.disabled = false;
    });

    return { selectedWord, singleLetters };
  };

  // Creates a new game. Scores are kept.
  handleNewGame = () => {
    // Populate game
    const { selectedWord, singleLetters } = this.populateGame();

    // Set new words and hangmanState
    this.setState({
      word: selectedWord,
      wordArray: singleLetters,
      keyDisabled: false,
      hangmanState: 1,
    });
  };

  // Resets the game. Scores are reset to 0.
  handleReset = () => {
    // Populate game
    const { selectedWord, singleLetters } = this.populateGame();

    // Set new word, reset scores and hangmanStates
    this.setState({
      word: selectedWord,
      wordArray: singleLetters,
      keyDisabled: false,
      hangmanState: 1,
      wins: 0,
      loses: 0,
    });
  };

  /* Determines if the key that was clicked is the letter that matches the
   * letter in the word. Ends game when hangman's final state is reached or 
   * if all matching letters have been selected.
   */
  handleKey = (event) => {
    // Retrieve letter from key
    const key = event.target;
    const selectedLetter = key.innerText;

    // Remove initial styles from key
    key.classList.remove("border-peach", "text-peach");

    // Retrieve state data
    const word = this.state.word;
    const wordLength = word.length;
    const wordArray = [...this.state.wordArray];
    let hangmanState = this.state.hangmanState;

    // Check if letter is found in the word
    const letterFound = word.includes(selectedLetter);

    // Letter is found
    if (letterFound) {
       // Update key style
       key.classList.add("key--correct-letter");

      /* Counts the number of letters that have been correctly selected by player.
       * This will be used to determine if all the letters have been selected. If true, the 
       * game will end.
       */
      let selectedLetters = 0;

      // Update the word array to indicate that the letter has been selected
      const updatedLetters = wordArray.map((letter) => {
        if (letter.letter === selectedLetter) {
          letter.selected = true;
        }

        if (letter.selected) {
          selectedLetters++;
        }

        return letter;
      });

      /* Check if all the letters of the word has been selected. If true,
       * end game. Player wins.
       */
      if (selectedLetters === wordLength) {
        // Update word array and winning score
        this.setState({
          keyDisabled: true,
          wordArray: updatedLetters,
          wins: this.state.wins + 1,
        });
      } else {
        // Update word array
        this.setState({
          wordArray: updatedLetters,
        });
      }

      // Letter not found
    } else {
      // Update key style
      key.classList.add("key--incorrect-letter");

      /* Check if the hangman state (drawing) has reached the end i.e. hangmanState of 11
       * If the hangman state is currently at 10, it will mean that next updated state will be 11.
       * Therefore the game will need to end and the player will lose.
       */
      if (hangmanState === 10) {
        // Update hangman state and loses score
        this.setState({
          keyDisabled: true,
          hangmanState: this.state.hangmanState + 1,
          loses: this.state.loses + 1,
        });

        // Continue game
      } else if (hangmanState < 10) {
        // Update hangman state
        this.setState({
          hangmanState: this.state.hangmanState + 1,
        });
      }
    }

    // Disable key
    key.disabled = true;
  };

  render() {
    return (
      <div className="min-vh-100 text-peach">
        {/*Page header*/}
        <Header
          handleNewGame={this.handleNewGame}
          handleReset={this.handleReset}
        />

        {/*Page main content*/}
        <main>
          <div className="container mb-3 d-flex flex-row justify-content-center align-items-center">
            {/*Hangman image/state*/}
            <div className="me-0 me-md-4 overflow-hidden hangman-container">
              <img
                src={
                  require("../../assets/images/state" +
                    this.state.hangmanState +
                    ".png").default
                }
                alt={"state" + this.state.hangmanState}
                className="hangman"
              />
            </div>

            {/*Score board*/}
            <div className="px-3 px-md-5">
              <div>
                <h2 className="border-tomato border-top-0 border-start-0 border-end-0 h3">
                  Wins:
                  <span className="ms-4">{this.state.wins}</span>
                </h2>
              </div>
              <div>
                <h2 className="border-tomato border-top-0 border-start-0 border-end-0 h3">
                  Loses:
                  <span className="ms-4">{this.state.loses}</span>
                </h2>
              </div>
            </div>
          </div>

          {/*Selected word for game*/}
          <Word word={this.state.wordArray} />
          {/*Game keyboard */}
          <Keyboard props={this.state} handleKey={this.handleKey} />
        </main>
      </div>
    );
  }
}

export default GameArea;