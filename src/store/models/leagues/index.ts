import produce, { Draft } from "immer";
import { STATUS } from "../../constants";
import { TLeaguesState } from "./types";

const initialState: TLeaguesState = {
  data: [],
  status: STATUS.initial,
};

export const leaguesReducer = produce(
  (state: Draft<TLeaguesState>, action: any) => {},
  initialState
);
