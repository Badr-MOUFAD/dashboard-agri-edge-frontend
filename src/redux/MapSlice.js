import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cropYears: generateCropYearObject(),
  typeClustering: "All weather variables",
  currentDisplayedCropYear: 1982,
  currentLoadingYear: 1982,
  selectedRegion: { lat: null, lon: null } // as str of the form lat;lon
};

export const mapSlice = createSlice({
  name: "map",
  initialState: initialState,
  reducers: {
    updateCropYear: (state, action) => {
      const { year, isLoading, clusters } = action.payload;
      const error = false;

      state.cropYears[year] = { isLoading, error, clusters };
    },
    errorOccured: (state, action) => {
      const { year } = action.payload;

      state.cropYears[year].error = true;
    },
    updateCurrentLoadingYear: (state, action) => {
      state.currentLoadingYear = action.payload;
    },
    changeCurrentDisplayedCropYear: (state, action) => {
      state.currentDisplayedCropYear = action.payload;
    },
    changeTypeClustering: (state, action) => {
      state.typeClustering = action.payload;
      state.cropYears = generateCropYearObject();
    },
    changeSelectedRegion: (state, action) => {
      state.selectedRegion = action.payload;
    }
  }
});

export const mapSlectors = {
  cropYears: (state) => state.map.cropYears,
  typeClustering: (state) => state.map.typeClustering,
  currentDisplayedCropYear: (state) => state.map.currentDisplayedCropYear,
  currentLoadingYear: (state) => state.map.currentLoadingYear,
  selectedRegion: (state) => state.map.selectedRegion
};

export const {
  updateCropYear,
  changeTypeClustering,
  changeCurrentDisplayedCropYear,
  updateCurrentLoadingYear,
  changeSelectedRegion,
  errorOccured
} = mapSlice.actions;

export default mapSlice.reducer;

// func
function generateCropYearObject() {
  const cropYears = {};

  for (let year of [...Array(39).keys()].map((i) => i + 1982)) {
    cropYears[year] = {
      isLoading: true,
      clusters: {
        High: { lat: [], lon: [], regions: [], names: [] },
        Medium: { lat: [], lon: [], regions: [], names: [] },
        Low: { lat: [], lon: [], regions: [], names: [] }
      }
    };
  }

  return cropYears;
}
