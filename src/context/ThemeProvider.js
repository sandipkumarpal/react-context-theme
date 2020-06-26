import React, { createContext } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  },
  toggleTheme: value => {
    console.log(value);
    return value;
  }
};
const ThemeContext = createContext();
const Provider = ThemeContext.Provider;
const Consumer = ThemeContext.Consumer;

const ThemeProvider = ({ children }) => {
  return <Provider value={{ themes }}>{children}</Provider>;
};

const ThemeConsumer = Component => props => {
  return (
    <Consumer>
      {({ themes, toggleTheme }) => (
        <Component {...{ ...props, themes, toggleTheme }} />
      )}
    </Consumer>
  );
};

export { ThemeProvider, ThemeConsumer };
