"use client";

import { useEvents } from "@/hooks/redux";
import { useParams } from "next/navigation";
import React from "react";

const EventPage = () => {
  const params = useParams();
  const eventId = params.id as string;
  const { events, loading } = useEvents();

  const event = events.find((e) => e.id === eventId);

  if (loading) return <div>Loading...</div>;
  if (!event) return <div>Event not found</div>;
  return (
    <div>
      <img
        width={200}
        height={200}
        src={event.images?.[0]?.url || ""}
        alt="image"
      />
      <h3>{event.name}</h3>
      <h4>{event.dates?.start?.localTime}</h4>
      <h4>{event.dates?.end?.localDate}</h4>
    </div>
  );
};

export default EventPage;
