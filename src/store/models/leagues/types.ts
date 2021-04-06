import { IState } from "../../types";

// Data

export interface ILeague {
  readonly id: number;
  name: string;
}

// Actions

// Common

export type TLeaguesState = IState<ILeague[]>;
