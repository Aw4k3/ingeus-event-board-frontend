import { EventCard } from "@/components";
import { JobEvent } from "@/models";

export default async function Home() {
  const response = await fetch("http://localhost:3001/events");
  const data: JobEvent[] = await response.json();

  async function editHandler(event: JobEvent) {
    "use server"
    console.log("edit");
  }

  async function deleteHandler(event: JobEvent) {
    "use server"
    console.log("delete");
  }

  return (
    <main className="flex flex-col gap-6">
      <h1 className="text-4xl font-bold">Upcoming <span className="bg-gradient-to-tr from-orange-500 to-yellow-500 bg-clip-text text-transparent">Events</span></h1>
      <section className="flex gap-4 flex-wrap justify-center">
        {data.map((event) => (
          <EventCard key={event.id} event={event} editHandler={editHandler} deleteHandler={deleteHandler} />
        ))}
      </section>
    </main>
  );
}
