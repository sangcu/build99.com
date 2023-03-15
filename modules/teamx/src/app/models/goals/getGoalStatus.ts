import { STATUS } from "./types";

const getGoalStatus: (progress?: number) => STATUS = (progress?: number) => {
  if (!progress || progress < 50) return STATUS.BEHIND;
  if (progress < 80) return STATUS.WARNING;
  return STATUS.OK;
};

export default getGoalStatus;
