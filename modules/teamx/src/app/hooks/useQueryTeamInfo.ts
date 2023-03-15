import { useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";

export const QUERY_TEAM_INFO = "QUERY_TEAM_INFO";

const queryTeamDetail = async () => {
  const response: AxiosResponse<
    {
      id?: string;
      name: string;
      description: string;
    }[]
  > = await axios.get("/api/teams");
  console.log("response.data", response.data);
  return response.data?.[0];
};

const useQueryTeamInfo = () => {
  return useQuery([QUERY_TEAM_INFO], queryTeamDetail);
};

export default useQueryTeamInfo;
