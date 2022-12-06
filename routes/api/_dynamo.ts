import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { DynamoDBClient } from "client-dynamodb";

export async function handler(req: Request, ctx: MiddlewareHandlerContext, next) {
  // setup the dynamo client on ctx
  if (!ctx.dynamo) {
    ctx.dynamo = new DynamoDBClient({
      region: "eu-north-1",
      credentials: {
        accessKeyId: Deno.env.get("AWS_ACCESS_KEY_ID"),
        secretAccessKey: Deno.env.get("AWS_SECRET_ACCESS_KEY"),
      },
    });
  }
  // call the next middleware
  return await next(req, ctx);
}
