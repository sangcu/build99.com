import withAuthorizedHandlers from "@/server/withAuthorizedHandlers";
import get from "./get";
import post from "./post";

const handlers = {
  get,
  post,
};

export default withAuthorizedHandlers(handlers);
