import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
} from "@pega/cosmos-react-core";
import { useAtom } from "jotai";
import { useMemo, useState } from "react";
import { userAtom } from "../../../../atom/user";
import { EVENTS } from "../../../../constants/events";

import "./BuyPass.scss";

type DayKeys = keyof typeof EVENTS;

const formatPrice = (value: number) => {
    return Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(value);
};

const BuyPass = () => {
    const [user] = useAtom(userAtom);

    const [events, setEvents] = useState(new Set(user?.events || []));

    const cost = useMemo(() => {
        const userEvents = new Set(user?.events || []);
        const diff = [...events].filter((evt) => !userEvents.has(evt));
        return diff.length * 10;
    }, [events, user]);

    return (
        <div className="p-8" id="schedule-page">
            <div className="flex">
                <h1 className="text-5xl font-bold capitalize text-gray-700 mb-8 flex-1 items-center">
                    Buy Passes
                </h1>
                {cost > 0 && (
                    <Button variant="primary" compact style={{ height: 35 }}>
                        Buy {formatPrice(cost)}
                    </Button>
                )}
            </div>
            <div className="schedule-container grid gap-8">
                {Object.keys(EVENTS).map((day) => (
                    <Card key={day}>
                        <CardHeader className="capitalize font-bold text-center">
                            {day.replaceAll("-", " ")}
                        </CardHeader>
                        <CardContent>
                            {EVENTS[day as DayKeys].map((event) => (
                                <div
                                    key={event.id}
                                    className="rounded-xl bg-gray-100 p-4 mb-2 flex gap-4"
                                >
                                    <div>
                                        <Checkbox
                                            checked={events.has(event.id)}
                                            onChange={() => {
                                                if (events.has(event.id)) {
                                                    setEvents(
                                                        (currentEvents) => {
                                                            currentEvents.delete(
                                                                event.id
                                                            );
                                                            return new Set(
                                                                currentEvents
                                                            );
                                                        }
                                                    );
                                                } else {
                                                    setEvents(
                                                        (currentEvents) => {
                                                            currentEvents.add(
                                                                event.id
                                                            );
                                                            return new Set(
                                                                currentEvents
                                                            );
                                                        }
                                                    );
                                                }
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <h6 className="font-bold text-sm">
                                            {event.slot}
                                        </h6>
                                        <p>{event.title}</p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default BuyPass;
