export interface TimerContent {
  isPlaying: boolean;
  resetKey: number;
  handlePauseClick: () => void;
  handleResetClick: () => void;
}
