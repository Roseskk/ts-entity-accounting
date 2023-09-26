
export const FETCH_TEAM_START = "FETCH_TEAM_START";
export const FETCH_TEAM_SUCCESS = "FETCH_TEAM_SUCCESS";
export const FETCH_TEAM_FAILURE = "FETCH_TEAM_FAILURE";

export interface TeamState {
    loading: boolean;
    data: ITeam[] ;
    error: string | null;
    status: 'idle' | 'loading' | 'success' | 'failure';
}

export interface ITeam {
    id: number
    name: string
    spec: string
    age: string
    ico: string
}
