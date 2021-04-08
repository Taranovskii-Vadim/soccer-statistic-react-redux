import axios from "axios";
import { TLeaguesState } from "../models/leagues/types";

interface ILeagueResponse {
  count: number;
  competitions: TLeaguesState["data"];
  filters: {};
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
