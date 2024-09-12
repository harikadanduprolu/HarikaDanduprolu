import React, { useEffect, useState } from 'react';
import './DropAnimation.css';

function DropAnimation() {
  const [animationComplete, setAnimationComplete] = useState(false);

  // Trigger after 8 seconds (increased display time for "Welcome")
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 8000); // Increased from 5000 to 8000 ms to keep "Welcome" longer

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`animation-container ${animationComplete ? 'hidden' : ''}`}>
      <div className="dot-container">
        <div className="dot"></div>
      </div>
      <div className="name">
        <span>Welcome</span> {/* The "Welcome" text */}
      </div>
    </div>
  );
}

export default DropAnimation;
