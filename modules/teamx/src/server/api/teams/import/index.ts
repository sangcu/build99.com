import withAuthorizedHandlers from "@/server/withAuthorizedHandlers";
import post from "./post";

const handlers = {
  post,
};

export default withAuthorizedHandlers(handlers);
