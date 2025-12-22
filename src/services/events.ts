import { supabase } from '@/lib/supabase';
import type { Event } from '@/types/event';

export type CreateEventPayload = Pick<Event, 'name' | 'start_date' | 'end_date' | 'total_budget'>;

export const getEvents = async () => {
  return supabase.from('events').select('*').order('created_at', { ascending: false }).returns<Event[]>();
};

export const createEvent = async (payload: CreateEventPayload) => {
  return supabase.from('events').insert(payload);
};
