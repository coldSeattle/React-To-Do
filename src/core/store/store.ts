import { applyMiddleware, compose, createStore, Store } from "redux";
import createsagaMiddleware, { SagaMiddleware } from "redux-saga";
import { AppState, rootReducer } from "../reducers/rootReducer";
import { rootSaga } from "../sagas/rootSaga";

const sagaMiddleware: SagaMiddleware = createsagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === `development`) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

export const store: Store<AppState> = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
