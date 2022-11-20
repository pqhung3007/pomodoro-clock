import { useState, useContext, useEffect } from "react";
import TimerContext from "../context/TimerContext";
import ColorContext from "../context/ColorContext";

function TimerMode() {
  const timerModes = [
    { id: 1, name: "pomodoro", value: "pomodoro" },
    { id: 2, name: "short break", value: "shortBreak" },
    { id: 3, name: "long break", value: "longBreak" },
  ];

  const [index, setIndex] = useState(1);
  const { setMode, handleResetClick, handlePauseClick, timerMode, mode } =
    useContext(TimerContext);
  const { color } = useContext(ColorContext);

  useEffect(() => {
    handlePauseClick();
    handleResetClick();
  }, [timerMode, mode]);

  const handleChooseMode = (id: number, value: string) => {
    setIndex(id);
    setMode(value);
  };

  return (
    <div className="flex gap-4 rounded-full bg-zinc-700">
      {timerModes.map(({ id, name, value }) => (
        <button
          key={id}
          onClick={() => handleChooseMode(id, value)}
          className={`flex items-center justify-center rounded-full px-3 py-2 font-semibold duration-150 hover:text-white md:px-6 md:py-4 ${
            id === index ? ` text-white` : "text-slate-300"
          }`}
          style={{ backgroundColor: id === index ? `#${color}` : "" }}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export default TimerMode;
