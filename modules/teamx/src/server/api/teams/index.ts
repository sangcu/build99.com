import withAuthorizedHandlers from "@/server/withAuthorizedHandlers";
import get from "./get";
import post from "./post";
import put from "./put";

const handlers = {
  get,
  post,
  put,
};

export default withAuthorizedHandlers(handlers);
