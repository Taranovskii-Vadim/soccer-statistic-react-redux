import { Action } from "redux";
import { IState } from "../../types";

// data

export interface ITeam {
  readonly id: number; //
  address: string;
  clubColors: string;
  crestUrl: string; //
  email: string;
  founded: number | null; //
  lastUpdated: string;
  name: string; //
  phone: string | null;
  shortName: string; //
  tla: string;
  venue: string;
  website: string; //
  area: {
    //
    readonly id: number; //
    name: string; //
  };
}

// actions

export enum ETeamsTypes {
  FETCH_TEAMS = "/teams/FETCH_TEAMS",
  SET_TEAMS = "/teams/SET_TEAMS",
  SET_STATUS = "/teams/SET_STATUS",
  SEARCH_TEAMS = "/teams/SEARCH_TEAMS",
}

export interface IFetchTeams extends Action<ETeamsTypes.FETCH_TEAMS> {}

export interface ISetTeams extends Action<ETeamsTypes.SET_TEAMS> {
  payload: TTeamsState["data"];
}

export interface ISearchTeams extends Action<ETeamsTypes.SEARCH_TEAMS> {
  payload: string;
}

export interface ISetStatus extends Action<ETeamsTypes.SET_STATUS> {
  payload: TTeamsState["status"];
}

// common
export type TTeamsAction = ISetTeams | ISetStatus | ISearchTeams;

export type TTeamsState = IState<ITeam[]>;
