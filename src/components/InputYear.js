import React from "react";

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
