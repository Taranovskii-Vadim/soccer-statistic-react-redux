import { Action } from "redux";
import { IState } from "../../types";

// Data
// TODO: refactor types

// TODO id записи лиги пуш как query параметр через роутинг

interface IArea {
  name: string;
  ensignUrl: string | null;
  countryCode: string;
}

interface ICurrentSeason {
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner: boolean | null;
}

export interface ILeague {
  readonly id: number;
  name: string;
  code: string | null;
  emblemUrl: null;
  plan: string;
  numberOfAvailableSeasons: number;
  area: IArea;
  currentSeason: ICurrentSeason | null;
}

// Actions

export enum ELeagueTypes {
  FETCH_LEAGUES = "/leagues/FETCH_LEAGUES",
  SET_LEAGUES = "/leagues/SET_LEAGUES",
  SET_STATUS = "/leagues/SET_STATUS",
}

export interface IFetchLeagues extends Action<ELeagueTypes.FETCH_LEAGUES> {}

export interface ISetLeagues extends Action<ELeagueTypes.SET_LEAGUES> {
  payload: TLeaguesState["data"];
}

export interface ISetStatus extends Action<ELeagueTypes.SET_STATUS> {
  payload: TLeaguesState["status"];
}

// Common

export type TLeaguesAction = ISetLeagues | ISetStatus;

export type TLeaguesState = IState<ILeague[]>;
