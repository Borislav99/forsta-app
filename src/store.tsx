// imports
import { configureStore } from "@reduxjs/toolkit";
// slices
import tasksReducer from "./features/tasks/tasksSlice";
// store settings
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
