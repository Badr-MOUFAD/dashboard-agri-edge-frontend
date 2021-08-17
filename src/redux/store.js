import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "./MapSlice";

export default configureStore({
  reducer: {
    map: mapReducer
  }
});
