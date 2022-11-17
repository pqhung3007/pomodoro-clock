import { CountdownCircleTimer } from "react-countdown-circle-timer";
import TimerInner from "./TimerInner";

function Timer() {
  /* const renderTime = ({ remainingTime }: { remainingTime: number }) => {
    if (remainingTime === 0) {
      return <p>Too late</p>;
    }

    return (
      <div className="flex flex-col">
        <p>Remaining</p>
        <p>{remainingTime}</p>
        <p>seconds</p>
      </div>
    );
  }; */

  return (
    <CountdownCircleTimer
      isPlaying
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
