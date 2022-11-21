import { useContext, ChangeEvent } from "react";
import TimerContext from "../../context/TimerContext";
import { TimerMode } from "../../global/type";

function TimerSetting() {
  const { timerMode, setTimerMode } = useContext(TimerContext);

  const timerModes = [
    {
      id: 1,
      name: "pomodoro",
      value: "pomodoro",
      duration: timerMode.pomodoro,
    },
    {
      id: 2,
      name: "short break",
      value: "shortBreak",
      duration: timerMode.shortBreak,
    },
    {
      id: 3,
      name: "long break",
      value: "longBreak",
      duration: timerMode.longBreak,
    },
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (+value > 120) {
      window.alert("A Pomodoro cannot exceeds 120 minutes");
    } else {
      setTimerMode((prevState: TimerMode) => ({
        ...prevState,
        [name]: +value,
      }));
    }
  };

  return (
    <form className="justify-center space-y-4 pt-6 pb-12 md:flex md:items-center md:gap-4 md:space-y-0">
      {timerModes.map(({ id, name, value, duration }) => (
        <label
          htmlFor="duration"
          key={id}
          className="text-gray-40 relative flex items-center justify-between gap-2 text-slate-400 md:flex-col md:items-start md:gap-4"
        >
          {name}

          <input
            type="number"
            name={value}
            className="relative w-32 appearance-none bg-slate-100 py-2 pl-2 focus:outline-sky-300"
            value={duration}
            min="0"
            max="120"
            onChange={handleInputChange}
          />
        </label>
      ))}
    </form>
  );
}

export default TimerSetting;
