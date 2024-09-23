import { configureStore, createSlice, ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 15
    },
    reducers: {
        incremented: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        }
    },
    selectors: {
        selectCount: state => state.value,
    }
})

export const { incremented, decremented } = counterSlice.actions
export const { selectCount } = counterSlice.selectors

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: true,
    }),
});

type AppDispatch = AppStore['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
type AppStore = typeof store;
type RootState = ReturnType<AppStore['getState']>;

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>

export const interesting: (x: number) => AppThunk = (x) => async (dispatch, getState) => {
    console.log('interesting', x);
    const state = getState();
    const count = selectCount(state);
    console.log('count', count);
    for (let i = 0; i < x; i++) {
        dispatch(incremented());
    }
};