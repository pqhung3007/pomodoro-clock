import TimerMode from "./components/TimerMode";
import Timer from "./components/Timer";
import Settings from "./components/Settings";
import { TimerProvider } from "./context/TimerContext";

function App() {
  return (
    <TimerProvider>
      <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-800">
        <h1 className="text-3xl font-semibold uppercase tracking-wider text-white">
          Pomodoro
        </h1>
        <TimerMode />
        <Timer />
        <Settings />
      </main>
    </TimerProvider>
  );
}

export default App;
