import { useContext, useState } from "react";
import { ColorOptions } from "../../global/type";
import ColorContext from "../../context/ColorContext";
import CheckIcon from "../../../public/assets/icon-checkmark.svg";

function ColorSetting() {
  const colorOptions: ColorOptions[] = [
    { id: 1, value: "sky" },
    { id: 2, value: "yellow" },
    { id: 3, value: "emerald" },
  ];
  const [index, setIndex] = useState(1);
  const { setColor } = useContext(ColorContext);

  const handleChangeColor = (id: number, value: string) => {
    setColor(value);
    setIndex(id);
  };

  return (
    <div className="flex flex-col items-center justify-between space-y-4 pb-8 md:flex-row md:space-y-0">
      <h2 className="text-lg font-semibold">Colors</h2>
      <div className="flex gap-2">
        {colorOptions.map(({ id, value }) => (
          <button
            key={id}
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-${value}`}
            onClick={() => handleChangeColor(id, value)}
          >
            {index === id && <img src={CheckIcon} />}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ColorSetting;
