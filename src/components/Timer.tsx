import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useContext } from "react";
import TimerContext from "../context/TimerContext";
import TimerInner from "./TimerInner";

function Timer() {
  const { isPlaying } = useContext(TimerContext);

  return (
    <CountdownCircleTimer
      isPlaying={isPlaying}
      duration={60}
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
