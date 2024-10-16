import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PlayParallax.css"; // Import your CSS styles
import imageHoverEffect from "../Component/ImageHoverEffect"; // Import imageHoverEffect function

const Parallax = () => {
  const textRef = useRef(null);
  const bird1Ref = useRef(null);
  const bird2Ref = useRef(null);
  const btnRef = useRef(null);
  const rocksRef = useRef(null);
  const forestRef = useRef(null);
  const headerRef = useRef(null);

  // State for checkbox and button
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      textRef.current.style.top = 50 + value * -0.15 + "%";
      bird1Ref.current.style.top = value * -0.75 + "px";
      bird1Ref.current.style.left = value * -2.5 + "px";
      bird2Ref.current.style.top = value * -0.75 + "px";
      bird2Ref.current.style.left = value * 1 + "px";
      rocksRef.current.style.top = value * -0.06 + "px";
      forestRef.current.style.top = value * 0.15 + "px";
      headerRef.current.style.top = value * 0.25 + "px";
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleStartClick = () => {
    if (isChecked) {
      navigate("/start"); // Navigate to /start when button is clicked
    }
  };

  return (
    <div>
     
      <header id="header" ref={headerRef}>
        <a href="#" className="logo">
          Forest
        </a>
        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </header>
      <section>
        <h2 id="text" ref={textRef}>
          <span>It's time for a new</span>
          <br />
          Adventure
        </h2>

        <img
          src="https://user-images.githubusercontent.com/65358991/170092504-132fa547-5ced-40e5-ab64-ded61518fac2.png"
          id="bird1"
          ref={bird1Ref}
          style={{ width: "1250px", height: "auto" }} // Increase size of bird1
        />
        <img
          src="https://user-images.githubusercontent.com/65358991/170092542-9747edcc-fb51-4e21-aaf5-a61119393618.png"
          id="bird2"
          ref={bird2Ref}
          style={{ width: "1250px", height: "auto" }} // Increase size of bird2
        />
        <img
          src="https://user-images.githubusercontent.com/65358991/170092559-883fe071-eb4f-4610-8c8b-a037d061c617.png"
          id="forest"
          ref={forestRef}
          style={{ width: "100%", height: "700px" }} // Increase size of forest image
        />

        <img
          src="https://user-images.githubusercontent.com/65358991/170092605-eada6510-d556-45cc-b7fa-9e4d1d258d26.png"
          id="rocks"
          ref={rocksRef}
          style={{ width: "100%", height: "auto" }} // Increase size of rocks
        />
        <img
          src="https://user-images.githubusercontent.com/65358991/170092616-5a70c4af-2eed-496f-bde9-b5fcc7142a31.png"
          id="water"
          style={{ width: "100%", height: "auto" }} // Increase size of water
        />
      </section>
      <div className="sec">
        {/* Rules Section */}
        <div className="rules-section">
          <h3>Game Rules</h3>
          <ul>
            <li>Rule 1: Follow the instructions carefully.</li>
            <li>Rule 2: No cheating allowed!</li>
            <li>Rule 3: Respect other players.</li>
            <li>Rule 4: Keep your language clean.</li>
            <li>Rule 5: Stay within the game boundaries.</li>
            <li>Rule 6: Report any bugs or issues.</li>
            <li>Rule 7: Play fair and have fun!</li>
            <li>Rule 8: Make sure to save your progress.</li>
            <li>Rule 9: Try to help new players.</li>
            <li>Rule 10: Enjoy the adventure!</li>
          </ul>
          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox-input" // Add a class here
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            I have read the rules of the game.
          </label>

          <br />
          <button
            onClick={handleStartClick} // Handle click event
            disabled={!isChecked}
            className={`start-button ${isChecked ? "active" : ""}`}
          >
            Start Now
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Parallax;
