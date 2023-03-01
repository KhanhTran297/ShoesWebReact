import { put, call } from "@redux-saga/core/effects";
import { getSliderApi } from "../../../api/sliders";
import { getSliders, setSliders } from "../../slice/slider";

//get slider
export function* getSlidersWorker() {
  try {
    const response = yield getSliderApi();
    const data = yield response.data;
    //after having data set
    yield put(setSliders(data));
  } catch (error) {
    throw error;
  }
}
