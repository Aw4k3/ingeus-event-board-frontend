import { Icons } from "@/assets";
import { JobEvent } from "@/models";

type EventCardProps = {
  event: JobEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <div key={event.id} className="bg-gray-200 dark:bg-gray-800 p-6 rounded-2xl">
      <div className="flex justify-between">
        <h2 className="font-bold">{event.title}</h2>
        <div className="flex gap-2">
          <button>
            <Icons.Edit />
          </button>
          <button>
            <Icons.Delete />
          </button>
        </div>
      </div>
      <p className="text-gray-400">
        {event.date} {event.startTime} {event.endTime}
      </p>
      <p>{event.description === "" ? "No description" : event.description}</p>
    </div>
  );
}
