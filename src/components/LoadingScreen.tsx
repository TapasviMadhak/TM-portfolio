import { useEffect, useState } from 'react';
import { FaCode } from 'react-icons/fa';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(onLoadingComplete, 500); // Delay before hiding
          return 100;
        }
        return prevProgress + 2;
      });
    }, 30); // Smooth progress animation

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
        isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <FaCode 
              className={`h-16 w-16 text-primary transition-transform duration-1000 ${
                progress > 50 ? 'scale-110 rotate-12' : 'scale-100'
              }`} 
            />
            {/* Rotating ring around logo */}
            <div 
              className="absolute inset-0 rounded-full border-2 border-primary/20 border-t-primary animate-spin"
              style={{ width: '80px', height: '80px', left: '-8px', top: '-8px' }}
            />
          </div>
        </div>

        {/* Name with typing effect */}
        <h1 className="text-3xl font-bold mb-4 gradient-text">
          Tapasvi Madhak
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg text-muted-foreground mb-8">
          Cybersecurity Enthusiast & Penetration Tester
        </p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Loading Portfolio</span>
            <span className="text-sm font-medium text-primary">{progress}%</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center mt-6 space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;