import React, { useState, useRef, useEffect } from 'react';
import './Bubble.css';

export default function BubbleRevealText() {
  const [mousePosition, setMousePosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const textContainerRef = useRef(null);
  const [containerPosition, setContainerPosition] = useState({ x: 0, y: 0 });
  const requestRef = useRef(null);
  const currentMousePosition = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [bubbleSize, setBubbleSize] = useState(300); // Initial bubble size

  // Adjust bubble size based on screen width and height for mobile responsiveness
  useEffect(() => {
    const updateBubbleSize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      
      // Adjust bubble size based on screen size for responsive behavior
      if (screenWidth < 640) { // Mobile view
        setBubbleSize(150);
      } else if (screenWidth < 1024) { // Tablet view
        setBubbleSize(200);
      } else {
        setBubbleSize(300); // Default for larger screens
      }
    };

    updateBubbleSize(); // Initial call to set bubble size
    window.addEventListener('resize', updateBubbleSize); // Listen for window resize

    return () => window.removeEventListener('resize', updateBubbleSize); // Cleanup listener
  }, []);

  useEffect(() => {
    if (textContainerRef.current) {
      const rect = textContainerRef.current.getBoundingClientRect();
      setContainerPosition({ x: rect.left, y: rect.top });
    }
  }, []);

  useEffect(() => {
    const updateMousePosition = () => {
      // Adjust this part to maintain slower movement
      setMousePosition((prevPosition) => {
        const newX = prevPosition.x + (currentMousePosition.current.x - prevPosition.x) * 0.05; // Slower movement
        const newY = prevPosition.y + (currentMousePosition.current.y - prevPosition.y) * 0.05; // Slower movement
        return { x: newX, y: newY };
      });
      requestRef.current = requestAnimationFrame(updateMousePosition);
    };

    requestRef.current = requestAnimationFrame(updateMousePosition);

    // Cleanup function to cancel the animation frame
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // Track the current mouse position when the cursor moves
  const handleMouseMove = (e) => {
    currentMousePosition.current = {
      x: e.clientX - containerPosition.x,
      y: e.clientY - containerPosition.y,
    };
  };

  const head1 = `HOPELESS `;
  const head2 = ` OPUS`;

  return (
    <div className='w-full overflow-hidden'>
      <div
        ref={textContainerRef}
        onMouseMove={handleMouseMove}
        className="relative lg:h-[100vh] h-[60vh] cursor-default overflow-hidden "
      >
        {/* Visible layer with radial gradient mask */}
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage: `radial-gradient(circle ${bubbleSize}px at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 80%)`,
            maskImage: `radial-gradient(circle ${bubbleSize}px at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 80%)`,
            backdropFilter: 'blur(10px) saturate(700%)',
            transition: 'mask-position(300s ease-out', // Smooth transition effect
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
        >
          {/* Text Elements */}
          <div className="flex items-center justify-center no-select tracking-widest leading-tight lg:text-[15rem] text-[5rem] font-extrabold text-white font-guerrilla lg:pt-10 lg:pb-30 pt-40">
            <h1 className="block lg:inline">
              {head1}
              <h1 className="block lg:inline">
                {head2}
              </h1>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
