import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/index";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useEvents = () => {
    const dispatch = useAppDispatch();
    const events = useAppSelector(state => state.events.events)
    const loading = useAppSelector(state => state.events.loading)
    const error = useAppSelector(state => state.events.error)
    const hasMore = useAppSelector(state => state.events.hasMore)
    const filters = useAppSelector(state => state.events.filters);
    const currentEvent = useAppSelector((state) => state.events.currentEvent);

    return {
        dispatch, 
        events,
        loading,
        error,
        hasMore,
        filters,
        currentEvent,
    }
}