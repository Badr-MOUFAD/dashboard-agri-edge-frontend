import React from "react";
import Plot from "react-plotly.js";
import { TitleComponent } from "../components/Title";

export default function (props) {
  return (
    <div>
      {/* Header */}
      <div className="grid-cols-3 flex justify-between">
        <div className="col-span-1">
          <TitleComponent title="Clusters centroids" subtitle="Regions name" />
        </div>
      </div>

      {/* chart */}
      <div className="flex justify-center">
        <Plot layout={{ width: 400, height: 300 }} />
      </div>
    </div>
  );
}
