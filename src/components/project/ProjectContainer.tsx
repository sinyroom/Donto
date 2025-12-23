'use client';

import { useEffect, useState } from 'react';
import CompleteCheck from './CompleteCheck';
import CreateProject from './CreateProject';
import ProjectCard from './ProjectCard';
import SortSelect from './SortSelect';
import { ProjectEvent } from '@/types/event';
import { deleteEvent, getEvents } from '@/services/events';
import Button from '../ui/Button';

export default function ProjectContainer() {
  const [events, setEvents] = useState<ProjectEvent[]>([]);
  const [open, setOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<ProjectEvent | null>(null);
  const [showCompleted, setShowCompleted] = useState(false);

  const isCompleted = (event: ProjectEvent) => {
    return new Date(event.end_date) < new Date();
  };

  const fetchEvents = async () => {
    const { data } = await getEvents();
    if (data) setEvents(data);
  };

  const handleEditvent = async (id: string) => {
    const target = events.find((e) => e.id === id);
    if (!target) return;

    setEditingEvent(target);
    setOpen(true);
  };

  const handleDeleteEvent = async (id: string) => {
    const ok = confirm('정말 삭제할까요?');
    if (!ok) return;

    await deleteEvent(id);
    fetchEvents();
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const visibleEvents = showCompleted ? events : events.filter((event) => !isCompleted(event));

  return (
    <div className="flex flex-col gap-4 mt-2">
      <div className="flex items-center justify-between">
        <CompleteCheck
          checked={showCompleted}
          onChange={(checked) => setShowCompleted(checked)}
        />
        <div className="flex items-center gap-1">
          <SortSelect />
          <Button
            onClick={() => setOpen(true)}
            className="px-2.5 py-1.5 text-sm hover:bg-orange-600"
          >
            새 이벤트
          </Button>
        </div>
      </div>
      {visibleEvents.map((event) => (
        <ProjectCard
          key={event.id}
          id={event.id}
          title={event.name}
          startDate={event.start_date}
          endDate={event.end_date}
          budget={event.total_budget}
          onEdit={handleEditvent}
          onDelete={handleDeleteEvent}
        />
      ))}

      {open && (
        <CreateProject
          open={open}
          initialData={editingEvent}
          onClose={() => {
            setOpen(false);
            setEditingEvent(null);
          }}
          onCreated={fetchEvents}
        />
      )}
    </div>
  );
}
