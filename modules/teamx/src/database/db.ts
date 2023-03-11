import Dexie, { Table } from "dexie";

export interface IExportModel {
  members: Member[];
  teamName?: string;
  teamNote?: string;
}

export interface Member {
  id?: number;
  name: string;
  job_title: string;
  profile_photo: string;
  notes: string;
}

export interface Team {
  id?: number;
  name: string;
  note: string;
}

export interface Goal {
  id?: number;
  title: string;
  assign_to: string;
  progress: number;
}

export interface GoalConnection {
  parent_id: number;
  child_id: number;
}

export class TeamxDb extends Dexie {
  members!: Table<Member>;
  teams!: Table<Team>;
  goals!: Table<Goal>;
  goal_connections!: Table<GoalConnection>;

  constructor() {
    super("teamx");
    this.version(1).stores({
      members: "++id, name",
      teams: "++id, name",
      goals: "++id, title",
      goal_connections: "[parent_id+child_id], parent_id, child_id",
    });
  }
}
const db = new TeamxDb();
export default db;
