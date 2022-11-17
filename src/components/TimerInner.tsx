import { useContext } from "react";
import TimerContext from "../context/TimerContext";
import { convertToMinutes } from "../helpers/convertToMinutes";

function TimerInner({ remainingTime }: { remainingTime: number }) {
  const { isPlaying, handlePauseClick, handleResetClick } =
    useContext(TimerContext);

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <button
        className="text-2xl font-semibold uppercase tracking-[0.5rem] text-slate-300 duration-150 hover:text-white"
        onClick={handlePauseClick}
      >
        {isPlaying ? "start" : "pause"}
      </button>
      <span className="text-7xl font-bold text-slate-300">
        {convertToMinutes(remainingTime)}
      </span>
      <button
        className="text-2xl font-semibold uppercase tracking-[0.5rem] text-slate-300 duration-150 hover:text-white"
        onClick={handleResetClick}
      >
        reset
      </button>
    </div>
  );
}

export default TimerInner;
