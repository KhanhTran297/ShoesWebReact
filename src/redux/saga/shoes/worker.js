import { put, call } from "@redux-saga/core/effects";
import { getColorAPI, getShoesAPI } from "../../../api/shoes";
import { setShoes } from "../../slice/shoes";
import { getSliders, setSliders } from "../../slice/slider";

//get slider
export function* getShoesWorker() {
  try {
    const response = yield call(getShoesAPI);
    const data = yield response.data;
    //after having data set
    yield put(setShoes(data));
  } catch (error) {
    throw error;
  }
}
// export function* getImgWorker(){
//   try{

//   }
// }
export function* getShoesColorWorker(action) {
  try {
    const response = yield call(getColorAPI, action.payload);
    const data = response.data;
    yield put(setShoes(data));
  } catch (error) {
    throw error;
  }
}
