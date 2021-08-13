import React from "react";
import Plot from "react-plotly.js";
import { TitleComponent, ToggleComponent } from "./BasicComponents";

export default function (props) {
  return (
    <div>
      {/* Header */}
      <div className="grid-cols-3 flex justify-between">
        <div className="col-span-1">
          <TitleComponent title="Morocco Map" subtitle="Cluster by region" />
        </div>

        <div className="col-span-2">
          <ToggleComponent text="Precipitation" />
        </div>
      </div>

      {/* chart */}
      <div>
        <Plot layout={{ width: 600, height: 500 }} />
      </div>

      {/* slider for years */}
    </div>
  );
}
