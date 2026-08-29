"use client";

import { useEffect, useMemo, useState } from "react";

type TextTypeProps = {
  text: string | string[];
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: React.ReactNode;
  cursorClassName?: string;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
};

export function TextType({
  text,
  typingSpeed = 42,
  initialDelay = 250,
  pauseDuration = 2400,
  deletingSpeed = 24,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  textColors = [],
  variableSpeed,
}: TextTypeProps) {
  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reducedMotion) return;

    setDisplayedText(textArray[0] ?? "");
    setCurrentCharIndex((textArray[0] ?? "").length);
  }, [textArray]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || textArray.length === 0) return;

    const currentText = textArray[currentTextIndex] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && currentCharIndex < currentText.length) {
      const speed = variableSpeed
        ? Math.round(Math.random() * (variableSpeed.max - variableSpeed.min) + variableSpeed.min)
        : typingSpeed;

      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, currentCharIndex + 1));
        setCurrentCharIndex((value) => value + 1);
      }, speed);
    } else if (!isDeleting) {
      if (!loop && currentTextIndex === textArray.length - 1) return;

      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (currentCharIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, currentCharIndex - 1));
        setCurrentCharIndex((value) => Math.max(0, value - 1));
      }, deletingSpeed);
    } else {
      setIsDeleting(false);
      setCurrentTextIndex((value) => (value + 1) % textArray.length);
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    currentTextIndex,
    deletingSpeed,
    isDeleting,
    loop,
    pauseDuration,
    textArray,
    typingSpeed,
    variableSpeed,
  ]);

  const currentTextColor = textColors.length
    ? textColors[currentTextIndex % textColors.length]
    : "inherit";

  const shouldHideCursor =
    hideCursorWhileTyping &&
    (currentCharIndex < (textArray[currentTextIndex] ?? "").length || isDeleting);

  return (
    <span className={`inline-flex items-baseline whitespace-nowrap ${className}`}>
      <span style={{ color: currentTextColor }}>{displayedText}</span>
      {showCursor && !shouldHideCursor && (
        <span
          aria-hidden="true"
          className={`ml-[0.08em] inline-block animate-pulse font-light ${cursorClassName}`}
        >
          {cursorCharacter}
        </span>
      )}
    </span>
  );
}
