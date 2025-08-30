'use client'

import { useEvents } from '@/hooks/redux'
import { fetchEvents } from '@/store/eventsSlice';
import React, { useEffect } from "react";
import c from './events.module.css'
import { useRouter } from 'next/navigation';

const Events = () => {
  const { dispatch, events, loading, error, hasMore } = useEvents()
  const router = useRouter()

  useEffect(() => {
    if (events.length === 0) dispatch(fetchEvents())
  }, [dispatch, events.length])

  const loadMore = () => {
    if (hasMore && !loading) {
      dispatch(fetchEvents({
        page: Math.floor(events.length / 20)
      }))
    }
  }

  return (
    <div>
      <h1>Events</h1>
      <h2>Explore the latest events happening in your city</h2>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {events.length > 0 && (
        events.map((event, index) => (
          event ? (
          <div key={event.id} className={c.eventItem} onClick={() => router.push('/events/' + event.id)}>
            <h2>{index+1}</h2>
            <img width={200} height={200} src={event.images?.[0]?.url || ''} alt='image'/>
            <h3>{event.name}</h3>
            <h4>{event.dates?.start?.localTime}</h4>
            <h4>{event.dates?.end?.localDate}</h4>
          </div>
        ): null
      )))}
      <button onClick={loadMore} disabled={!hasMore || loading}>{loading ? 'Loading...' : 'Load More'}</button>
    </div>
  );
}

export default Events

