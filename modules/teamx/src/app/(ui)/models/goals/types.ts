export interface GoalDto {
  id?: number;
  title: string;
  assign_to: string;
  progress: number;
}

export interface GoalConnectionDto {
  parent_id: number;
  child_id: number;
}

export interface Goal {
  id?: number;
  title: string;
  assignTo?: number[];
  progress?: number;
  subGoals?: Goal[];
}

export const STATUS = {
  OK: "OK",
  WARNING: "WARNING",
  BEHIND: "BEHIND",
};

export type STATUS = typeof STATUS[keyof typeof STATUS];
