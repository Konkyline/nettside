// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[name].tsx";
import * as $1 from "./routes/api/_dynamo.ts";
import * as $2 from "./routes/api/collaborator.ts";
import * as $3 from "./routes/calculator.tsx";
import * as $4 from "./routes/contact.tsx";
import * as $5 from "./routes/index.tsx";
import * as $$0 from "./islands/FlowerCount.tsx";
import * as $$1 from "./islands/Navigation.tsx";

const manifest = {
  routes: {
    "./routes/[name].tsx": $0,
    "./routes/api/_dynamo.ts": $1,
    "./routes/api/collaborator.ts": $2,
    "./routes/calculator.tsx": $3,
    "./routes/contact.tsx": $4,
    "./routes/index.tsx": $5,
  },
  islands: {
    "./islands/FlowerCount.tsx": $$0,
    "./islands/Navigation.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
