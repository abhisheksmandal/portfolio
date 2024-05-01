import React, { useState, useEffect, useRef } from "react";

const TextTyper = ({
  sentences,
  interval = 100,
  waitTime = 3000,
  Markup = "span",
}) => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  const intervalRef = useRef(null);

  const typingRender = (text, updater, interval) => {
    let localTypingIndex = 0;
    let localTyping = "";
    if (text) {
      intervalRef.current = setInterval(() => {
        if (localTypingIndex < text.length) {
          updater((localTyping += text[localTypingIndex]));
          localTypingIndex += 1;
        } else {
          clearInterval(intervalRef.current);
          setIsWaiting(true);
          setTimeout(() => {
            if (currentIndex < sentences.length - 1) {
              setCurrentIndex(currentIndex + 1);
            } else {
              setCurrentIndex(0);
            }
            setIsWaiting(false);
          }, waitTime); // Wait for specified waitTime
        }
      }, interval);
    }
  };

  useEffect(() => {
    typingRender(sentences[currentIndex], setTypedText, interval);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [currentIndex, sentences, interval, waitTime]);

  return (
    <Markup>
      {typedText}
      {isWaiting ? (
        <span className="blinking-cursor animate">|</span>
      ) : (
        <span className="blinking-cursor ">|</span>
      )}
    </Markup>
  );
};

export default TextTyper;
