import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootsaga from "./saga/rootsaga";
import shoesReducer from "./slice/shoes";
import sliderReducer from "./slice/slider";
//create sagaMiddleWare
const sagaMiddleWare = createSagaMiddleware();
//createStore
const store = configureStore({
  reducer: {
    shoes: shoesReducer,
    sliders: sliderReducer,
  },
  middleware: (gDM) => gDM().concat(sagaMiddleWare),
});

//run saga
sagaMiddleWare.run(rootsaga);
export default store;
