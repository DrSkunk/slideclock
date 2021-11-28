import clsx from "clsx";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const digits = [
    Math.floor(time.getHours() / 10),
    Math.floor(time.getHours() % 10),
    Math.floor(time.getMinutes() / 10),
    Math.floor(time.getMinutes() % 10),
    Math.floor(time.getSeconds() / 10),
    Math.floor(time.getSeconds() % 10),
  ];

  return (
    <>
      <Head>
        <title>{time.toDateString()}</title>
      </Head>
      <div className="h-screen flex justify-center items-center gap-6">
        {digits.map((digit, index) => (
          <Digit key={index} selected={digit} />
        ))}
      </div>
    </>
  );
}

function Digit({ selected }) {
  return (
    <div className="relative w-12">
      <div
        className={`absolute flex flex-col justify-center items-center gap-2 bg-gray-500 transition duration-500`}
        style={{ transform: `translateY(${-3.5 * selected}rem)` }}
      >
        <Number active={selected === 0}>0</Number>
        <Number active={selected === 1}>1</Number>
        <Number active={selected === 2}>2</Number>
        <Number active={selected === 3}>3</Number>
        <Number active={selected === 4}>4</Number>
        <Number active={selected === 5}>5</Number>
        <Number active={selected === 6}>6</Number>
        <Number active={selected === 7}>7</Number>
        <Number active={selected === 8}>8</Number>
        <Number active={selected === 9}>9</Number>
      </div>
    </div>
  );
}

function Number({ children, active }) {
  return (
    <div
      className={clsx(
        "flex justify-center items-center",
        "w-12 h-12",
        "rounded-full",
        "transition duration-300",
        active && "font-bold shadow bg-black bg-opacity-10 scale-125"
      )}
    >
      {children}
    </div>
  );
}
