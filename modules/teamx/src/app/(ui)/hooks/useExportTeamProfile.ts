import axios from "axios";
import { useMutation } from "react-query";

const exportTeamProfile = async () => {
  const response = await axios.get(`/api/teams/:export`);

  const blob = new Blob([JSON.stringify(response.data)], {
    type: "application/json",
  });

  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "yleader.json";
  a.click();
};

const useExportTeamProfile = (
  onSuccess?: (data: any, variables: any, context: any) => void,
  onError?: (error: any, variables: any, context: any) => void
) => {
  return useMutation(exportTeamProfile, {
    onSuccess,
    onError,
  });
};

export default useExportTeamProfile;
