// teamSlice.ts
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ITeam, TeamState} from '../../../types/teamTypes';
import httpService from "../../../service/httpService";

const initialState: TeamState = {
    loading: false,
    data: [],
    error: null,
    status: 'idle'
};

export const fetchTeam = createAsyncThunk<ITeam[], void, { rejectValue: string }>(
    'team/fetchTeam',
    async (_, { rejectWithValue }) => {
        try {
            return await httpService.get<ITeam[]>('/team');
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
);

const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTeam.pending, (state) => {
                state.loading = true;
                state.status = 'loading';
            })
            .addCase(fetchTeam.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.status = 'success';
            })
            .addCase(fetchTeam.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.status = 'failure';
            });
    },
});

export default teamSlice.reducer;
