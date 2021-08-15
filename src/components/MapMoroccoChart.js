import React from "react";
import Plot from "react-plotly.js";
import {
  TitleComponent,
  ToggleComponent,
  SliderYears
} from "./BasicComponents";

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
      <div className="flex justify-center">
        <Plot layout={{ height: 450 }} />
      </div>

      {/* slider for years */}
      <div className="flex justify-center">
        <SliderYears />
      </div>
    </div>
  );
}
