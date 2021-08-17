import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cropYears: generateCropYearObject(),
  typeClustering: "All weather variables",
  currentDisplayedCropYear: 1982,
  currentLoadingYear: 1982
};

export const mapSlice = createSlice({
  name: "map",
  initialState: initialState,
  reducers: {
    updateCropYear: (state, action) => {
      const { year, isLoading, clusters } = action.payload;

      state.cropYears[year] = { isLoading, clusters };
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
    }
  }
});

export const mapSlectors = {
  cropYears: (state) => state.map.cropYears,
  typeClustering: (state) => state.map.typeClustering,
  currentDisplayedCropYear: (state) => state.map.currentDisplayedCropYear,
  currentLoadingYear: (state) => state.map.currentLoadingYear
};

export const {
  updateCropYear,
  changeTypeClustering,
  changeCurrentDisplayedCropYear,
  updateCurrentLoadingYear
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
