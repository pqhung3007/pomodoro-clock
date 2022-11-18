import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useContext } from "react";
import TimerContext from "../context/TimerContext";
import TimerInner from "./TimerInner";
import { convertMinutesToSeconds } from "../helpers/convertMinutesToSeconds";

function Timer() {
  const { isPlaying, resetKey, timerMode, mode } = useContext(TimerContext);

  const getDurationByMode = convertMinutesToSeconds(+timerMode[mode]);

  return (
    <CountdownCircleTimer
      isPlaying={isPlaying}
      key={resetKey}
      duration={getDurationByMode}
      colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
      colorsTime={[10, 6, 3, 0]}
      onComplete={() => ({ shouldRepeat: true, delay: 1 })}
      size={400}
    >
      {({ remainingTime }) => <TimerInner remainingTime={remainingTime} />}
    </CountdownCircleTimer>
  );
}

export default Timer;
