import React from "react";
import { useNavigate } from 'react-router-dom';
import footerImage from "../Resources/Earth2.jpeg";

const Footer = () => {
  const navigate = useNavigate();

  const openHome = () => {
    navigate('/');
  };

  const openPlay = () => {
    navigate('/about');
  };

  const openContact = () => {
    navigate('/contact');
  };

  return (
    <footer
      className="text-white"
      style={{
        backgroundImage: `url(${footerImage})`, // Correctly use the image
        backgroundSize: 'cover', // Ensures the image covers the entire footer
        backgroundPosition: 'center', // Positions the image at the center
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        padding: '2rem 0', // Adds vertical padding
        display: 'flex', // Use flexbox for better alignment
        flexDirection: 'column', // Stacks content vertically
        justifyContent: 'center', // Vertically center the content
        alignItems: 'center', // Horizontally center the content
        minHeight: '250px', // Sets a minimum height for the footer
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ zIndex: '-1' }} // Ensure the overlay is behind content
      ></div>
      <div
        className="container text-center"
        style={{
          display: 'flex', // Flexbox for centering
          flexDirection: 'column', // Stack content
          alignItems: 'center', // Center horizontally
        }}
      >
        <div className="mb-5">
          <button className="text-white text-3xl font-bold">
            ACUMEN
          </button>
        </div>
        <div
          className="flex justify-center space-x-4 mb-4"
          style={{
            display: 'flex', // Flex for link buttons
            gap: '1rem', // Gap between buttons
          }}
        >
          <button
            className="text-gray-200 text-xl hover:text-white"
            onClick={openHome}
            style={{ transition: 'color 0.3s ease' }} // Smooth transition on hover
          >
            Home
          </button>
          <button
            className="text-gray-200 text-xl hover:text-white"
            onClick={openPlay}
            style={{ transition: 'color 0.3s ease' }}
          >
            About
          </button>
          <button
            className="text-gray-200 text-xl hover:text-white"
            onClick={openContact}
            style={{ transition: 'color 0.3s ease' }}
          >
            Contact
          </button>
          <button
            className="text-gray-200 text-xl hover:text-white"
            onClick={openHome}
            style={{ transition: 'color 0.3s ease' }}
          >
            Events
          </button>
        </div>
        <div
          className="text-gray-300 text-lg"
          style={{ marginTop: '1rem' }}
        >
          © {new Date().getFullYear()} ACUMEN. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
