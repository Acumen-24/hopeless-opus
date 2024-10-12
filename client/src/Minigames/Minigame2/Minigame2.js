import React, { useState, useEffect } from "react";
import Card from "./Card"; // Ensure Tailwind is imported

const cardImages = ["🍎", "🍌", "🍇", "🍉", "🍋", "🍊", "🍓", "🍒"];

function Minigame2({ gameResult }) {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30); // 30-second timer
  const [score, setScore] = useState(0); // Score starts at 0
  const [gameOver, setGameOver] = useState(false); // Track if the game is over

  // Initialize and shuffle cards
  useEffect(() => {
    shuffleCards();
  }, []);

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
      gameResult(score);
    }
  }, [timeLeft, gameOver]);

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
          card.image === newCard.image
            ? { ...card, matched: true }
            : card
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

  const handleRestart = () => {
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
    shuffleCards();
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
      <h1 className="text-3xl font-bold mb-4">Memory Matching Game</h1>
  
      {/* Display Timer and Score */}
      <div className="mb-4">
        <p className="text-lg font-semibold">Time Left: {timeLeft}s</p>
        <p className="text-lg font-semibold">Score: {score}</p>
      </div>
  
      {/* Game Over message */}
      {gameOver && (
        <div className="mb-4 text-red-500">
          <h2 className="text-2xl font-bold">Game Over!</h2>
          <button
            onClick={handleRestart}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Restart Game
          </button>
        </div>
      )}
  
      {/* Game Board */}
      <div className={`flex flex-col ${gameOver ? "pointer-events-none" : ""}`}>
        {chunkArray(cards, 4).map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-row">
            {row.map((card) => (
              <Card
                key={card.id}
                card={card}
                handleFlip={handleFlip}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}  

export default Minigame2;