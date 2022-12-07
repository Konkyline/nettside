import { HandlerContext } from "$fresh/server.ts";

interface Collaborator {
  name: string;
  email: string;
  skill: string;
  created_at: string;
}

export async function handler(
  req: Request,
  ctx: HandlerContext,
): Promise<Response> {
  switch (req.method) {
    case "GET": {
      try {
        const { dynamo } = ctx;
        const { Items } = await dynamo.scan({
          TableName: "collaborators",
        });
        return new Response(JSON.stringify(Items), { status: 200 });
      } catch (e) {
        return new Response(e.message, { status: 500 });
      }
    }

    case "POST": {
      try {
        const body = await req.formData();
        const name = body.get("name") as string;
        body.append("created_at", new Date().toISOString());
        const { dynamo } = ctx;
        const { Item } = await dynamo.put({
          TableName: "collaborators",
          Item: Object.fromEntries(body.entries()),
        });
        if (req.headers.get("accept").includes("text/html")) {
          const url = `/${name}`;
          return new Response(null, {
            status: 303,
            headers: {
              Location: url,
            },
          });
        } else {
          return new Response(JSON.stringify(Item), {
            status: 201,
            headers: {
              "content-type": "application/json",
            },
          });
        }
      } catch (e) {
        return new Response(e.message, { status: 500 });
      }
    }

    default:
      return new Response("Invalid method", { status: 405 });
  }
}
