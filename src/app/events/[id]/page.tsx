"use client";

import { useEvents } from "@/hooks/redux";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import c from "./[id].module.css";
import { FetchEventById } from "@/store/eventsSlice";
import { useDateTimeFormat } from "@/hooks/useDateTimeFormat";
import Image from "next/image";

const EventPage = () => {
  const params = useParams();
  const eventId = params.id as string;
  const { events, loading, dispatch, currentEvent } = useEvents();
  const { formatDate, formatTime } = useDateTimeFormat();

  const event = events.find((e) => e.id === eventId) || currentEvent;

  useEffect(() => {
    const exEvent = events.find((e) => e.id === eventId);
    if (!exEvent && (!currentEvent || currentEvent.id !== eventId)) {
      dispatch(FetchEventById(eventId));
    }
  }, [eventId, events, currentEvent, dispatch]);

  if (loading) return <div>Loading...</div>;
  if (!event) return <div>Event not found</div>;

  const venue = event._embedded?.venues?.[0];
  const priceRange = event.priceRanges?.[0];

  return (
    <div className={c.eventPage}>
      <div className={c.eventContainer}>
        <div>
          <div className={c.section}>
            <div className={c.eventImage}>
              <Image
                width={200}
                height={200}
                src={event.images?.[1]?.url || ""}
                alt="image"
              />
            </div>
            <div className={c.eventInfo}>
              <h3>{event.name}</h3>

              {event.classifications && event.classifications.length > 0 && (
                <div className={c.tagsContainer}>
                  {event.classifications.map((classification, index) => (
                    <div key={index} className={c.tagGroup}>
                      {classification.segment?.name && (
                        <span className={c.tag} data-type="segment">
                          {classification.segment.name}
                        </span>
                      )}
                      {classification.genre?.name && (
                        <span className={c.tag} data-type="genre">
                          {classification.genre.name}
                        </span>
                      )}
                      {classification.subGenre?.name && (
                        <span className={c.tag} data-type="subgenre">
                          {classification.subGenre.name}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className={c.eventDate}>
                {formatDate(event.dates?.start?.localDate)}
              </div>

              {event.dates?.start?.localTime && (
                <div className={c.eventTime}>
                  {formatTime(event.dates.start.localTime)}
                </div>
              )}

              {venue && (
                <div className={c.eventVenue}>
                  {venue.name}
                  {venue.city?.name && `, ${venue.city.name}`}
                </div>
              )}
              <button onClick={() => window.open(event.url, "_blank")}>
                Buy Tickets
              </button>
            </div>
          </div>

          <div className={c.section}>
            <div>
              {event.info ? (
                <div className={c.eventDetails}>
                  <h4>Event Details</h4>
                  <p>{event.info}</p>
                </div>
              ) : (
                <p>No event details available.</p>
              )}

              <div className={c.priceRange}>
                {priceRange
                  ? `$${priceRange.min} - $${priceRange.max}`
                  : "Price TBA"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
