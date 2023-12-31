import { configureStore } from "@reduxjs/toolkit";
import application from '../features/applicationSlice'
import users from '../features/usersSlice'

export const store = configureStore({
    reducer: {
        application,
        users,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch