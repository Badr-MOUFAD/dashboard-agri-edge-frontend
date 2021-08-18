import React, { useState } from "react";

import { ErrorIcon } from "../icons/CoreIcons";

export function InputYears(props) {
  const [yearsSeperatedComma, setYearsSeperatedComma] = useState("");
  const [error, setError] = useState(false);
  const { enteredYearsHandler } = props;

  return (
    <div class="flex relative w-96">
      <span class="rounded-l-md inline-flex items-center px-3 border-t bg-gray-100 border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
        Years to include
      </span>
      <input
        type="text"
        id="input-years"
        className="rounded-r-full flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-grey-600 focus:border-transparent"
        placeholder="Enter years separated by ,"
        value={yearsSeperatedComma}
        onChange={({ target }) => setYearsSeperatedComma(target.value)}
        onBlur={() => {
          let arrYears = yearsSeperatedComma.split(",");

          arrYears = arrYears.map((s) => {
            let parsedValue = Number.isInteger(s);

            if (parsedValue && 1982 <= parsedValue <= 2020) {
              return parsedValue;
            } else {
              setError(true);
              return NaN;
            }
          });

          if (!arrYears.includes(NaN)) {
            //enteredYearsHandler(arrYears);
            setError(false);
          }
        }}
      />

      <ErrorComponent error={error} />
    </div>
  );
}

export function ErrorComponent(props) {
  const { error } = props;
  if (true)
    return (
      <React.Fragment>
        <ErrorComponent size={16} color="red-500" />
        <p className="absolute text-sm text-red-500 -bottom-6">
          Email is invalid
        </p>
      </React.Fragment>
    );
  else return <div></div>;
}
