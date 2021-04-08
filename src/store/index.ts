import createSagaMiddleWare from "redux-saga";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { all } from "redux-saga/effects";
import { IRootState } from "./types";

// Reducers
import { leaguesReducer } from "./models/leagues";

// Saga
import leaguesSaga from "./models/leagues/saga";

const rootReducer = combineReducers<IRootState>({ leagues: leaguesReducer });

function* rootSaga() {
  yield all([leaguesSaga()]);
}

const sagaMiddleWare = createSagaMiddleWare();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);
