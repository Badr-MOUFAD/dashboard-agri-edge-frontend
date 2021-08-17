import React, { useEffect } from "react";
import Plot from "react-plotly.js";

import { useSelector, useDispatch } from "react-redux";
import {
  changeTypeClustering,
  updateCropYear,
  updateCurrentLoadingYear
} from "../redux/MapSlice";
import { mapSlectors } from "../redux/MapSlice";

import { fetchRegionsMulti, fetchRegionsUni } from "../api/fetchAPI";

import { TitleComponent } from "../components/Title";
import { ToggleComponent } from "../components/Toggle";
import { SliderYears } from "../components/SliderYears";

const colorsClusters = {
  High: "#3B82F6",
  Medium: "#34D399",
  Low: "#F87171"
};

export default function (props) {
  // redux
  const dispatch = useDispatch();
  const typeClustering = useSelector(mapSlectors.typeClustering);
  const currentLoadingYear = useSelector(mapSlectors.currentLoadingYear);
  const currentDisplayedCropYear = useSelector(
    mapSlectors.currentDisplayedCropYear
  );
  const cropYearData = useSelector(mapSlectors.cropYears)[
    currentDisplayedCropYear
  ]["clusters"];

  useEffect(() => {
    // set method of fetch depending on selected mode
    const fetchMethod =
      typeClustering === "All weather variables"
        ? fetchRegionsMulti
        : fetchRegionsUni;

    if (currentLoadingYear <= 2020) {
      fetchMethod(currentLoadingYear)
        .then((res) => {
          const clusters = res.data;

          // save data
          dispatch(
            updateCropYear({
              year: currentLoadingYear,
              isLoading: false,
              clusters: clusters
            })
          );
        })
        .then(() => {
          // fetch next year
          dispatch(updateCurrentLoadingYear(currentLoadingYear + 1));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [typeClustering, currentLoadingYear, dispatch]);

  return (
    <div>
      {/* Header */}
      <div className="grid-cols-3 flex justify-between">
        <div className="col-span-1">
          <TitleComponent
            title="Morocco Map"
            subtitle={`Cluster by region ${typeClustering}`}
          />
        </div>

        <div className="col-span-2">
          <ToggleComponent
            changeTypeClusteringHandler={(typeClustering) => {
              dispatch(changeTypeClustering(typeClustering));
              // reset loading year
              dispatch(updateCurrentLoadingYear(1982));
            }}
          />
        </div>
      </div>

      {/* chart */}
      <div className="flex justify-center">
        <Plot
          data={["High", "Medium", "Low"].map((clusterName) => {
            return {
              type: "scattergeo",
              lat: cropYearData[clusterName]["lat"],
              lon: cropYearData[clusterName]["lon"],
              hovertext: cropYearData[clusterName]["name"],
              name: clusterName,
              marker: {
                color: colorsClusters[clusterName]
              }
            };
          })}
          layout={{
            height: 450,
            title: `Corresponding cluster of regions (${currentDisplayedCropYear})`,
            geo: {
              center: { lat: 28.5, lon: -8.0926 },
              projection: {
                scale: 12
              }
            }
          }}
        />
      </div>

      {/* slider for years */}
      <div className="flex justify-center">
        <SliderYears />
      </div>
    </div>
  );
}
