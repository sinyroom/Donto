import { supabase } from '@/lib/supabase';
import type { ProjectEvent } from '@/types/event';

export type CreateEventPayload = Pick<ProjectEvent, 'name' | 'start_date' | 'end_date' | 'total_budget'>;
export type UpdateEventPayload = Partial<Pick<ProjectEvent, 'name' | 'start_date' | 'end_date' | 'total_budget'>>;

export const getEvents = async () => {
  return supabase.from('events').select('*').order('created_at', { ascending: false }).returns<ProjectEvent[]>();
};

export const createEvent = async (payload: CreateEventPayload) => {
  return supabase.from('events').insert(payload);
};

export const updateEvent = async (id: string, payload: UpdateEventPayload) => {
  return supabase.from('events').update(payload).eq('id', id);
};

export const deleteEvent = (id: string) => {
  return supabase.from('events').delete().eq('id', id);
};
