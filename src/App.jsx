import  { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [times, setTimes] = useState('4');
  const [gameOver, setGameOver] = useState(false);


  useEffect(() => {
    setRandomNumber(generateRandomNumber());
  }, []);


  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };


  const handleGuess = () => {
    if (times > 0) {
      const userGuess = parseInt(guess);
      if (userGuess === randomNumber) {
        setMessage(<span style={{ background: 'green' }}>Congratulations! You got it right!</span>);
       


        // setMessage('Congratulations! You got it right!');
       
        setGameOver(true);
      } else if (userGuess > randomNumber) {
        setMessage(
          <>
            <span style={{ background: 'red' }}>Wrong!</span>
            <br />
            大きすぎます!
          </>
        );




      } else {
        // setMessage('小さすぎます! ');
        // setMessage('wrong!')
        setMessage(
          <>
            <span style={{ background: 'red' }}>Wrong!</span>
            <br />
            小さすぎます!
          </>
        );




      }
      setTimes(times - 1);
    } else {
      setMessage(`Game Over. The correct number was ${randomNumber}.`);
      setGameOver(true);
    }
    setGuess('');
  };


  const resetGame = () => {
    setRandomNumber(generateRandomNumber());
    setMessage('');
    setGuess('');
    setTimes(4);
    setGameOver(false);
  };


  return (
   
    <div className="container">
      <div className='box'>
      <p> {randomNumber}</p>
      <h1>Number Guessing Game</h1>
      <p>We have selected a random number between 1 and 100. See if you can guess it in 4 turns or fewer. We&apos;ll tell you if your guess was too high or too low.</p>
     
      <div>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          disabled={gameOver} 

        />
        <button onClick={handleGuess} disabled={gameOver}>
          Submit guess
        </button>
      </div>
      <p>{message}</p>
      <p>Previous guesses: {times}</p>
      {gameOver && (
        <button onClick={resetGame}>Play Again</button>
        )}
        </div>
        </div>
     
   
   
  );
}


export default App;


