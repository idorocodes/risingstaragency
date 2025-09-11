import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "qv415lwq",   // find this in sanity/sanity.config.ts
  dataset: "production",          // or whatever dataset you picked
  useCdn: true,                   // `true` = faster, cache; `false` = always fresh
  apiVersion:  "2023-06-01",       // use today’s date or Sanity’s latest API
});
