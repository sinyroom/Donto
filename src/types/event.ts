export type EventStatus = 'active' | 'completed';

export type ProjectEvent = {
  id: string;
  name: string;
  start_date: string;
  end_date: string;
  total_budget: number;
  status: EventStatus;
  created_at: string;
};
