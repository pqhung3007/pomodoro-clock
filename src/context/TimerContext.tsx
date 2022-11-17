import { createContext, useState } from "react";
import { TimerContent } from "../global/type";

const TimerContext = createContext<TimerContent>({
  isPlaying: false,
  resetKey: 0,
  handlePauseClick: () => null,
  handleResetClick: () => null,
});

export const TimerProvider = ({ children }: { children: JSX.Element }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const handlePauseClick = () => setIsPlaying((prevState) => !prevState);
  const handleResetClick = () => {
    /* reset playing state */
    setIsPlaying(false);
    setResetKey((prevState) => prevState + 1);
  };

  return (
    <TimerContext.Provider
      value={{
        isPlaying,
        resetKey,
        handlePauseClick,
        handleResetClick,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerContext;
