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

export class TeamxDb extends Dexie {
  members!: Table<Member>;
  teams!: Table<Team>;

  constructor() {
    super("teamx");
    this.version(1).stores({
      members: "++id, name", // Primary key and indexed props
      teams: "++id, name",
    });
  }
}
const db = new TeamxDb();
export default db;
