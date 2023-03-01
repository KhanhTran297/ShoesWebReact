import { createSlice } from "@reduxjs/toolkit";
const sliderStore = createSlice({
  name: "sliders",
  initialState: {
    sliders: [],
  },
  reducers: {
    //execute saga
    getSliders: () => {},
    //set shoes state
    setSliders: (state, action) => {
      return {
        ...state,
        sliders: action.payload,
      };
    },
  },
});
//Action
export const { getSliders, setSliders } = sliderStore.actions;
//Reducer
export default sliderStore.reducer;
