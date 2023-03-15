import withAuthorizedHandlers from "@/server/withAuthorizedHandlers";
import get from "./get";

const handlers = {
  get,
};

export default withAuthorizedHandlers(handlers);
