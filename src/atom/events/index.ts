import { atom } from "jotai";
import { EVENTS } from "../../constants/events";

const events = window.localStorage.getItem("EVENTS");

if (!events) {
    window.localStorage.setItem("EVENTS", JSON.stringify(EVENTS));
}

const eventsAtom = atom(events ? JSON.parse(events) : EVENTS);

export const persistedEvents = atom(
    (get) => get(eventsAtom) as typeof EVENTS,
    (_get, set, events: typeof EVENTS) => {
        window.localStorage.setItem("EVENTS", JSON.stringify(events));
        set(eventsAtom, events);
    }
);
