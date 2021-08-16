import React, { useState } from "react";

export function ToggleComponent(props) {
  const [isToggle, setIsToggle] = useState("isToggleState");

  const toogleStates = {
    isToggleState: {
      text: "Switch to precipitation",
      color: "blue",
      clickHandler: () => setIsToggle("notToggleState")
    },
    notToggleState: {
      text: "Switch to all Weather Variables",
      color: "red",
      clickHandler: () => setIsToggle("isToggleState")
    }
  };

  return <TemplateToggleButton {...toogleStates[isToggle]} />;
}

export function TemplateToggleButton(props) {
  const { color, text, clickHandler } = props;
  return (
    <button
      type="button"
      className={`py-2 px-4 bg-${color}-600 hover:bg-${color}-700 focus:ring-${color}-500 focus:ring-offset-${color}-200 text-white w-full transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 opacity-70 rounded-full`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
}
