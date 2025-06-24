"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  text: string;
  className?: string;
  delay?: number;
}

export function Typewriter({ text, className, delay = 100 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayedText('');
    setIsTyping(true);
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(intervalId);
        setIsTyping(false);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [text, delay]);

  return (
    <span className={cn("relative overflow-hidden whitespace-nowrap", className)}>
        {displayedText}
        <span className={cn("border-r-4 border-r-accent", isTyping ? 'animate-blink-caret' : 'border-r-transparent')}></span>
    </span>
  );
}
