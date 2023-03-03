import { configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/userReducer';
import themeReducer from './reducers/themeReducer';

export const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer
    }
});

export type RooState = ReturnType<typeof store.getState>;