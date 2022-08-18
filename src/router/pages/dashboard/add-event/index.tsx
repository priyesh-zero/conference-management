import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Input,
    Label,
    Option,
    Select,
} from "@pega/cosmos-react-core";
import { ChangeEvent, useState } from "react";
import { EVENTS } from "../../../../constants/events";
import { v4 } from "uuid";
import { useAtom } from "jotai";
import { persistedEvents } from "../../../../atom/events";

const AddEvent = () => {
    const [events, setEvents] = useAtom(persistedEvents);
    const [day, setDay] = useState<keyof typeof EVENTS>("day-one");
    const [event, setEvent] = useState({
        id: v4(),
        slot: "",
        title: "",
    });

    const handleAddEvent = () => {
        events[day] = [...events[day], event];
        setEvents(events);
        setEvent({
            id: v4(),
            slot: "",
            title: "",
        });
    };

    return (
        <div className="p-8" id="add-event-page">
            <h1 className="text-5xl font-bold capitalize text-gray-700 mb-8">
                Add Events
            </h1>
            <div className="w-96 m-auto">
                <Card>
                    <CardHeader className="font-bold">
                        Add Event Info
                    </CardHeader>
                    <CardContent>
                        <Label>Event Day</Label>
                        <Select
                            className="mb-4"
                            value={day}
                            onChange={(evt) =>
                                setDay(evt.target.value as keyof typeof EVENTS)
                            }
                        >
                            {Object.keys(EVENTS).map((day) => (
                                <Option className="capitalize" value={day}>
                                    {day.replaceAll("-", " ")}
                                </Option>
                            ))}
                        </Select>
                        <Label>Slot Info</Label>
                        <Input
                            className="mb-4"
                            value={event.slot}
                            placeholder="8:00 A.M. to 9:00 A.M."
                            onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                                setEvent((currentEvent) => ({
                                    ...currentEvent,
                                    slot: evt.target.value,
                                }))
                            }
                        />
                        <Label>Title</Label>
                        <Input
                            className="mb-4"
                            value={event.title}
                            placeholder="States of React"
                            onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                                setEvent((currentEvent) => ({
                                    ...currentEvent,
                                    title: evt.target.value,
                                }))
                            }
                        />
                        <Button variant="primary" onClick={handleAddEvent}>
                            Add
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AddEvent;
