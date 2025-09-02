"use client";

import { useEvents } from "@/hooks/redux";
import { fetchEvents } from "@/store/eventsSlice";
import React, { useEffect, useRef } from "react";
import c from "./events.module.css";
import { EventItem, EventItemSkeleton } from "@/components/EventItem/EventItem";
import { Filters } from "@/components/Filters/Filters";

const Events = () => {
  const { dispatch, events, loading, error, hasMore } = useEvents();
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (events.length === 0 && !loading && !hasInitialized.current) {
      hasInitialized.current = true;
      dispatch(fetchEvents());
    }
  }, [dispatch, events.length, loading]);

  const loadMore = () => {
    if (hasMore && !loading) {
      dispatch(
        fetchEvents({
          page: Math.floor(events.length / 20),
        })
      );
    }
  };

  return (
    <div className={c.eventsPage}>
      <div className={c.eventsContainer}>
        <div className={c.eventsHeader}>
          <h1 className={c.eventsTitle}>Discover Events</h1>
          <p className={c.eventsSubtitle}>
            Explore the latest events happening in your city and beyond
          </p>
        </div>

        {error && (
          <div className={c.errorMessage}>
            <span>❌</span>
            <p>{error}</p>
          </div>
        )}

        <div className={c.eventsFilters}>
          <Filters />
        </div>

        <div className={c.eventsGrid}>
          {events.map((event, index) =>
            event ? (
              <EventItem key={event.id} event={event} index={index} />
            ) : null
          )}

          {loading &&
            Array.from({ length: 6 }, (_, i) => (
              <EventItemSkeleton key={`skeleton-${i}`} />
            ))}
        </div>

        {events.length === 0 && !loading && !error && (
          <div className={c.emptyState}>
            <span>🎭</span>
            <h3>No events found</h3>
            <p>Try adjusting your search criteria or check back later.</p>
          </div>
        )}

        {events.length > 0 && (
          <div className={c.loadMoreContainer}>
            <button
              className={c.loadMoreButton}
              onClick={loadMore}
              disabled={!hasMore || loading}
            >
              {loading ? (
                <>
                  <span className={c.spinner}></span>
                  Loading more events...
                </>
              ) : hasMore ? (
                "Load More Events"
              ) : (
                "No more events to load"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
