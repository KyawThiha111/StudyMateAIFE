// overallProgressSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OverallProgressState {
  computerScience: number; // percentage like 75
}

const initialState: OverallProgressState = {
  computerScience: 0,
};

const overallProgressSlice = createSlice({
  name: "csoverallprogress",
  initialState,
  reducers: {
    setComputerScienceProgress: (state, action: PayloadAction<number>) => {
      state.computerScience = action.payload;
    },
  },
});

export const { setComputerScienceProgress } = overallProgressSlice.actions;
export default overallProgressSlice.reducer;
