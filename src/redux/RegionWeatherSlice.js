import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: false,
  isLoading: true,
  regionInfo: {
    lat: "", // 31.39102828115297;-5.17179828879979
    lon: "", // 3
    region: "",
    name: ""
  },
  weatherData: {
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
      const { isLoading, regionInfo, weatherData } = action.payload;

      // infos
      state.isLoading = isLoading;
      state.regionInfo = regionInfo;

      // data
      state.weatherData = weatherData;

      // error
      state.error = false;
    },
    resetData: (state, action) => {
      state.isLoading = true;
      state.error = false;
    },
    errorOccured: (state, action) => {
      state.error = true;
    }
  }
});

export const regionWeatherSelectors = {
  isLoading: (state) => state.regionWeather.isLoading,
  error: (state) => state.regionWeather.error,
  regionInfo: (state) => state.regionWeather.regionInfo,
  weatherData: (state) => state.regionWeather.weatherData
};

export const {
  updateData,
  resetData,
  errorOccured
} = regionWeatherSlice.actions;

export default regionWeatherSlice.reducer;
