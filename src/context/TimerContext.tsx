import { createContext, useState } from "react";
import { TimerContent } from "../global/type";

export const TimerContext = createContext<TimerContent>({
  handlePauseClick: () => null,
  handleResetClick: () => null,
});

export const TimerProvider = ({ children }: { children: JSX.Element }) => {
  const [first, setFirst] = useState<string>("");
  const [second, setSecond] = useState<string>("");
  const handlePauseClick = () => setFirst("hung");
  const handleResetClick = () => setSecond("hung");
  return (
    <TimerContext.Provider
      value={{
        handlePauseClick,
        handleResetClick,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
