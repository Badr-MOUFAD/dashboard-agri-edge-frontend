import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cropYears: generateCropYearObject(),
  typeClustering: "Multi Clustering",
  currentLoadingYear: "1982"
};

export const mapSlice = createSlice({
  name: "map",
  initialState: initialState,
  reducers: {
    updateCropYear: (state, action) => {
      const { year, clusters } = action.payload;

      state.cropYears[year] = clusters;
    },
    updateCurrentLoadingYear: (state, action) => {
      state.currentLoadingYear = action.payload;
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
  currentLoadingYear: (state) => state.map.updateCurrentLoadingYear
};

export const {
  updateCropYear,
  changeTypeClustering,
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
