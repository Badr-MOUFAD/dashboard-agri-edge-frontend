import React from "react";

import {
  MapIcon,
  ChartIcon,
  FilledFourChartsIcon,
  FourChartsIcon
} from "../icons/CoreIcons";

export function Sidebar(props) {
  const navs = [
    {
      Icon: (props) => <MapIcon {...props} />,
      text: "Map of clusters",
      href: "#map"
    },
    {
      Icon: (props) => <FilledFourChartsIcon {...props} />,
      text: "Region centroids",
      href: "#centroids"
    },
    {
      Icon: (props) => <ChartIcon {...props} />,
      text: "Region weather",
      href: "#details"
    }
  ];
  return (
    <div className="pb-4 pt-2">
      <div className="px-2 font-bold text-lg mb-6">Navigate to</div>

      {navs.map(({ Icon, text, href }, i) => {
        return (
          <a
            href={href}
            key={`side-bar-nav-${i}`}
            className="flex inline items-center py-4 px-2 rounded-xl hover:bg-gray-50 cursor-pointer"
          >
            <span className="mr-6">
              <Icon size="22" className="fill-current text-gray-500" />
            </span>
            <span className="font-base text-sm text-gray-500">{text}</span>
          </a>
        );
      })}
    </div>
  );
}
