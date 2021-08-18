import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  regionInfo: {
    lat: "", // 31.39102828115297;-5.17179828879979
    lon: "", // 3
    region: "",
    name: ""
  },
  dataWeather: {
    Precipitation: {}, // { 1982: [], ...}
    GDD: {},
    Wind: {},
    Humidity: {}
  }
};

export const regionWeatherSlice = createSlice({
  name: "regionWeather",
  initialState: initialState,
  reducers: {
    updateData: (state, action) => {
      const { isLoading, regionInfo, dataWeather } = action.payload;

      // infos
      state.isLoading = isLoading;
      state.regionInfo = regionInfo;

      // data
      state.dataWeather = dataWeather;
    },
    resetData: (state, action) => {
      state = initialState;
    }
  }
});

export const regionWeatherSlectors = {
  isLoading: (state) => state.regionWeather.isLoading,
  regionInfo: (state) => state.regionWeather.regionInfo,
  dataCentroids: (state) => state.regionWeather.dataWeather
};

export const { updateData, resetData } = regionWeatherSlice.actions;

export default regionWeatherSlice.reducer;
