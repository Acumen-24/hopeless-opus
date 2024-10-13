import React, { useState, useEffect } from "react";
import Card from "./Card"; // Ensure Tailwind is imported

const cardImages = ["🔪", "🔫", "🗡️", "⚔️", "🏹", "🛠️", "🛡️", "⌚"];

function Minigame2({ gameResult }) {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30); // 30-second timer
  const [score, setScore] = useState(0); // Score starts at 0
  const [gameOver, setGameOver] = useState(false); // Track if the game is over
  const [gameStarted, setGameStarted] = useState(false); // Track if the game has started
  const [triesLeft, setTriesLeft] = useState(3); // Track the number of tries left

  // Initialize and shuffle cards
  useEffect(() => {
    if (gameStarted) {
      shuffleCards();
    }
  }, [gameStarted]);

  // Timer countdown
  useEffect(() => {
    if (gameStarted && timeLeft > 0 && !gameOver) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
      setGameStarted(false);
      gameResult(score);
    }
  }, [timeLeft, gameOver, gameStarted]);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((image, index) => ({
        id: index,
        image,
        flipped: false,
        matched: false,
      }));
    setCards(shuffledCards);
  };

  const handleFlip = (card) => {
    if (disabled || gameOver) return;
    if (card.flipped || card.matched) return;

    const updatedCards = cards.map((c) =>
      c.id === card.id ? { ...c, flipped: true } : c
    );

    setCards(updatedCards);

    if (!firstCard) {
      setFirstCard(card);
    } else {
      setSecondCard(card);
      setDisabled(true);
      checkForMatch(card);
    }
  };

  const checkForMatch = (newCard) => {
    if (firstCard.image === newCard.image) {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.image === newCard.image ? { ...card, matched: true } : card
        )
      );
      setScore(score + 10); // Add 10 points for a match
      resetCards();
    } else {
      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === firstCard.id || card.id === newCard.id
              ? { ...card, flipped: false }
              : card
          )
        );
        resetCards();
      }, 1000);
    }
  };

  const resetCards = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  };

  const handleGameStartOrRestart = () => {
    if (triesLeft > 0) {
      setScore(0);
      setTimeLeft(30);
      setGameOver(false);
      setGameStarted(true);
      shuffleCards();
    }
  };

  const handleTryAgain = () => {
    if (triesLeft > 0) {
      setTriesLeft(triesLeft - 1);
      handleGameStartOrRestart();
    }
  };

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  return (
    <div className="h-full bg-black flex flex-col items-center mt-auto mb-auto p-10 justify-center">
      <h1 className="text-3xl font-bold mb-4 text-white">Memory Matching Game</h1>

      {/* Start/Restart Button */}
      {!gameStarted && !gameOver && triesLeft > 0 && (
        <div className="mb-4">
          <button
            onClick={handleTryAgain}
            className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md text-lg"
          >
            {gameOver ? "Try Again" : "Start Game"}
          </button>
        </div>
      )}

      {/* Display Timer, Score, and Tries Left */}
      {gameStarted && (
        <div className="mb-4">
          <p className="text-lg font-semibold text-white">Time Left: {timeLeft}s</p>
          <p className="text-lg font-semibold text-white">Score: {score}</p>
          <p className="text-lg font-semibold text-white">Tries Left: {triesLeft}</p>
        </div>
      )}

      {/* Game Over message */}
      {gameOver && triesLeft > 0 && (
        <div className="mb-4 text-red-500">
          <h2 className="text-2xl font-bold">Game Over!</h2>
          <button
            onClick={handleTryAgain}
            className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md text-lg"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Out of Tries message */}
      {triesLeft === 0 && (
        <div className="mb-4 text-red-500">
          <h2 className="text-2xl font-bold">No more tries left! Game Over.</h2>
        </div>
      )}

      {/* Game Board */}
      {gameStarted && !gameOver && (
        <div className="flex flex-col">
          {chunkArray(cards, 4).map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-row">
              {row.map((card) => (
                <Card key={card.id} card={card} handleFlip={handleFlip} />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Minigame2;
