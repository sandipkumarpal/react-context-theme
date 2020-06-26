import React from "react";

const Sidebar = props => {
  console.log({ props });
  return (
    <div
      style={{
        backgroundColor: props.themes.background,
        color: props.themes.foreground,
        padding: "20px",
        flex: 0.3
      }}
    >
      <p>Sidebar</p>
      <button onClick={props.toggleTheme}>Change Color</button>
    </div>
  );
};

export default Sidebar;
