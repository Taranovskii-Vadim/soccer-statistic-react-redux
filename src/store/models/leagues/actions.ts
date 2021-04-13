import {
  ELeagueTypes,
  IFetchLeagues,
  ISearchLeagues,
  ISetLeagues,
  ISetStatus,
  TLeaguesState,
} from "./types";

export const fetchLeagues = (): IFetchLeagues => ({
  type: ELeagueTypes.FETCH_LEAGUES,
});

export const setLeagues = (payload: TLeaguesState["data"]): ISetLeagues => ({
  type: ELeagueTypes.SET_LEAGUES,
  payload,
});

export const searchLeagues = (payload: string): ISearchLeagues => ({
  type: ELeagueTypes.SEARCH_LEAGUES,
  payload,
});

export const setStatus = (payload: TLeaguesState["status"]): ISetStatus => ({
  type: ELeagueTypes.SET_STATUS,
  payload,
});
