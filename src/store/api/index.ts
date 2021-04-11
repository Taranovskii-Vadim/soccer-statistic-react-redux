import axios from "axios";
import { TLeaguesState } from "../models/leagues/types";
import { TTeamsState } from "../models/teams/types";

interface IApiResponse {
  count: number;
  filters: {};
}

interface ILeagueResponse extends IApiResponse {
  competitions: TLeaguesState["data"];
}

interface ITeamsResponse extends IApiResponse {
  teams: TTeamsState["data"];
}

const api = axios.create({
  baseURL: "http://api.football-data.org/v2",
});

api.defaults.headers["X-Auth-Token"] = process.env.REACT_APP_SECRET_TOKEN || "";

export const leaguesApi = {
  async fetchData(): Promise<TLeaguesState["data"]> {
    const { data } = await api.get<ILeagueResponse>("/competitions/");
    return data.competitions;
  },
};

export const teamsApi = {
  async fetchData(): Promise<TTeamsState["data"]> {
    const { data } = await api.get<ITeamsResponse>("/teams/");
    return data.teams;
  },
};
