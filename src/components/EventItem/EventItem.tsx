"use client";

import React from "react";
import Image from "next/image";
import { Event } from "@/types";
import c from "./EventItem.module.css";
import { useRouter } from "next/navigation";
import { useDateTimeFormat } from "@/hooks/useDateTimeFormat";

interface EventItemProps {
  event: Event;
  index?: number;
}

export const EventItem = ({ event, index = 0 }: EventItemProps) => {
  const router = useRouter();
  const { formatDate, formatTime } = useDateTimeFormat();

  const getEventBadge = () => {
    const now = new Date();
    const eventDate = event.dates?.start?.localDate
      ? new Date(event.dates.start.localDate)
      : null;

    if (!eventDate) return null;

    const diffTime = eventDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return "Past";
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Tomorrow";
    if (diffDays <= 7) return "This Week";
    return null;
  };

  const badge = getEventBadge();
  const venue = event._embedded?.venues?.[0];
  const priceRange = event.priceRanges?.[0];

  return (
    <div
      className={c.eventItem}
      onClick={() => router.push("/events/" + event.id)}
    >
      <div className={c.eventImageContainer}>
        {event.images?.[1]?.url ? (
          <Image
            className={c.eventImage}
            src={event.images[1].url}
            alt={event.name}
            width={400}
            height={200}
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className={c.eventPlaceholder}>🎫</div>
        )}

        <div className={c.eventNumber}>{index + 1}</div>

        {badge && <div className={c.eventBadge}>{badge}</div>}
      </div>

      <div className={c.eventContent}>
        <div className={c.eventMainContent}>
          <h3 className={c.eventTitle}>{event.name}</h3>

          <div className={c.eventMeta}>
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
          </div>

          {event.info && <div className={c.eventDescription}>{event.info}</div>}
        </div>

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
      </div>

      <div className={c.eventFooter}>
        <div className={c.eventPrice}>
          {priceRange ? `$${priceRange.min} - $${priceRange.max}` : "Price TBA"}
        </div>

        <button
          className={c.eventButton}
          onClick={(e) => {
            e.stopPropagation();
            if (event.url) {
              window.open(event.url, "_blank");
            }
          }}
        >
          Get Tickets
        </button>
      </div>
    </div>
  );
};

export const EventItemSkeleton = () => {
  return (
    <div className={c.eventSkeleton}>
      <div className={c.skeletonImage} />
      <div className={c.skeletonContent}>
        <div className={c.skeletonTitle} />
        <div className={c.skeletonText} />
        <div className={c.skeletonText} />
        <div className={c.skeletonText} />
      </div>
    </div>
  );
};
