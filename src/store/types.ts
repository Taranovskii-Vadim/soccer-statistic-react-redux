import { STATUS } from "./constants";
import { TLeaguesState } from "./models/leagues/types";
import { TTeamsState } from "./models/teams/types";

export type TStatus = keyof typeof STATUS;

export interface IRootState {
  leagues: TLeaguesState;
  teams: TTeamsState;
}

export interface IState<T> {
  data: T;
  status: TStatus;
}
