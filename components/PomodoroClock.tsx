"use client";
import { useState, useEffect } from 'react';

type SessionType = 'Work' | 'Short Break' | 'Long Break';

interface PomodoroClockProps {
  sessionType: SessionType;
}

const PomodoroClock: React.FC<PomodoroClockProps> = ({ sessionType }) => {
  const [minutes, setMinutes] = useState<number>(
    sessionType === 'Work' ? 25 : sessionType === 'Short Break' ? 5 : 10
  );
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [quote, setQuote] = useState<string>('');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      timer = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            handleSessionComplete();
          } else {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prev) => prev - 1);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, minutes, seconds]);

  const handleSessionComplete = async () => {
    setIsRunning(false);
    await fetchMotivationalQuote();
  };

  const fetchMotivationalQuote = async () => {
    try {
      const res = await fetch('https://zenquotes.io/api/random');
      const data = await res.json();
      setQuote(data[0].q);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[500px] p-6 w-full max-w-[1200px] font-glamgirl bg-gradient-to-r from-pink-400 via-red-300 to-pink-500 text-red-700 rounded-xl shadow-2xl drop-shadow-xl transition-transform duration-300 ease-in-out">
      <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
        {sessionType} Session
      </h1>
      <div className="text-7xl font-extrabold mb-4 text-white drop-shadow-lg tracking-wider">
        {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
      </div>
      <div className="space-x-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="bg-white text-pink-600 font-extrabold py-3 px-8 rounded-full shadow-lg hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:scale-110"
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
      </div>
      {/* Styled quotes below the Pomodoro clock */}
      {quote && (
        <div className="mt-8 w-full h-80">
          <p className="text-2xl font-semibold text-white whitespace-nowrap animate-marquee">
            "{quote}"
          </p>
        </div>
      )}
      {/* Apply a marquee effect to the quote */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PomodoroClock;
