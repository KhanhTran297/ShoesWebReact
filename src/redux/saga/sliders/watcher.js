import { takeLatest } from "redux-saga/effects";
import { getSliders } from "../../slice/slider";
import { getSlidersWorker } from "./worker";

export default function* slidersWatcher() {
  yield takeLatest(getSliders.type, getSlidersWorker);
}
