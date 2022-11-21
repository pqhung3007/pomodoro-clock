import { useState, createContext } from "react";
import { SoundContent } from "../global/type";
import useSound from "use-sound";

const SoundContext = createContext<SoundContent>({
  playFinishSound: () => null,
});

export const SoundProvider = ({ children }: { children: JSX.Element }) => {
  const [playFinishSound] = useSound("/assets/morning_glory.mp3");

  return (
    <SoundContext.Provider value={{ playFinishSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export default SoundContext;
