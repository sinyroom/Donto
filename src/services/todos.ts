import { supabase } from '@/lib/supabase';
import type { Todo } from '@/types/todo';

export const getTodosByEvent = async (eventId: string) => {
  return supabase.from('todos').select('*').eq('event_id', eventId).returns<Todo[]>();
};
