import { STATUS } from "./constants";
import { TLeaguesState } from "./models/leagues/types";

export type TStatus = keyof typeof STATUS;

export interface IRootState {
  leagues: TLeaguesState;
}

export interface IState<T> {
  data: T;
  status: TStatus;
}
