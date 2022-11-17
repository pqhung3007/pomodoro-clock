import TimerMode from "./components/TimerMode";
import Timer from "./components/Timer";
import Settings from "./components/Settings";

function App() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-zinc-800">
      <h1 className="text-white font-semibold uppercase tracking-wider text-3xl">
        Pomodoro
      </h1>
      <TimerMode />
      <Timer />
      <Settings />
    </main>
  );
}

export default App;
