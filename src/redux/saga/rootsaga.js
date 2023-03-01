import { all, fork } from "redux-saga/effects";
import shoesWatcher from "./shoes/watcher";
import slidersWatcher from "./sliders/watcher";
export default function* rootsaga() {
  yield all([fork(slidersWatcher)]);
  yield all([fork(shoesWatcher)]);
}
