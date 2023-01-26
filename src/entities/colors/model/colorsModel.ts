import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

type Points = {
  success: number;
  error: number;
};

const initialState: Points = {
  success: 0,
  error: 0,
};

const colorsModel = createSlice({
  name: "colors",
  initialState,
  reducers: {
    incrementSuccess: (state) => {
      state.success += 1;
    },
    incrementError: (state) => {
      state.error += 1;
    },
  },
});

export const pointsSelector = (state: RootState) => state.points;

export const { incrementError, incrementSuccess } = colorsModel.actions;
export const colorsReducer = colorsModel.reducer;
