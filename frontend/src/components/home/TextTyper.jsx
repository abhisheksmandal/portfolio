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
    intervalRef.current = setInterval(() => {
      if (!isWaiting && localTypingIndex < text.length) {
        updater((localTyping += text[localTypingIndex]));
        localTypingIndex += 1;
      } else if (!isWaiting && localTypingIndex === text.length) {
        setIsWaiting(true);
        clearInterval(intervalRef.current);
        setTimeout(() => {
          setIsWaiting(false);
          setIsWaiting(true);
          intervalRef.current = setInterval(() => {
            if (localTypingIndex > 0) {
              updater(
                (localTyping = localTyping.substring(0, localTypingIndex - 1))
              );
              localTypingIndex -= 1;
            } else {
              clearInterval(intervalRef.current);
              setCurrentIndex((prevIndex) =>
                prevIndex === sentences.length - 1 ? 0 : prevIndex + 1
              );
              setIsWaiting(false);
            }
          }, interval);
        }, waitTime); // Wait for specified waitTime
      }
    }, interval);
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
