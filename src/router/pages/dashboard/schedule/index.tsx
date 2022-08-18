import { Card, CardContent, CardHeader } from "@pega/cosmos-react-core";
import { useAtom } from "jotai";
import { persistedEvents } from "../../../../atom/events";
import { EVENTS } from "../../../../constants/events";

import "./Schedule.scss";

type DayKeys = keyof typeof EVENTS;

const Schedule = () => {
    const [events] = useAtom(persistedEvents);
    return (
        <div className="p-8" id="schedule-page">
            <h1 className="text-5xl font-bold capitalize text-gray-700 mb-8">
                Schedule
            </h1>
            <div className="schedule-container grid gap-8">
                {Object.keys(events).map((day) => (
                    <Card key={day}>
                        <CardHeader className="capitalize font-bold text-center">
                            {day.replaceAll("-", " ")}
                        </CardHeader>
                        <CardContent>
                            {events[day as DayKeys].map((event) => (
                                <div
                                    key={event.id}
                                    className="rounded-xl bg-gray-100 p-4 mb-2"
                                >
                                    <h6 className="font-bold text-sm">
                                        {event.slot}
                                    </h6>
                                    <p>{event.title}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Schedule;
