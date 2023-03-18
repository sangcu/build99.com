import { NextResponse } from "next/server";
import pino from "pino";
import { Context, Plug } from "./types";

const logger = pino();

export const errorHandler = (error: any) => {
  logger.error(error);
  return NextResponse.json("Something went wrong");
};

const nextApi: (params: {
  pipeline?: Plug[];
  handler: (
    request?: Request,
    context?: Context
  ) => Promise<NextResponse | undefined> | NextResponse | undefined;
}) => (
  request?: Request,
  context?: Context
) => Promise<NextResponse | undefined> =
  ({ pipeline, handler }) =>
  async (request, context) => {
    try {
      const pipelineResult = await pipeline?.reduce(
        async (resultPromise, plug) => {
          const result = await resultPromise;
          if (!!result.response) return resultPromise;

          const plugResult = await plug({
            request,
            context: result.context,
          });

          return plugResult || resultPromise;
        },
        Promise.resolve({
          context: context,
          response: undefined as NextResponse | undefined,
        })
      );

      if (pipelineResult && pipelineResult.response)
        return pipelineResult.response;

      return await handler(request, pipelineResult?.context);
    } catch (error) {
      return errorHandler(error);
    }
  };

export default nextApi;
