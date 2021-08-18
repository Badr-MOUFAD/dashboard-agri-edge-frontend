import React from "react";

export function TitleComponent(props) {
  const { title, subtitle } = props;

  return (
    <div className="flex flex-col">
      <span className="font-bold text-md text-black ml-2">{title}</span>
      <span className="text-sm text-gray-500 ml-2">{subtitle}</span>
    </div>
  );
}
