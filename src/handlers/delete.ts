"use server";

import { JobEvent } from "@/models";

async function deleteHandler(event: JobEvent): Promise<void> {
  const response = await fetch(process.env.API_URL as string, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(event),
  });

  const data = await response.json();
  console.log(data);
}

export default deleteHandler;
