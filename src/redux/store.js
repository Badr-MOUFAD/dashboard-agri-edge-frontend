import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./AppSlice";
import mapReducer from "./MapSlice";
import centroidsReducer from "./CentroidsSlice";
import regionWeatherReducer from "./RegionWeatherSlice";

export default configureStore({
  reducer: {
    app: appReducer,
    map: mapReducer,
    centroids: centroidsReducer,
    regionWeather: regionWeatherReducer
  }
});
