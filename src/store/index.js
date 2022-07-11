import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

// const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

// const store = createStore(rootReducer, enhancer);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga);

export default store;
