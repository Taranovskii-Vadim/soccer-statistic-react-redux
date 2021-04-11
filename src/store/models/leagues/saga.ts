import { call, delay, put, takeEvery } from "@redux-saga/core/effects";

import { STATUS } from "../../constants";
import { leaguesApi } from "../../api";

import { setLeagues, setStatus } from "./actions";
import { ELeagueTypes, TLeaguesState } from "./types";

function* fetchData() {
  try {
    yield put(setStatus(STATUS.loading));
    const data: TLeaguesState["data"] = yield call(leaguesApi.fetchData);
    yield put(setLeagues(data));
  } catch (e) {
    yield put(setStatus(STATUS.error));
  }
}

export default function* leaguesSaga() {
  yield takeEvery(ELeagueTypes.FETCH_LEAGUES, fetchData);
}
