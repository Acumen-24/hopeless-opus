import React from "react";
import { Routes, Route } from "react-router-dom"; // Import routing components
import "./Play.css";
import StoryGame from "../StoryGame";
import Parallax from "../Component/PlayParallax";

const Play = () => {
  return (
    <div className="h-[100vh]">
      <Routes>
        {/* Route to render Parallax at the default route */}
        <Route path="/play" element={<Parallax />} />

        {/* Route to render StoryGame when the URL is '/start' */}
        <Route path="/start" element={<StoryGame />} />
      </Routes>
    </div>
  );
};

export default Play;
