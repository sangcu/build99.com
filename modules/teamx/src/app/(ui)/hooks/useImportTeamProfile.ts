import db, { Member } from "@/database/db";
import axios from "axios";
import { useMutation } from "react-query";

const importTeamProfile = async (params: {
  jsonString: string;
  override?: boolean;
}) => {
  const { jsonString, override } = params;

  if (!jsonString) throw new Error("The file is invalid");

  const contentSplited = jsonString.split(",");

  if (contentSplited.length != 2) {
    throw new Error("The file is invalid");
  }

  const value = contentSplited[1];

  try {
    const team = JSON.parse(window.atob(value));

    await axios.post("/api/teams/import", {
      override,
      team,
    });
  } catch (e) {
    throw new Error("Cannot read data from your file");
  }
};

const useImportTeamProfile = (
  onSuccess?: (data: any, variables: any, context: any) => void,
  onError?: (error: any, variables: any, context: any) => void
) => {
  return useMutation(importTeamProfile, {
    onSuccess,
    onError,
  });
};

export default useImportTeamProfile;
