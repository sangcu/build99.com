import { NextResponse } from "next/server";

export type Context = {
  params: any;
  [key: string]: any | undefined | null;
};

export type PlugInput = {
  request?: Request;
  context?: Context;
};

export type PlugResponse =
  | {
      context: Context | undefined;
      response: NextResponse | undefined;
    }
  | undefined;

export type Plug = (params: PlugInput) => PlugResponse | Promise<PlugResponse>;

export interface Params {
  handler: (
    request?: Request,
    context?: Context
  ) => Promise<NextResponse | undefined> | NextResponse | undefined;
  plugs: Plug[];
}


