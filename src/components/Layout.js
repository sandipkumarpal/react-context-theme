import React, { useState } from "react";
import { ThemeConsumer } from "../context/ThemeProvider";
import Sidebar from "./Sidebar";
import Content from "./Content";

const Layout = props => {
  console.log(props.themes);
  const [theme, setTheme] = useState("light");
  const onHandleToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    props.themes.toggleTheme(theme);
  };
  return (
    <div style={{ display: "flex" }}>
      <Sidebar themes={props.themes[theme]} toggleTheme={onHandleToggle} />
      <Content
        themes={props.themes[props.themes.toggleTheme(theme)]}
        children={props.children}
      />
    </div>
  );
};

export default ThemeConsumer(Layout);
