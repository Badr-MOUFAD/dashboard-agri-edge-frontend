import React, { useRef } from "react";

import { useDispatch } from "react-redux";
import { changeActiveSection } from "./redux/AppSlice";

import MapChart from "./views/MapChart";
import CentroidsClustersCharts from "./views/CentroidsClustersCharts";
import DetailsWeatherCharts from "./views/DetailsWeatherCharts";
import { Sidebar } from "./views/Sidebar";
import { FooterComponent } from "./views/Footer";

export default function App() {
  const mapSection = useRef(null);
  const centroidsSection = useRef(null);
  const regionWeatherSection = useRef(null);

  const dispatch = useDispatch();

  const arrSectionRefName = [
    { ref: mapSection, section: "Map of clusters" },
    { ref: centroidsSection, section: "Region centroids" },
    { ref: regionWeatherSection, section: "Region weather" }
  ];

  // activate tabs in side bar when scrolling
  window.addEventListener("scroll", () => {
    arrSectionRefName.forEach((item) => {
      const boundSection = item.ref.current.getBoundingClientRect();

      if (Math.abs(boundSection.top) < 10) {
        dispatch(changeActiveSection(item.section));
      }
    });
  });

  return (
    <main className="bg-gray-100 h-full w-full relative">
      <div className="grid grid-cols-12 flex items-start gap-4">
        {/* Sidebar */}
        <div className="sticky top-6 mt-6 ml-4 p-4 col-span-2 w-full shadow-lg bg-white rounded-2xl z-40">
          <Sidebar
            arrSectionsRef={[
              mapSection,
              centroidsSection,
              regionWeatherSection
            ]}
          />
        </div>

        <div className="col-span-10 flex flex-col w-full pl-0 md:p-4 md:space-y-4 mt-2">
          {/* content */}
          <section
            ref={mapSection}
            id="map"
            className="grid grid-cols-12 gap-4"
          >
            {/* map container */}
            <div className="col-span-12 p-4 w-full shadow-lg bg-white items-center h-full rounded-2xl z-40">
              <MapChart />
            </div>
          </section>

          {/* graphs centroids container*/}
          <section
            ref={centroidsSection}
            id="centroids"
            className="p-4 w-full shadow-lg bg-white h-full rounded-2xl z-40"
          >
            <CentroidsClustersCharts />
          </section>

          {/* content region details */}
          <section
            ref={regionWeatherSection}
            id="details"
            className="grid grid-cols-12 gap-4"
          >
            <div className="col-span-12 p-4 w-full shadow-lg bg-white dark:bg-gray-700 items-center h-full rounded-2xl z-40">
              <DetailsWeatherCharts />
            </div>
          </section>
        </div>
      </div>

      {/* footer */}
      <footer>
        <FooterComponent />
      </footer>
    </main>
  );
}
