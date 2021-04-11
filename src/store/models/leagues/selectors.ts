import { createSelector } from "reselect";
import { IRootState } from "../../types";
import { TLeaguesState } from "./types";

const getBase = (state: IRootState): TLeaguesState => state.leagues;

export const selectLeagues = createSelector(getBase, state => state.data);

export const selectStatus = createSelector(getBase, state => state.status);
