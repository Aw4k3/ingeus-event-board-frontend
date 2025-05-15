import { EventCard } from "@/components";
import { editHandler, deleteHandler } from "@/handlers";
import { JobEvent } from "@/models";

export default async function Home() {
  const response = await fetch(process.env.API_URL as string);
  const data: JobEvent[] = await response.json();

  return (
    <main className="flex flex-col gap-6">
      <h1 className="text-4xl font-bold">
        Upcoming <span className="bg-gradient-to-tr from-orange-500 to-yellow-500 bg-clip-text text-transparent">Events</span>
      </h1>
      <section className="flex gap-4 flex-wrap justify-center">
        {data.map((event) => (
          <EventCard key={event.id} jobEvent={event} editHandler={editHandler} deleteHandler={deleteHandler} />
        ))}
      </section>
    </main>
  );
}
