"use server";

import { JobEvent } from "@/models";

async function editHandler(event: JobEvent): Promise<void> {
  const response = await fetch(process.env.API_URL as string, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(event),
  });

  const data = await response.json();
  console.log(data);
}

export default editHandler;
