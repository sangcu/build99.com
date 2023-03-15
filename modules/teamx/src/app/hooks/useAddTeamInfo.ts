import db, { Team } from "@/database/db";
import axios from "axios";
import { useMutation } from "react-query";

const addTeamInfo = async (teamInfo: { name: string; description: string }) => {
  return axios.post("/api/teams", {
    ...teamInfo,
  });
};

const useAddTeamInfo = (
  onSuccess?: (data: any, variables: any, context: any) => void,
  onError?: (error: any, variables: any, context: any) => void
) => {
  return useMutation(addTeamInfo, {
    onSuccess,
    onError,
  });
};

export default useAddTeamInfo;
