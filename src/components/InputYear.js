import React, { useState } from "react";

import { ErrorIcon } from "../icons/CoreIcons";

export function InputYears(props) {
  const [yearsSeperatedComma, setYearsSeperatedComma] = useState("");
  const [error, setError] = useState(false);
  const { enteredYearsHandler } = props;

  return (
    <div className="flex relative w-96 overflow-visible z-40">
      <span className="rounded-l-md inline-flex items-center px-3 border-t bg-gray-100 border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
        Years to include
      </span>
      <input
        type="text"
        id="input-years"
        className={`rounded-r-full flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-grey-600 focus:border-transparent ${
          error && "ring-red-500 ring-2"
        }`} //
        placeholder="Enter years separated by ,"
        value={yearsSeperatedComma}
        onChange={({ target }) => setYearsSeperatedComma(target.value)}
        onBlur={() => {
          // split and remove empty stings
          let arrYears = yearsSeperatedComma.split(",").filter((s) => s);

          arrYears = arrYears.map((s) => {
            let parsedValue = Number(s);
            parsedValue = Number.isInteger(parsedValue) ? parsedValue : false;

            if (parsedValue && 1982 <= parsedValue && parsedValue <= 2020) {
              return parsedValue;
            } else {
              setError(true);
              return NaN;
            }
          });

          if (!arrYears.includes(NaN)) {
            enteredYearsHandler(arrYears);
            setError(false);
          }
        }}
      />

      {error && (
        <p className="flex absolute text-xs -bottom-4 text-red-500">
          Enter years between 1982 - 2020 separted by comma
        </p>
      )}
    </div>
  );
}
