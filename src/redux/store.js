import { configureStore } from "@reduxjs/toolkit";

import mapReducer from "./MapSlice";
import centroidsReducer from "./CentroidsSlice";

export default configureStore({
  reducer: {
    map: mapReducer,
    centroids: centroidsReducer
  }
});
