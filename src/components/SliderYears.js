import React from "react";
import { Slider } from "@material-ui/core";

export function SliderYears(props) {
  return (
    <div className="flex items-center w-1/2 border rounded-lg shadow-sm px-8 py-1">
      <span className="text-sm font-semibold">Crop years</span>
      <span className="mr-1 cursor-pointer rounded-full focus:ring-4 ring-opacity-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="fill-current text-blue-600"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
        </svg>
      </span>

      <span className="mr-8 cursor-pointer rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="fill-current text-blue-600"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z" />
        </svg>
      </span>

      <Slider
        style={{ color: "#2563EB" }}
        defaultValue={1982}
        step={1}
        marks
        min={1982}
        max={2020}
        valueLabelDisplay="auto"
      />
    </div>
  );
}

export function LeftButton(props) {
  return (
    <button
      type="button"
      class="w-full p-2 border text-sm rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
    >
      <svg
        width="9"
        fill="currentColor"
        height="8"
        class=""
        viewBox="0 0 1792 1792"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
      </svg>
    </button>
  );
}

export function RightButton(props) {
  return (
    <button
      type="button"
      class="w-full p-2 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
    >
      <svg
        width="9"
        fill="currentColor"
        height="8"
        class=""
        viewBox="0 0 1792 1792"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
      </svg>
    </button>
  );
}

export function NumberButton(props) {
  const { number } = props;

  return (
    <button
      type="button"
      style={{ display: "flex", height: "5px" }}
      className="w-full border-l-8 border-r-8 text-center font-semibold text-xs text-gray-600 bg-white hover:bg-gray-100"
    >
      {}
    </button>
  );
}
