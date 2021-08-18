import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { appSelectors, changeActiveSection } from "../redux/AppSlice";

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

  const styleActiveSection =
    "border-r-2 border-blue-500 bg-gradient-to-l from-blue-100";

  const activeSection = useSelector(appSelectors.activeSection);
  const dispatch = useDispatch();

  const { arrSectionsRef } = props;

  return (
    <div className="pb-4 pt-2">
      <div className="px-2 font-bold text-lg mb-6">Navigate to</div>

      {navs.map(({ Icon, text, href }, i) => {
        return (
          <div
            key={`side-bar-nav-${i}`}
            className={`flex inline items-center py-4 px-2 rounded-l-xl hover:bg-gray-50 cursor-pointer ${
              activeSection === text && styleActiveSection
            }`}
            onClick={() => {
              dispatch(changeActiveSection(text));
              arrSectionsRef[i].current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="mr-6">
              <Icon size="22" className="fill-current text-gray-500" />
            </span>
            <span className="font-base text-sm text-gray-500">{text}</span>
          </div>
        );
      })}
    </div>
  );
}
