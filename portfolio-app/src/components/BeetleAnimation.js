import React, { useEffect, useState } from 'react';
import './BeetleAnimationStyles.css';
import beetleImg from '../assets/beetle.png';

const BeetleAnimation = () => {
  const [showBeetles, setShowBeetles] = useState(false);
  
  useEffect(() => {
    // Check if this is the first visit
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
    
    if (!hasVisitedBefore) {
      // Set the flag in localStorage
      localStorage.setItem('hasVisitedBefore', 'true');
      
      // Show beetles
      setShowBeetles(true);
      
      // Hide beetles after 5 seconds
      const timer = setTimeout(() => {
        setShowBeetles(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  // Handle page unload in a separate useEffect to ensure proper cleanup
  useEffect(() => {
    // Define the handler function to clear localStorage
    const handleBeforeUnload = () => {
      localStorage.removeItem('hasVisitedBefore');
    };
    
    // Add event listener for page close/refresh
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  
  // Create 4 beetles with different start positions and animation paths
  const beetles = [
    { id: 1, animationClass: 'beetle-animation-1' },
    { id: 2, animationClass: 'beetle-animation-2' },
    { id: 3, animationClass: 'beetle-animation-3' },
    { id: 4, animationClass: 'beetle-animation-4' }
  ];
  
  if (!showBeetles) return null;
  
  return (
    <div className="beetle-container">
      {beetles.map(beetle => (
        <div 
          key={beetle.id} 
          className={`beetle ${beetle.animationClass}`}
        >
          <img src={beetleImg} alt="Beetle" />
        </div>
      ))}
    </div>
  );
};

export default BeetleAnimation;
