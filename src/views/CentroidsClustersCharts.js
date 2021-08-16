import React from "react";
import Plot from "react-plotly.js";
import { TitleComponent } from "../components/Title";

export default function (props) {
  const arrWeatherVariable = [
    "Precipitation",
    "Temperature",
    "Wind",
    "humidity"
  ];

  return (
    <React.Fragment>
      {/* Header */}
      <div className="grid-cols-3 flex justify-between">
        <div className="col-span-1">
          <TitleComponent title="Clusters centroids" subtitle="Regions name" />
        </div>
      </div>

      <div className="grid grid-cols-12">
        {arrWeatherVariable.map((weatherVar) => {
          return (
            <div
              key={`centroids-${weatherVar}`}
              className="col-span-6 w-full flex justify-center h-full z-40"
            >
              <ClusterCentroiChart weatherVariable={weatherVar} />
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
