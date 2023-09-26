import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import itemReducer from './features/items/item';
import teamReducer from './features/team/teamSlice'

export const store = configureStore({
    reducer: {
        someFeature: itemReducer,
        team: teamReducer
    },
});

// Инференция типов для использования с `useDispatch`
export type AppDispatch = typeof store.dispatch;

// Инференция типов для использования с `useSelector`
export type RootState = ReturnType<typeof store.getState>;

// Инференция типов для thunk-действий
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
