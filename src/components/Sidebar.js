import React from "react";

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
