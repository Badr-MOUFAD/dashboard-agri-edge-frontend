import React, { useEffect } from "react";
import Plot from "react-plotly.js";

import { useSelector, useDispatch } from "react-redux";
import { mapSlectors } from "../redux/MapSlice";
import { updateData, centroidsSlectors } from "../redux/CentroidsSlice";

import { fetchCentroids } from "../api/fetchAPI";

import { TitleComponent } from "../components/Title";
import { SpinIcon } from "../icons/CoreIcons";

const colorsClusters = {
  High: "#3B82F6",
  Medium: "#34D399",
  Low: "#F87171"
};

export default function (props) {
  const dispatch = useDispatch();

  const selectedRegion = useSelector(mapSlectors.selectedRegion);
  const isFetching = useSelector(centroidsSlectors.isLoading);
  const dataCentroids = useSelector(centroidsSlectors.dataCentroids);
  const regionInfo = useSelector(centroidsSlectors.regionInfo);

  const arrWeatherVariable = ["Precipitation", "GDD", "Wind", "Humidity"];

  useEffect(() => {
    // fetch data
    if (selectedRegion.lat) {
      fetchCentroids(selectedRegion.lat, selectedRegion.lon)
        .then((res) => {
          // explode data
          const {
            lat,
            lon,
            region,
            name,
            cumulative_PRECTOT,
            cumulative_GDD,
            cumulative_WS2M,
            cumulative_RH2M
          } = res.data;

          const regionInfo = { lat, lon, region, name };
          const dataCentroids = {
            Precipitation: cumulative_PRECTOT,
            GDD: cumulative_GDD,
            Wind: cumulative_WS2M,
            Humidity: cumulative_RH2M
          };
          const isLoading = false;

          // dispatch new data to store
          dispatch(
            updateData({
              isLoading,
              regionInfo,
              dataCentroids
            })
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selectedRegion, dispatch]);

  useEffect(() => {
    console.log(isFetching);
  });

  return (
    <React.Fragment>
      {/* Header */}
      <div className="grid-cols-3 flex">
        <div className="col-span-1">
          <TitleComponent
            title={`Clusters centroids of the selected Region`}
            subtitle={
              <span>
                {regionInfo.region} {regionInfo.name} <br />
                {isFetching ||
                  `Location: ${regionInfo.lat.toFixed(
                    2
                  )}, ${regionInfo.lon.toFixed(2)}`}
              </span>
            }
          />
        </div>
        <div className="col-span-1 ml-8">
          {" "}
          {isFetching && (
            <span className="ml-8 flex">
              <SpinIcon className="animate-spin fill-current text-black-600" />{" "}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-12">
        {arrWeatherVariable.map((weatherVariable, i) => {
          return (
            <div
              key={`centroids-${weatherVariable}`}
              className={`col-span-6 w-full flex justify-center h-full z-40 ${
                i === 0 && "border-r border-b"
              } ${i === 3 && "border-l border-t"}`}
            >
              <Plot
                data={["High", "Medium", "Low"].map((clusterName) => {
                  return {
                    type: "scatter",
                    y: dataCentroids[weatherVariable][clusterName],
                    marker: { color: colorsClusters[clusterName], size: 2 },
                    mode: "markers+lines",
                    name: clusterName
                  };
                })}
                layout={{ width: 400, height: 270, title: weatherVariable }}
                className={isFetching && `animate-pulse`}
              />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export function ClusterCentroiChart(props) {
  const { weatherVariable } = props;

  return <Plot layout={{ width: 400, height: 300, title: weatherVariable }} />;
}
