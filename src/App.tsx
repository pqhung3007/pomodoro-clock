import TimerMode from "./components/TimerMode";
import Timer from "./components/Timer";
import SettingsModal from "./components/SettingsModal";
import { TimerProvider } from "./context/TimerContext";
import { ColorProvider } from "./context/ColorContext";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <TimerProvider>
      <ColorProvider>
        <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-zinc-800 px-4">
          <h1 className="text-3xl font-semibold uppercase tracking-wider text-white">
            Pomodoro
          </h1>
          <TimerMode />
          <Timer />

          <button
            type="button"
            onClick={() => setIsModalOpen((prevState) => !prevState)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">
              <path
                fill="#D7E0FF"
                d="M26.965 17.682l-2.927-2.317c.055-.448.097-.903.097-1.365 0-.462-.042-.917-.097-1.365l2.934-2.317a.702.702 0 00.167-.896l-2.775-4.851a.683.683 0 00-.847-.301l-3.454 1.407a10.506 10.506 0 00-2.345-1.379l-.52-3.71A.716.716 0 0016.503 0h-5.55a.703.703 0 00-.687.588l-.52 3.71c-.847.357-1.63.819-2.345 1.379L3.947 4.27a.691.691 0 00-.847.301L.325 9.422a.705.705 0 00.167.896l2.927 2.317c-.055.448-.097.903-.097 1.365 0 .462.042.917.097 1.365L.492 17.682a.702.702 0 00-.167.896L3.1 23.429a.683.683 0 00.847.301L7.4 22.323a10.506 10.506 0 002.345 1.379l.52 3.71c.056.329.34.588.687.588h5.55a.703.703 0 00.687-.588l.52-3.71c.847-.357 1.631-.819 2.346-1.379l3.454 1.407c.313.119.673 0 .847-.301l2.775-4.851a.705.705 0 00-.167-.896zM13.73 18.9c-2.685 0-4.857-2.191-4.857-4.9 0-2.709 2.172-4.9 4.857-4.9 2.684 0 4.856 2.191 4.856 4.9 0 2.71-2.172 4.9-4.856 4.9z"
                opacity=".5"
                className="hover:fill-white"
              />
            </svg>
          </button>
          {isModalOpen && <SettingsModal setIsOpen={setIsModalOpen} />}
        </main>
      </ColorProvider>
    </TimerProvider>
  );
}

export default App;
