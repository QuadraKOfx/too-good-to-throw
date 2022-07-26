import { createSlice } from '@reduxjs/toolkit';

export type UserData = {
    userId: string;
};

export type UserStateType = {
    error: boolean | string | string[];
    loading: boolean;
    userData: UserData;
};

export const initialState: UserStateType = {
    error: false,
    userData: {} as UserData,
    loading: false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, _action) {
            state.loading = true;
            state.error = false;
            console.info(state);
        },
        logout(state, _action) {
            state.loading = true;
        }
    }
});

export const {name, actions, reducer} = userSlice;
