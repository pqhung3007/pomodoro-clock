import { createContext, useState } from "react";
import { ColorContent } from "../global/type";

const ColorContext = createContext<ColorContent>({
  color: "sky-500",
  setColor: () => null,
});

export const ColorProvider = ({ children }: { children: JSX.Element }) => {
  const [color, setColor] = useState("sky-500");

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
