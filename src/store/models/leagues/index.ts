import produce, { Draft } from "immer";

import { STATUS } from "../../constants";

import { ELeagueTypes, TLeaguesAction, TLeaguesState } from "./types";

const initialState: TLeaguesState = {
  data: [],
  status: STATUS.initial,
};

let globalData: TLeaguesState["data"] = [];

export const leaguesReducer = produce(
  (draft: Draft<TLeaguesState>, action: TLeaguesAction) => {
    if (action.type === ELeagueTypes.SET_LEAGUES) {
      draft.data = globalData = action.payload;
      draft.status = STATUS.initial;
    } else if (action.type === ELeagueTypes.SEARCH_LEAGUES) {
      draft.data = globalData.filter(item =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    } else if (action.type === ELeagueTypes.SET_STATUS) {
      draft.status = action.payload;
    }
  },
  initialState
);
