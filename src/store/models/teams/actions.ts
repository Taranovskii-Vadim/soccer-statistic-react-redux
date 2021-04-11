import {
  ETeamsTypes,
  IFetchTeams,
  ISetStatus,
  ISetTeams,
  TTeamsState,
} from "./types";

export const fetchTeams = (): IFetchTeams => ({
  type: ETeamsTypes.FETCH_TEAMS,
});

export const setTeams = (payload: TTeamsState["data"]): ISetTeams => ({
  type: ETeamsTypes.SET_TEAMS,
  payload,
});

export const setStatus = (payload: TTeamsState["status"]): ISetStatus => ({
  type: ETeamsTypes.SET_STATUS,
  payload,
});
