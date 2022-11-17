import { createContext, useState } from "react";
import { TimerContent } from "../global/type";

const TimerContext = createContext<TimerContent>({
  isPlaying: true,
  handlePauseClick: () => null,
  handleResetClick: () => null,
});

export const TimerProvider = ({ children }: { children: JSX.Element }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePauseClick = () => setIsPlaying((prevState) => !prevState);
  const handleResetClick = () => console.log("reset");

  return (
    <TimerContext.Provider
      value={{
        isPlaying,
        handlePauseClick,
        handleResetClick,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerContext;
