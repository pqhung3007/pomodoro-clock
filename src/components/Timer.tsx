import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useContext } from "react";
import TimerContext from "../context/TimerContext";
import TimerInner from "./TimerInner";
import { convertMinutesToSeconds } from "../helpers/convertMinutesToSeconds";

function Timer() {
  const { isPlaying, resetKey, timerMode, mode, handleResetClick } =
    useContext(TimerContext);

  const getDurationByMode = convertMinutesToSeconds(+timerMode[mode]);

  return (
    <>
      <div className="hidden md:block">
        <CountdownCircleTimer
          isPlaying={isPlaying}
          key={resetKey}
          duration={getDurationByMode}
          colors="#38bdf8"
          onComplete={() => handleResetClick()}
          size={400}
        >
          {({ remainingTime }) => <TimerInner remainingTime={remainingTime} />}
        </CountdownCircleTimer>
      </div>

      <div className="block md:hidden">
        <CountdownCircleTimer
          isPlaying={isPlaying}
          key={resetKey}
          duration={getDurationByMode}
          trailColor="#fff"
          colors="#38bdf8"
          onComplete={() => handleResetClick()}
          size={330}
        >
          {({ remainingTime }) => <TimerInner remainingTime={remainingTime} />}
        </CountdownCircleTimer>
      </div>
    </>
  );
}

export default Timer;
