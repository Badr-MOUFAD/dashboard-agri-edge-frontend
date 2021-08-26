import React, { useEffect } from "react";
import Plot from "react-plotly.js";

import { useSelector, useDispatch } from "react-redux";
import {
  changeTypeClustering,
  updateCropYear,
  updateCurrentLoadingYear,
  changeSelectedRegion,
  errorOccured
} from "../redux/MapSlice";
import { mapSlectors } from "../redux/MapSlice";
import { resetData } from "../redux/CentroidsSlice";

import { fetchRegionsMulti, fetchRegionsUni } from "../api/fetchAPI";

import { TitleComponent } from "../components/Title";
import { ToggleComponent } from "../components/Toggle";
import { SliderYears } from "../components/SliderYears";
import { FeedbackComponent } from "../components/Feedback";

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
  const isLoading = useSelector(mapSlectors.cropYears)[currentDisplayedCropYear]
    .isLoading;

  const error = useSelector(mapSlectors.cropYears)[currentDisplayedCropYear]
    .error;

  const selectedRegion = useSelector(mapSlectors.selectedRegion);

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
          dispatch(errorOccured({ year: currentLoadingYear }));
        });
    }
  }, [typeClustering, currentLoadingYear, dispatch]);

  // data to plot
  // clusters
  const data = ["High", "Medium", "Low"].map((clusterName) => {
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
  });
  // selected region
  data.push({
    type: "scattergeo",
    lat: [selectedRegion.lat],
    lon: [selectedRegion.lon],
    name: "Selected region",
    marker: {
      color: "#18181B",
      size: 8
    },
    showlegend: false
  });

  return (
    <div>
      {/* Header */}
      <div className="grid-cols-3 flex justify-between">
        <div className="col-span-1">
          <TitleComponent
            title="Map of the Moroccan regions"
            subtitle={
              <span>
                Cluster according to <b>{typeClustering}</b>
              </span>
            }
          />
        </div>

        <FeedbackComponent error={error} isLoading={isLoading} />

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
          className={`animate-${isLoading ? "pulse" : "none"}`}
          data={data}
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
          onClick={({ points }) => {
            // get lat and lon of selected regions
            const { lat, lon } = points[0];

            dispatch(changeSelectedRegion({ lat, lon }));
            dispatch(resetData());
          }}
        />
      </div>

      {/* slider for years */}
      <div className="flex justify-center">
        <SliderYears isLoading={isLoading} />
      </div>
    </div>
  );
}
