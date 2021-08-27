import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { appSelectors, changeActiveSection } from "../redux/AppSlice";
import { mapSlectors } from "../redux/MapSlice";

import { exportAsJson } from "../api/downloadAPI";

import {
  MapIcon,
  ChartIcon,
  FilledFourChartsIcon,
  DownloadIcon
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
  const selectedRegion = useSelector(mapSlectors.selectedRegion);
  const cropYears = useSelector(mapSlectors.cropYears);

  const dispatch = useDispatch();

  const [error, setError] = useState(false);

  const { arrSectionsRef } = props;

  const extractClusterRegion = (cropYears) => {
    // total number of region
    const nbRegions = 705;
    const clustersRegion = { High: [], Medium: [], Low: [] };

    for (let year in cropYears) {
      // select clusters of current crop year
      const clustersYear = cropYears[year].clusters;

      for (let clusterName in clustersYear) {
        for (let i = 0; i < nbRegions; i++) {
          const lat = clustersYear[clusterName].lat[i];
          const lon = clustersYear[clusterName].lon[i];

          if (
            Math.abs(lat - selectedRegion.lat) < 10 ** -2 &&
            Math.abs(lon - selectedRegion.lon) < 10 ** -2
          ) {
            clustersRegion[clusterName].push(year);
          }
        }
      }
    }

    return clustersRegion;
  };

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

      <div className="px-2 font-bold text-lg mb-6 mt-4">Export clusters</div>
      <div className="font-base text-sm text-gray-500 px-2 mb-2">
        Download as <span className="font-bold">.json</span> format, the
        clusters of the selected region
      </div>
      <div className="py-4 px-2">
        <div
          className="flex justify-around cursor-pointer grid-cols-2 items-center py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 opacity-70 rounded-lg"
          onClick={() => {
            if (!selectedRegion.lat) {
              setError(true);
            } else {
              const clustersRegion = extractClusterRegion(cropYears);
              const filename = `${selectedRegion.lat};${selectedRegion.lon}.json`;

              exportAsJson(clustersRegion, filename);
              setError(false);
            }
          }}
        >
          <span className="span-col-1">Export</span>{" "}
          <DownloadIcon
            size="24"
            className="span-col-1 fill-current text-white"
          />
        </div>

        {error && (
          <span className="text-xs text-red-500">Select a region!</span>
        )}
      </div>
    </div>
  );
}
