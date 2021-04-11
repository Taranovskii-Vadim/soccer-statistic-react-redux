import createSagaMiddleWare from "redux-saga";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { all } from "redux-saga/effects";
import { IRootState } from "./types";

// Reducers
import { leaguesReducer } from "./models/leagues";
import { teamsReducer } from "./models/teams";

// Saga
import leaguesSaga from "./models/leagues/saga";
import teamsSaga from "./models/teams/saga";

const rootReducer = combineReducers<IRootState>({
  leagues: leaguesReducer,
  teams: teamsReducer,
});

function* rootSaga() {
  yield all([leaguesSaga(), teamsSaga()]);
}

const sagaMiddleWare = createSagaMiddleWare();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);
