import {configureStore, createSlice} from "@reduxjs/toolkit";

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

export const interesting = (x) => async (dispatch, getState) => {
    console.log('interesting', x);
    const state = getState();
    const count = selectCount(state);
    console.log('count', count);
    for (let i = 0; i < x; i++) {
        dispatch(incremented());
    }
};

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: true,
    }),
});
