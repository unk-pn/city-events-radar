import { combineReducers, configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./eventsSlice";

const RootReducer = combineReducers({
    events: eventsReducer,
})

const setupStore = () => {
    return configureStore({
        reducer: RootReducer,
    })
}

export type RootState =  ReturnType<typeof RootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const store = setupStore()