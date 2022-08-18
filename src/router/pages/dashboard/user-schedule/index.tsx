import { Card, CardContent, CardHeader } from "@pega/cosmos-react-core";
import { useAtom } from "jotai";
import { useMemo } from "react";
import { userAtom } from "../../../../atom/user";
import { EVENTS } from "../../../../constants/events";

import "./UserSchedule.scss";

type DayKeys = keyof typeof EVENTS;

const UserSchedule = () => {
    const [user] = useAtom(userAtom);
    const events = useMemo(() => {
        return new Set(user?.events || []);
    }, [user]);
    return (
        <div className="p-8" id="schedule-page">
            <h1 className="text-5xl font-bold capitalize text-gray-700 mb-8">
                Your Schedule
            </h1>
            <div className="schedule-container grid gap-8">
                {Object.keys(EVENTS).map((day) => (
                    <Card key={day}>
                        <CardHeader className="capitalize font-bold text-center">
                            {day.replaceAll("-", " ")}
                        </CardHeader>
                        <CardContent>
                            {EVENTS[day as DayKeys]
                                .filter((evt) => events.has(evt.id))
                                .map((event) => (
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

export default UserSchedule;
