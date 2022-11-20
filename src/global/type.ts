import { Dispatch, SetStateAction } from "react";
export interface TimerContent {
  timerMode: TimerMode;
  mode: string;
  isPlaying: boolean;
  resetKey: number;
  setTimerMode: Dispatch<SetStateAction<TimerMode>>;
  setMode: Dispatch<SetStateAction<string>>;
  handlePauseClick: () => void;
  handleResetClick: () => void;
}

/* index signature 
{ [key: KeyType]: ValueType }.
*/
export interface TimerMode {
  [key: string]: number;
}

export interface ColorOptions {
  id: number;
  value: string;
}

export interface ColorContent {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}
