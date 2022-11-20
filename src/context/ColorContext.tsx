import { createContext, useState } from "react";
import { ColorContent } from "../global/type";

const ColorContext = createContext<ColorContent>({
  color: "sky",
  setColor: () => null,
});

export const ColorProvider = ({ children }: { children: JSX.Element }) => {
  const [color, setColor] = useState("sky");

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
