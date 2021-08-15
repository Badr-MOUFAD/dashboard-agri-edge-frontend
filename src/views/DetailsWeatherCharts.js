import React from "react";
import Plot from "react-plotly.js";

import { TitleComponent } from "../components/Title";
import { SideBar } from "../components/Sidebar";
import { InputYears } from "../components/InputYear";

export default function (props) {
  return (
    <React.Fragment>
      <div className="grid-cols-12 flex items-center justify-between gap-4">
        {/* Header */}
        <div className="col-start-1 col-end-4">
          <TitleComponent
            title="Detailed weather description"
            subtitle="region name"
          />
        </div>

        <div className="col-start-3 col-end-12">
          <InputYears />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-start-1 col-end-4">
          <SideBar />
        </div>

        <div className="col-span-9">
          <Plot layout={{ width: 800, height: 600 }} />
        </div>
      </div>
    </React.Fragment>
  );
}
