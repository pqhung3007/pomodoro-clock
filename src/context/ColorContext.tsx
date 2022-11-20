import { createContext, useState } from "react";
import { ColorContent } from "../global/type";

const ColorContext = createContext<ColorContent>({
  color: "0ea5e9",
  setColor: () => null,
});

export const ColorProvider = ({ children }: { children: JSX.Element }) => {
  const [color, setColor] = useState("0ea5e9");

  return (
    <ColorContext.Provider
      value={{
        color,
        setColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContext;
