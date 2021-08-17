import React, { useEffect } from "react";
import Plot from "react-plotly.js";

import { useSelector, useDispatch } from "react-redux";
import { mapSlectors } from "../redux/MapSlice";
import { updateData, centroidsSlectors } from "../redux/CentroidsSlice";

import { fetchCentroids } from "../api/fetchAPI";

import { TitleComponent } from "../components/Title";

const colorsClusters = {
  High: "#3B82F6",
  Medium: "#34D399",
  Low: "#F87171"
};

export default function (props) {
  const dispatch = useDispatch();

  const selectedRegion = useSelector(mapSlectors.selectedRegion);
  const isLoading = useSelector(centroidsSlectors.isLoading);
  const dataCentroids = useSelector(centroidsSlectors.dataCentroids);

  const arrWeatherVariable = ["Precipitation", "GDD", "Wind", "Humidity"];

  useEffect(() => {
    // fetch data
    if (selectedRegion.lat) {
      fetchCentroids(selectedRegion.lat, selectedRegion.lon)
        .then((res, err) => {
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
          const isLoading = true;

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
    console.log(dataCentroids);
  });

  return (
    <React.Fragment>
      {/* Header */}
      <div className="grid-cols-3 flex justify-between">
        <div className="col-span-1">
          <TitleComponent
            title="Clusters centroids"
            subtitle={`${selectedRegion.lat};${selectedRegion.lon}`}
          />
        </div>
      </div>

      <div className="grid grid-cols-12">
        {arrWeatherVariable.map((weatherVariable) => {
          return (
            <div
              key={`centroids-${weatherVariable}`}
              className="col-span-6 w-full flex justify-center h-full z-40"
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
