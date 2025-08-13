import { useState, useEffect } from "react";

const RotatingText = () => {
  const words = ["Designer", "Coder", "Player"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Matches animation duration
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      key={index} // Forces animation restart
      className="text-green-400 ml-2 inline-block animate-fadeSlide"
    >
      {words[index]}
    </span>
  );
};

export default RotatingText;
