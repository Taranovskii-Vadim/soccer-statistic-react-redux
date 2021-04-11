import { createSelector } from "reselect";
import { IRootState } from "../../types";
import { TTeamsState } from "./types";

const getBase = (state: IRootState): TTeamsState => state.teams;

export const selectTeams = createSelector(getBase, state => state.data);

export const selectStatus = createSelector(getBase, state => state.status);
