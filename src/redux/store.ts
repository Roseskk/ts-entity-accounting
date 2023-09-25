// store.ts
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import itemReducer from './features/items/item'; // Предположим, что у тебя есть someSlice

export const store = configureStore({
    reducer: {
        someFeature: itemReducer, // Используй свои редьюсеры
        // Добавь другие редьюсеры здесь
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
