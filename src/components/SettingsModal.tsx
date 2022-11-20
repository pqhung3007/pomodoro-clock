import { Dispatch, SetStateAction, useContext } from "react";
import ColorSetting from "./colors/ColorSetting";
import TimerSetting from "./time/TimerSetting";
import ColorContext from "../context/ColorContext";

function SettingsModal({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { color } = useContext(ColorContext);

  return (
    <div className="fixed inset-0 bg-black/50" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-4 md:w-[60vw]">
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
                  fillRule="evenodd"
                  d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z"
                  opacity=".5"
                />
              </svg>
            </button>
          </div>

          <TimerSetting />
          <ColorSetting />

          <button
            type="submit"
            className={`absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md bg-${color} px-6 py-2 text-white`}
            onClick={() => setIsOpen((prevState) => !prevState)}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsModal;
