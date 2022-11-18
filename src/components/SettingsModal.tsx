import { useContext, Dispatch, SetStateAction } from "react";
import TimerContext from "../context/TimerContext";

function SettingsModal({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { timerMode, setTimerMode } = useContext(TimerContext);

  const timerModes = [
    {
      id: 1,
      name: "pomodoro",
      duration: timerMode.pomodoro,
    },
    {
      id: 2,
      name: "short break",
      duration: timerMode.shortBreak,
    },
    {
      id: 3,
      name: "long break",
      duration: timerMode.longBreak,
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/50" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-4">
        <div className="relative">
          <div className="flex justify-between border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-semibold">Setting</h2>
            <button
              className=""
              onClick={() => setIsOpen((prevState) => !prevState)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                <path
                  fill="#1E213F"
                  fill-rule="evenodd"
                  d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z"
                  opacity=".5"
                />
              </svg>
            </button>
          </div>

          <form className="space-y-4 pt-6 pb-12 md:flex md:items-center md:gap-4 md:space-y-0">
            {timerModes.map(({ id, name, duration }) => (
              <label
                htmlFor=""
                key={id}
                className="text-gray-40 relative flex items-center justify-between gap-2 text-slate-400 md:flex-col md:items-start md:gap-4"
              >
                {name}

                <input
                  type="number"
                  name={name}
                  className="relative w-32 appearance-none bg-slate-100 py-2 pl-2 focus:outline-sky-300"
                  value={duration}
                />
              </label>
            ))}
          </form>

          <button className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-sky-400 px-6 py-2 text-white">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsModal;
