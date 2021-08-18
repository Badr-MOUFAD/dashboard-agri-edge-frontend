import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";

import { useSelector, useDispatch } from "react-redux";
import { mapSlectors } from "../redux/MapSlice";
import {
  regionWeatherSelectors,
  updateData,
  errorOccured
} from "../redux/RegionWeatherSlice";

import { fetchWeatherRegion } from "../api/fetchAPI";

import { TitleComponent } from "../components/Title";
import { VarPicker } from "../components/VarPicker";
import { InputYears } from "../components/InputYear";
import { FeedbackComponent } from "../components/Feedback";

export default function (props) {
  const selectedRegion = useSelector(mapSlectors.selectedRegion);
  const weatherData = useSelector(regionWeatherSelectors.weatherData);
  const regionInfo = useSelector(regionWeatherSelectors.regionInfo);
  const isLoading = useSelector(regionWeatherSelectors.isLoading);
  const error = useSelector(regionWeatherSelectors.error);

  const dispatch = useDispatch();

  const [selectedWeatherVar, setSelectedWeatherVar] = useState("Precipitation");
  const [yearsToDisplay, setYearsToDisplay] = useState([]);
  const arrWeatherVars = ["Precipitation", "GDD", "Wind", "Humidity"];

  useEffect(() => {
    // fetch data
    if (selectedRegion.lat) {
      fetchWeatherRegion(selectedRegion.lat, selectedRegion.lon)
        .then((res) => {
          const { lat, lon, region, name, weather_data } = res.data;

          const regionInfo = { lat, lon, region, name };

          dispatch(
            updateData({
              isLoading: false,
              regionInfo: regionInfo,
              weatherData: {
                Precipitation: weather_data["cumulative_PRECTOT"],
                GDD: weather_data["cumulative_GDD"],
                Wind: weather_data["cumulative_WS2M"],
                Humidity: weather_data["cumulative_RH2M"]
              }
            })
          );
        })
        .catch((err) => {
          console.log(err);
          dispatch(errorOccured());
        });
    }
  }, [selectedRegion, dispatch]);

  return (
    <React.Fragment>
      <div className="grid-cols-12 flex items-center justify-between gap-4">
        {/* Header */}
        <div className="col-start-1 col-end-4">
          <TitleComponent
            title="Detailed weather description"
            subtitle={
              <span>
                {regionInfo.region} {regionInfo.name} <br />
                {isLoading ||
                  `Location: ${regionInfo.lat.toFixed(
                    2
                  )}, ${regionInfo.lon.toFixed(2)}`}
              </span>
            }
          />
        </div>

        <FeedbackComponent
          notSelected={!Boolean(selectedRegion.lat)}
          isLoading={isLoading}
          error={error}
        />

        <div className="col-start-3 col-end-12">
          <InputYears enteredYearsHandler={(arr) => setYearsToDisplay(arr)} />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-start-1 col-end-4">
          <VarPicker
            arrWeatherVars={arrWeatherVars}
            selectedWeatherVar={selectedWeatherVar}
            clickHandler={(newWeatherVar) =>
              setSelectedWeatherVar(newWeatherVar)
            }
          />
        </div>

        <div className="col-span-9">
          <Plot
            data={yearsToDisplay.map((year) => {
              return {
                type: "scatter",
                y: weatherData[selectedWeatherVar][year],
                marker: { color: "#3B82F6", size: 2 },
                mode: "markers+lines",
                name: year
              };
            })}
            layout={{
              width: 800,
              height: 500,
              title: `cumulative ${selectedWeatherVar}`,
              xaxis: {
                title: "days"
              }
            }}
            className={isLoading && `animate-pulse`}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
