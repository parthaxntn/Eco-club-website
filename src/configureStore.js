import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(reducers, preloadedState, composedEnhancers);

  return store;
}
