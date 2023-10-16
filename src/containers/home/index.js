"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [advices, setAdvices] = useState([]);

  const fetchAdvices = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvices(data);
  };
  useEffect(() => {
    fetchAdvices();
  }, []);
  return (
    <main className="flex flex-col h-screen w-screen justify-center items-center">
      <div className="w-80 h-[22rem] bg-dark-grayish-blue rounded-xl drop-shadow-lb sm:w-[500px] sm:h-[19rem]">
        <div className="flex flex-col justify-center items-center p-8 space-y-8">
          <h1 className="text-neon-green uppercase tracking-[0.25rem] text-xs font-medium">
            Advice #{advices.slip?.id}
          </h1>
          <div className="flex flex-col justify-center items-center">
            <span className="text-light-cyan text-2xl font-bold text-center w-72 sm:w-96">
              {advices.slip?.advice}
            </span>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center -mt-16 space-y-4">
        <img src="/pattern-divider-desktop.svg" className="w-64 sm:w-full" />
        <button
          className="flex w-16 h-16 bg-neon-green rounded-full justify-center items-center hover:shadow-neonxl"
          onClick={fetchAdvices}
        >
          <img src="/icon-dice.svg" />
        </button>
      </div>
    </main>
  );
}
