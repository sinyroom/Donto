'use client';

import { useEffect, useState } from 'react';
import CompleteCheck from './CompleteCheck';
import CreateProject from './CreateProject';
import ProjectCard from './ProjectCard';
import SortSelect from './SortSelect';
import { Event } from '@/types/event';
import { getEvents } from '@/services/events';

export default function ProjectContainer() {
  const [events, setEvents] = useState<Event[]>([]);

  const fetchEvents = async () => {
    const { data } = await getEvents();
    if (data) setEvents(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="flex flex-col gap-4 mt-2">
      <div className="flex items-center justify-between">
        <CompleteCheck />
        <div className="flex items-center gap-1">
          <SortSelect />
          <CreateProject onCreated={fetchEvents} />
        </div>
      </div>
      {events.map((event) => (
        <ProjectCard
          key={event.id}
          title={event.name}
          startDate={event.start_date}
          endDate={event.end_date}
          budget={event.total_budget}
        />
      ))}
    </div>
  );
}
