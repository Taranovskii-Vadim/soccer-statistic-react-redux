import produce, { Draft } from "immer";
import { STATUS } from "../../constants";
import { ETeamsTypes, TTeamsAction, TTeamsState } from "./types";

const initialState: TTeamsState = {
  data: [],
  status: STATUS.initial,
};

export const teamsReducer = produce(
  (draft: Draft<TTeamsState>, action: TTeamsAction) => {
    if (action.type === ETeamsTypes.SET_TEAMS) {
      draft.data = action.payload;
      draft.status = STATUS.initial;
    } else if (action.type === ETeamsTypes.SET_STATUS) {
      draft.status = action.payload;
    }
  },
  initialState
);
