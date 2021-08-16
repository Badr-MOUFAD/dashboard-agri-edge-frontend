import React from "react";

export function VarPicker(props) {
  const { arrWeatherVars, selectedWeatherVar, clickHandler } = props;

  return (
    <div class="flex flex-col mt-4">
      {arrWeatherVars.map((weatherVar, i) => {
        return (
          <div key={`side-bar-${i}`}>
            <button
              type="button"
              onClick={() => clickHandler(weatherVar)}
              className={`mb-2 py-2 px-4 bg-${
                selectedWeatherVar === weatherVar ? "blue-600" : "gray-100"
              } w-full text-${
                selectedWeatherVar === weatherVar ? "white" : "gray-500"
              } font-${
                selectedWeatherVar === weatherVar
                  ? "semibold shadow-md opacity-70"
                  : ""
              } text-center shadow-sm text-sm border border-gray-300 rounded-lg`}
            >
              {weatherVar}
            </button>
          </div>
        );
      })}
    </div>
  );
}
