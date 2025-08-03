import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updatePosition);

    // Target interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], .cursor-pointer-elem'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full transition-all duration-75 ease-out"
      style={{
        left: position.x - (isHovering ? 24 : 8),
        top: position.y - (isHovering ? 24 : 8),
        width: isHovering ? 48 : 16,
        height: isHovering ? 48 : 16,
        backgroundColor: isHovering ? 'transparent' : 'hsl(var(--foreground))',
        border: isHovering ? '2px solid hsl(var(--foreground))' : 'none',
        mixBlendMode: 'difference',
      }}
    />
  );
};

export default CustomCursor;
