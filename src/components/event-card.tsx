"use client";

import { Icons } from "@/assets";
import { JobEvent } from "@/models";
import Button from "./button";
import { useState } from "react";
import TextInput from "./text-input";

type EventCardProps = {
  jobEvent: JobEvent;
  editHandler: (editedEvent: JobEvent) => void;
  deleteHandler: (event: JobEvent) => void;
};

export default function EventCard({ jobEvent, deleteHandler, editHandler }: EventCardProps) {
  const [editing, setEditing] = useState<boolean>(false);
  const [previousState, setPreviousState] = useState<JobEvent>(jobEvent);
  const [event, setEvent] = useState<JobEvent>(jobEvent);

  return (
    <div key={event.id} className="bg-gray-200 dark:bg-gray-800 p-6 rounded-2xl min-w-[40rem] max-w-[60rem] flex-1">
      {editing ? (
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <TextInput className="max-w-[30rem] flex-1" value={event.title} placeholder={""} onChange={(s) => {setEvent({...event, title: s})}} />
            <div className="flex gap-2">
              <Button
                onClick={() => {
                  setPreviousState(event);
                  setEditing(false);
                  editHandler(event);
                }}
              >
                <Icons.Save />
              </Button>
              <Button
                onClick={() => {
                  setEvent(previousState);
                  setEditing(false);
                }}
              >
                <Icons.Cancel />
              </Button>
              <Button onClick={() => deleteHandler(event)}>
                <Icons.Delete />
              </Button>
            </div>
          </div>
          <div className="flex gap-2">
            <TextInput className="max-w-[6.5rem] text-center" value={event.date} placeholder={""} onChange={(s) => {setEvent({...event, date: s})}} />
            <TextInput className="max-w-[6.5rem] text-center" value={event.startTime} placeholder={""} onChange={(s) => {setEvent({...event, startTime: s})}} />
            <TextInput className="max-w-[6.5rem] text-center" value={event.endTime} placeholder={""} onChange={(s) => {setEvent({...event, endTime: s})}} />
          </div>
          <textarea
            className={`bg-gray-300 dark:bg-gray-700 px-2 py-1 rounded-lg resize-y`}
            value={event.description}
            onChange={(e) => {setEvent({...event, description: e.currentTarget.value})}}
            placeholder="Description"
          />
        </div>
      ) : (
        <>
          <div className="flex justify-between">
            <h2 className="font-bold">{event.title}</h2>
            <div className="flex gap-2">
              <Button
                onClick={() => {
                  setPreviousState(event);
                  setEditing(true);
                }}
              >
                <Icons.Edit />
              </Button>
              <Button onClick={() => deleteHandler(event)}>
                <Icons.Delete />
              </Button>
            </div>
          </div>
          <p className="text-gray-400">
            {event.date} {event.startTime} {event.endTime}
          </p>
          <p>{event.description === "" ? "No description" : event.description}</p>
        </>
      )}
    </div>
  );
}
