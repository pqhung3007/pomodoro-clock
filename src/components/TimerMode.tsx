function TimerMode() {
  const timerModes = [
    { id: 1, name: "pomodoro" },
    { id: 2, name: "short break" },
    { id: 3, name: "long break" },
  ];

  return (
    <div className="flex gap-4 rounded-full bg-zinc-700 p-2">
      {timerModes.map(({ id, name }) => (
        <button
          key={id}
          className="flex items-center justify-center rounded-full py-2 text-slate-300 duration-150 hover:text-white"
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export default TimerMode;
