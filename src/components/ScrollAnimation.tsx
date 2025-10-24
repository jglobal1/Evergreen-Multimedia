import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'fade-in-up' | 'fade-in-down' | 'slide-in-left' | 'slide-in-right' | 'scale-in' | 'bounce-in';
  delay?: number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fade-in',
  delay = 0,
  className = '',
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold, triggerOnce });

  const animationClass = isVisible ? `animate-${animation}` : 'opacity-0 translate-y-8';

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animationClass} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
