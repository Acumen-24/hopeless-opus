import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // React Router v6
import StoryGame from './StoryGame';
import Navbar from './components/Navbar';
import PlayGame from './components/PlayGame';


function App() {
  const [data, setData] = useState('');

  // Fetch data from the root endpoint
  useEffect(() => {
    fetch('/')
      .then((res) => res.text())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Router>
      
      <Navbar />

      <div className="main-content">
        {/* Routes component replaces Switch in React Router v6 */}
        <Routes>
          <Route path="/" element={<StoryGame />} />
          <Route path="/PlayGame" element={<PlayGame />} />
        </Routes>
      </div>

      
      
    </Router>
  );
}

export default App;
