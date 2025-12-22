export type Budget = {
  id: string;
  todo_id: string;
  title: string;
  description: string | null;
  vendor: string | null;
  planned_amount: number;
  actual_amount: number;
  created_at: string;
};
