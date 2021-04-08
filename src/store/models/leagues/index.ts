import produce, { Draft } from "immer";

import { STATUS } from "../../constants";

import { ELeagueTypes, TLeaguesAction, TLeaguesState } from "./types";

const initialState: TLeaguesState = {
  data: [],
  status: STATUS.initial,
};

export const leaguesReducer = produce(
  (draft: Draft<TLeaguesState>, action: TLeaguesAction) => {
    if (action.type === ELeagueTypes.SET_LEAGUES) {
      draft.data = action.payload;
      draft.status = STATUS.initial;
    } else if (action.type === ELeagueTypes.SET_STATUS) {
      draft.status = action.payload;
    }
  },
  initialState
);
