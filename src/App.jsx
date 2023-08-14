import {useEffect, useState} from 'react';
import './App.css'

const App = () => {



  useEffect(() => {

    const results = []

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    const rand = document.querySelector(".random_box")
    rand.innerHTML = randomNumber

    const guesses = document.querySelector(".guesses");
    const lastResult = document.querySelector(".lastResult");
    const lowOrHi = document.querySelector(".lowOrHi");
    
    const guessSubmit = document.querySelector(".guessSubmit");
    const guessField = document.querySelector(".guessField");
    
    let guessCount = 1;
    let resetButton;

    
    function checkGuess() {
      if (randomNumber == guessField.value){
        lastResult.style.background = 'green'
        lastResult.style.color = 'white'
        lastResult.innerHTML = 'Congratulations! You got it right!'
      }else{
        lastResult.style.background = 'red'
        lastResult.style.color = 'white'
        lastResult.innerHTML = 'Wrong!'

        results.push(guessField.value)
      }
      guesses.innerHTML = 'Previous guesses:' + results;
    }

    guessSubmit.addEventListener("click", checkGuess)

  
  },[]);

  return (
    <div className="container">
      <div className="box">

        <p className='random_box'></p>

        <h1>Number guessing game</h1>
        <p>We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer. We'll tell you if your guess was too high or too low.</p>
        <div className="guess">
          <label htmlFor="guessField">Enter a guess: </label>
          <input type="number" id="guessField" className="guessField" />
          <input type="submit" value="Submit guess" className="guessSubmit" />
        </div>
        <div className="resultParas">
          <p className="guesses"></p>
          <p className="lastResult"></p>
          <p className="lowOrHi"></p>
        </div>
      </div>
    </div>
  );
};

export default App;
