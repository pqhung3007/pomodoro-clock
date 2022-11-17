import { useState } from "react";

function TimerMode() {
  const timerModes = [
    { id: 1, name: "pomodoro" },
    { id: 2, name: "short break" },
    { id: 3, name: "long break" },
  ];

  const [index, setIndex] = useState(1);

  return (
    <div className="mt-8 flex gap-4 rounded-full bg-zinc-700 p-1">
      {timerModes.map(({ id, name }) => (
        <button
          key={id}
          onClick={() => setIndex(id)}
          className={`flex items-center justify-center rounded-full p-4 px-6 font-bold duration-150 hover:text-white ${
            id === index ? "bg-sky-200 text-sky-700" : "text-slate-300"
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export default TimerMode;
