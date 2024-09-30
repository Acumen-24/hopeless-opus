import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // React Router v6
import StoryGame from './StoryGame';
import About from './components/About';
import Navbar from './components/Navbar';
import Page1 from './components/page1'; // Import Page1
import Page2 from './components/page2'; // Import Page2
import Page3 from './components/page3'; // Import Page3

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
      {/* Navbar will be present on all pages */}
      <Navbar />

      <div className="main-content">
        {/* Routes component replaces Switch in React Router v6 */}
        <Routes>
          <Route path="/" element={<StoryGame />} />
          <Route path="/about" element={<About />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </div>

      {/* Footer will be present on all pages */}
      
    </Router>
  );
}

export default App;
