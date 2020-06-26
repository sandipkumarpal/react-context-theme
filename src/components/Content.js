import React from "react";

const Content = props => {
  console.log({ props });
  return (
    <div
      style={{
        backgroundColor: props.themes.background,
        color: props.themes.foreground,
        padding: "20px",
        flex: 0.7
      }}
    >
      {props.children}
    </div>
  );
};

export default Content;
