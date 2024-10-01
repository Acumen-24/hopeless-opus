import React, { useState } from "react";
import BaseUrl from "./BaseUrl";
import PlayGame from "./components/PlayGame"

const StoryGame = () => {
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [gameStarted, setGameStarted] = useState(false); // Track if the game has started

  const fetchStory = async (storyId) => {
    setLoading(true);
    try {
      const response = await fetch(`${BaseUrl}/api/story/${storyId}`);
      const data = await response.json();
      setStory(data);
    } catch (error) {
      console.error("Error fetching story:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch the initial story when the game starts
  const startGame = () => {
    setGameStarted(true); // Set game as started
     fetchStory("0001");
  };

  const handleOptionClick = (nextStoryId) => {
    // fetchStory(nextStoryId);
  };

  if (!gameStarted) {
    // Show this when the game hasn't started
    return (
      <div>
        <h1>Welcome to the Story Game</h1>
        <button onClick={startGame}>Start Game</button>
      </div>
    );
  }

  if (loading) {
    // Render the HomePage component when loading
    return <PlayGame />;
  }

  return (
    <div>
      {story && (
        <div>
          <p>{story.snippet}</p>
          {story.options.map((option, index) => (
            <button key={index} onClick={() => handleOptionClick(option.nextStoryId)}>
              {option.optionText}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
    
export default StoryGame;