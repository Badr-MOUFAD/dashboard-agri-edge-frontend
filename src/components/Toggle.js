import React from "react";

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
