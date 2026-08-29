"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import "./TextType.css";

export interface TextTypeProps extends React.HTMLAttributes<HTMLElement> {
  text: string | string[];
  typingSpeed?: number;
  variableSpeed?: { min: number; max: number };
  deletingSpeed?: number;
  pauseDuration?: number;
  initialDelay?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  cursorBlinkDuration?: number;
  hideCursorWhileTyping?: boolean;
  hideCursorOnMobile?: boolean;
  loop?: boolean;
  className?: string;
  cursorClassName?: string;
  as?: React.ElementType;
  onType?: (currentText: string) => void;
  onComplete?: () => void;
  onPhraseComplete?: (phraseIndex: number) => void;
}

export const TextType: React.FC<TextTypeProps> = ({
  text,
  typingSpeed = 45,
  variableSpeed = { min: 25, max: 70 },
  deletingSpeed = 25,
  pauseDuration = 2500,
  initialDelay = 400,
  showCursor = true,
  cursorCharacter = "|",
  cursorBlinkDuration = 0.6,
  hideCursorWhileTyping = false,
  hideCursorOnMobile = false,
  loop,
  className,
  cursorClassName,
  as: Component = "span",
  onType,
  onComplete,
  onPhraseComplete,
  ...props
}) => {
  const phrases = useMemo(() => {
    if (Array.isArray(text)) return text.filter((t) => typeof t === "string" && t.length > 0);
    if (typeof text === "string" && text.length > 0) return [text];
    return [""];
  }, [text]);

  const shouldLoop = loop !== undefined ? loop : phrases.length > 1;

  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const phraseIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const isUnmountedRef = useRef(false);

  // GSAP Cursor Blink Animation
  useEffect(() => {
    if (!showCursor || !cursorRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    });

    return () => {
      ctx.revert();
    };
  }, [showCursor, cursorBlinkDuration]);

  // Main Typing Engine
  useEffect(() => {
    isUnmountedRef.current = false;

    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setDisplayedText(phrases[0] || "");
      onComplete?.();
      return;
    }

    const getTypingDelay = () => {
      if (variableSpeed) {
        return (
          Math.floor(
            Math.random() * (variableSpeed.max - variableSpeed.min + 1)
          ) + variableSpeed.min
        );
      }
      return typingSpeed;
    };

    const typeNextChar = () => {
      if (isUnmountedRef.current) return;

      const currentPhrase = phrases[phraseIndexRef.current] || "";
      const currentLength = charIndexRef.current;

      if (!isDeleting) {
        // Typing Mode
        if (currentLength < currentPhrase.length) {
          const nextText = currentPhrase.slice(0, currentLength + 1);
          charIndexRef.current += 1;
          setDisplayedText(nextText);
          setIsTyping(true);
          onType?.(nextText);

          timeoutRef.current = setTimeout(typeNextChar, getTypingDelay());
        } else {
          // Finished typing current phrase
          setIsTyping(false);
          onPhraseComplete?.(phraseIndexRef.current);

          if (!shouldLoop || phrases.length <= 1) {
            onComplete?.();
            return;
          }

          // Pause before starting deletion
          timeoutRef.current = setTimeout(() => {
            if (isUnmountedRef.current) return;
            setIsDeleting(true);
            timeoutRef.current = setTimeout(typeNextChar, deletingSpeed);
          }, pauseDuration);
        }
      } else {
        // Deleting Mode
        if (currentLength > 0) {
          const nextText = currentPhrase.slice(0, currentLength - 1);
          charIndexRef.current -= 1;
          setDisplayedText(nextText);
          setIsTyping(true);
          onType?.(nextText);

          timeoutRef.current = setTimeout(typeNextChar, deletingSpeed);
        } else {
          // Finished deleting current phrase -> advance to next phrase
          setIsDeleting(false);
          setIsTyping(false);
          phraseIndexRef.current =
            (phraseIndexRef.current + 1) % phrases.length;

          // Short pause before starting next phrase
          timeoutRef.current = setTimeout(typeNextChar, 300);
        }
      }
    };

    // Initial Delay before starting typing
    timeoutRef.current = setTimeout(() => {
      typeNextChar();
    }, initialDelay);

    return () => {
      isUnmountedRef.current = true;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    phrases,
    typingSpeed,
    variableSpeed,
    deletingSpeed,
    pauseDuration,
    initialDelay,
    shouldLoop,
    onType,
    onComplete,
    onPhraseComplete,
  ]);

  return (
    <Component className={cn("inline-flex items-baseline justify-center text-type-root", className)} {...props}>
      <span className="inline text-type-text">{displayedText}</span>
      {showCursor && (
        <span
          ref={cursorRef}
          className={cn(
            "inline-block ml-0.5 font-light leading-none select-none pointer-events-none text-type-cursor",
            cursorClassName,
            hideCursorOnMobile && "hidden sm:inline-block",
            hideCursorWhileTyping && isTyping && "opacity-0"
          )}
          aria-hidden="true"
        >
          {cursorCharacter}
        </span>
      )}
    </Component>
  );
};

export default TextType;
