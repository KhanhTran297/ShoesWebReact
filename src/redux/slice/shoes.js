import { createSlice } from "@reduxjs/toolkit";
const shoesStore = createSlice({
  name: "shoes",
  initialState: {
    shoes: [],
  },
  reducers: {
    //execute saga
    getShoes: () => {},
    getShoesColor: () => {},
    //change state
    setShoes: (state, action) => {
      return {
        ...state,
        shoes: action.payload,
      };
    },
  },
});
//Action
export const { getShoes, setShoes, getShoesColor } = shoesStore.actions;
//Reducer
export default shoesStore.reducer;
