import React, { useState } from "react";

export function TitleComponent(props) {
  const { title, subtitle } = props;

  return (
    <div className="flex flex-col">
      <span className="font-bold text-md text-black dark:text-white ml-2">
        {title}
      </span>
      <span className="text-sm text-gray-500 ml-2">{subtitle}</span>
    </div>
  );
}

export function ToggleComponent(props) {
  const { text } = props;

  return (
    <button
      type="button"
      class="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 opacity-70 rounded-full "
    >
      {text}
    </button>
  );
}

export function SideBar(props) {
  const arrayWeatherVars = [...Array(4).keys()].map(
    (i) => `Weather variable ${i}`
  );

  return (
    <div class="flex flex-col mt-4">
      {arrayWeatherVars.map((item, i) => {
        return (
          <div key={`side-bar-${i}`}>
            <button
              type="button"
              className="mb-2 py-2 px-4 bg-grey-50 w-full text-gray-500 hover:bg-gray-100 text-center font-semibold text-sm border-2 rounded-full"
            >
              {item}
            </button>
          </div>
        );
      })}

      <div>
        <button
          type="button"
          className="mb-2 py-2 px-4 bg-blue-600 w-full text-white text-center font-semibold text-sm rounded-full opacity-70 shadow-md"
        >
          Weather variable
        </button>
      </div>
    </div>
  );
}

export function InputYears(props) {
  return (
    <div class="flex relative w-96">
      <span class="rounded-l-md inline-flex items-center px-3 border-t bg-gray-100 border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
        Years to include
      </span>
      <input
        type="text"
        id="with-email"
        className="rounded-r-full flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-grey-600 focus:border-transparent"
        name="url"
        placeholder="Enter years separated by ,"
      />
    </div>
  );
}
