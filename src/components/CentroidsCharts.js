import React from "react";
import Plot from "react-plotly.js";
import { TitleComponent } from "./BasicComponents";

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
      <div>
        <Plot layout={{ width: 600, height: 500 }} />
      </div>

      {/* slider for years */}
      <div></div>
    </div>
  );
}
