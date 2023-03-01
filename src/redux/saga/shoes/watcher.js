import { takeLatest } from "redux-saga/effects";
import { getShoes, getShoesColor } from "../../slice/shoes";
import { getShoesColorWorker, getShoesWorker } from "./worker";

export default function* shoesWatcher() {
  yield takeLatest(getShoes.type, getShoesWorker);
  yield takeLatest(getShoesColor.type, getShoesColorWorker);
}
