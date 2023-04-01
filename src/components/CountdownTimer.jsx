import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ deadline }) => {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime(deadline));

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(getRemainingTime(deadline));
    }, 1000);
    return () => clearInterval(interval);
  }, [deadline]);

  const days = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
  const hours = Math.floor((remainingTime / (60 * 60 * 1000)) % 24);
  const minutes = Math.floor((remainingTime / (60 * 1000)) % 60);
  const seconds = Math.floor((remainingTime / 1000) % 60);

  return (
    <div>
      <div className="flex justify-center mt-10 gap-18 text-white bg-[#e76da6] p-8 m-8 rounded-xl">
        <div className="bg-[#fc749f] p-5 rounded-full w-96 h-96 flex justify-center items-center flex-col mx-3 border-white border-8">
          <div className="text-8xl font-bold">{days}</div>
          <div className="text-[50px]">Days</div>
        </div>
        <div className="bg-[#fc749f] p-5 rounded-full w-96 h-96 flex justify-center items-center flex-col mx-3 border-white border-8">
          <div className="text-8xl font-bold">{hours}</div>
          <div className="text-[50px]">Hours</div>
        </div>
        <div className="bg-[#fc749f] p-5 rounded-full w-96 h-96 flex justify-center items-center flex-col mx-3 border-white border-8">
          <div className="text-8xl font-bold">{minutes}</div>
          <div className="text-[50px]">Minutes</div>
        </div>
        <div className="bg-[#fc749f] p-5 rounded-full w-96 h-96 flex justify-center items-center flex-col mx-3 border-white border-8">
          <div className="text-8xl font-bold">{seconds}</div>
          <div className="text-[50px]">Seconds</div>
        </div>
      </div>
    </div>
  );
};

const getRemainingTime = (deadline) => {
  const now = new Date().getTime();
  const remainingTime = deadline - now;
  return remainingTime < 0 ? 0 : remainingTime;
};

export default CountdownTimer;
