import { call, put, takeEvery } from "@redux-saga/core/effects";
import { teamsApi } from "../../api";
import { STATUS } from "../../constants";
import { setStatus, setTeams } from "./actions";
import { ETeamsTypes, TTeamsState } from "./types";

function* fetchData() {
  try {
    yield put(setStatus(STATUS.loading));
    const data: TTeamsState["data"] = yield call(teamsApi.fetchData);
    yield put(setTeams(data));
  } catch (e) {
    yield put(setStatus(STATUS.error));
  }
}

export default function* teamsSaga() {
  yield takeEvery(ETeamsTypes.FETCH_TEAMS, fetchData);
}
