import React, { createContext } from "react";

export const ThemeContext = createContext({
  islight: false,
  setIsLight: () => {},
});
