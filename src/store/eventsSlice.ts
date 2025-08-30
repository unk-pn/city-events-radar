import {
  Event,
  isApiError,
  SearchFilters,
  TicketmasterResponse,
} from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EventState {
  events: Event[];
  loading: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;
  filters: SearchFilters;
  totalElements: number;
}

interface ActionType {
  data: TicketmasterResponse;
  page: number;
  filters: SearchFilters;
}

const initialState: EventState = {
  events: [],
  loading: false,
  error: null,
  page: 0,
  hasMore: true,
  filters: {},
  totalElements: 0,
};

export const fetchEvents = createAsyncThunk(
  "events/fetchEvents",
  async (params?: { page?: number; filters?: SearchFilters }) => {
    const { page = 0, filters = {} } = params || {};

    const searchParams = new URLSearchParams({
      page: page.toString(),
      size: "20",
      ...(filters.keyword && { keyword: filters.keyword }),
      ...(filters.city && { city: filters.city }),
    });
    const response = await fetch(`/api/events?${searchParams}`);
    if (!response.ok) throw new Error("Error while fetching");

    const data = await response.json();

    if (isApiError(data)) throw new Error(data.error);

    return {
      data: data as TicketmasterResponse,
      page,
      filters,
    } as ActionType;
  }
);

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearEvents: (state) => {
      state.events = [];
      state.page = 0;
      state.hasMore = true;
      state.totalElements = 0;
    },
    setFilters: (state, action: PayloadAction<SearchFilters>) => {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchEvents.fulfilled,
        (state, action: PayloadAction<ActionType>) => {
          state.loading = false;
          const { data, page, filters } = action.payload;

          if (page === 0) {
            state.events = data._embedded?.events || [];
            console.log("First page loaded:", state.events.length);
          } else {
            const newEvents = data._embedded?.events || [];
            const haveEvents = new Set(state.events.map((e) => e.id));
            const uniqueEvents = newEvents.filter((e) => !haveEvents.has(e.id));
            state.events.push(...uniqueEvents);
          }

          state.page = page;
          state.filters = filters || state.filters;
          state.totalElements = data.page?.totalElements || 0;

          state.hasMore = state.events.length < state.totalElements;
        }
      )
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Failed to load events";
      });
  },
});

export const { clearError, clearEvents, setFilters } = eventSlice.actions;
export default eventSlice.reducer;
