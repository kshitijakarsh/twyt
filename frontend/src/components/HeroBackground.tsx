"use client"
import { useEffect, useState } from "react";

const TaperedLinesBackground = () => {
  const lineCount = 73;
  const lines = new Array(lineCount).fill(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime + 1) % 1000);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 flex justify-between items-start px-4">
        {lines.map((_, index) => {
          const phase = (index % 5) / 5;
          const animationOffset = Math.sin(time / 20 + phase * Math.PI * 2);
          const opacityPulse = 0.2 + 0.15 * Math.sin(time / 30 + index * 0.1);
          const heightScale = 0.85 + 0.15 * Math.sin(time / 40 + index * 0.05);

          return (
            <div
              key={index}
              className="h-full transform origin-bottom transition-transform"
              style={{
                width: "18px",
                background:
                  "linear-gradient(to bottom, rgba(156,163,175,0.7), transparent)",
                clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                opacity: opacityPulse,
                height: `${heightScale * 100}%`,
                transform: `translateY(${animationOffset * 5}px) scaleY(${
                  0.9 + Math.sin(time / 25 + index * 0.1) * 0.1
                })`,
              }}
            />
          );
        })}
      </div>

      <div className="absolute inset-0 flex justify-between items-start px-4">
        {lines.map((_, index) => (
          <div
            key={`static-${index}`}
            className="h-full"
            style={{
              width: "4px",
              background:
                "linear-gradient(to bottom, rgba(156,163,175,0.4), transparent 80%)",
              clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
              opacity: 0.15,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TaperedLinesBackground;
