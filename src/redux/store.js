import { configureStore } from "@reduxjs/toolkit";

import mapReducer from "./MapSlice";
import centroidsReducer from "./CentroidsSlice";
import regionWeatherReducer from "./RegionWeatherSlice";

export default configureStore({
  reducer: {
    map: mapReducer,
    centroids: centroidsReducer,
    regionWeather: regionWeatherReducer
  }
});
