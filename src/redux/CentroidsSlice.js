import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  regionInfo: {
    lat: "", // 31.39102828115297;-5.17179828879979
    lon: "", // 3
    region: "",
    name: ""
  },
  dataCentroids: {
    Precipitation: {}, // {High , Medium, and Low clusters}
    GDD: {},
    Wind: {},
    Humidity: {}
  }
};

export const centroidsSlice = createSlice({
  name: "centroids",
  initialState: initialState,
  reducers: {
    updateData: (state, action) => {
      const { isLoading, regionInfo, dataCentroids } = action.payload;

      // infos
      state.isLoading = isLoading;
      state.regionInfo = regionInfo;

      // data
      state.dataCentroids = dataCentroids;
    },
    resetData: (state, action) => {
      state = initialState;
    }
  }
});

export const centroidsSlectors = {
  isLoading: (state) => state.centroids.isLoading,
  regionInfo: (state) => state.centroids.regionInfo,
  dataCentroids: (state) => state.centroids.dataCentroids
};

export const { updateData, resetData } = centroidsSlice.actions;

export default centroidsSlice.reducer;
