import { useEffect, useState } from "react";

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");
  const timeStr = `${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(time.getSeconds())}`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-black">Добро пожаловать!</h1>
        <p className="text-xl text-gray-600 mb-6">тут будет отображаться ваш проект</p>
        <span className="inline-block bg-orange-500 text-white text-sm font-mono px-4 py-2 rounded-full">
          {timeStr}
        </span>
      </div>
    </div>
  );
};

export default Index;
