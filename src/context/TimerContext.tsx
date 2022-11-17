import { createContext, useState } from "react";
import { TimerContent, TimerMode } from "../global/type";

const TimerContext = createContext<TimerContent>({
  timerMode: {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  },
  mode: "pomodoro",
  isPlaying: false,
  resetKey: 0,
  setTimerMode: () => null,
  setMode: () => null,
  handlePauseClick: () => null,
  handleResetClick: () => null,
});

export const TimerProvider = ({ children }: { children: JSX.Element }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [timerMode, setTimerMode] = useState<TimerMode>({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  });
  const [mode, setMode] = useState("pomodoro");

  const handlePauseClick = () => setIsPlaying((prevState) => !prevState);
  const handleResetClick = () => {
    /* reset playing state */
    setIsPlaying(false);
    setResetKey((prevState) => prevState + 1);
  };

  return (
    <TimerContext.Provider
      value={{
        timerMode,
        mode,
        isPlaying,
        resetKey,
        setMode,
        setTimerMode,
        handlePauseClick,
        handleResetClick,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerContext;
