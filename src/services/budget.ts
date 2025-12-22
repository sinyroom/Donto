import { supabase } from '@/lib/supabase';
import type { Budget } from '@/types/budget';

export const getBudgetsByTodo = async (todoId: string) => {
  return supabase.from('budgets').select('*').eq('todo_id', todoId).returns<Budget[]>();
};
