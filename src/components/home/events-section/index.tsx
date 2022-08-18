import { Dispatch, FC, SetStateAction, useState } from "react";
import { EVENTS } from "../../../constants/events";

import "./EventsSection.scss";

const CLASSES = {
    "tab-common": "tab p-3 cursor-pointer",
    "tab-active": "text-gray-100 underline font-bold",
    "tab-inactive": "text-gray-200",
    "tab-border": "border-x-4 border-x-emerald-900",
};

type TabKeys = keyof typeof EVENTS;

export const EventsSection = () => {
    const [activeTab, setActiveTab] = useState<TabKeys>("day-one");

    return (
        <section
            id="events-section"
            className="w-full h-screen bg-emerald-500 items-stretch p-4 gap-12"
        >
            <h2 className="text-center text-7xl text-gray-100">Events</h2>
            <Tabs {...{ activeTab, setActiveTab }} />
            <article className="tab-group rounded-lg shadow bg-white p-4 w-full md:w-1/2 m-auto h-full flex flex-col">
                <h3 className="text-gray-600 font-bold capitalize text-center text-3xl">
                    {activeTab.replaceAll("-", " ")}
                </h3>
                <div className="flex-1 overflow-auto">
                    {EVENTS[activeTab].map((event) => (
                        <div
                            className="event-slot p-4 border-b border-b-gray-300 m-4 grid"
                            key={event.id}
                        >
                            <span className="border-r border-r-gray-300">
                                <i>{event.slot}</i>
                            </span>
                            <p className="px-4">{event.title}</p>
                        </div>
                    ))}
                </div>
                <button className="w-full bg-emerald-500 p-4 rounded text-gray-100">
                    Buy Passes
                </button>
            </article>
        </section>
    );
};

type TabsProps = {
    activeTab: TabKeys;
    setActiveTab: Dispatch<SetStateAction<TabKeys>>;
};

const Tabs: FC<TabsProps> = ({ activeTab, setActiveTab }) => (
    <div className="tabs flex justify-center">
        <div
            className={`${CLASSES["tab-common"]} ${
                activeTab === "day-one"
                    ? CLASSES["tab-active"]
                    : CLASSES["tab-inactive"]
            }`}
            onClick={() => setActiveTab("day-one")}
        >
            Day One
        </div>
        <div
            className={`${CLASSES["tab-common"]} ${
                activeTab === "day-two"
                    ? CLASSES["tab-active"]
                    : CLASSES["tab-inactive"]
            } ${CLASSES["tab-border"]}`}
            onClick={() => setActiveTab("day-two")}
        >
            Day Two
        </div>
        <div
            className={`${CLASSES["tab-common"]} ${
                activeTab === "day-three"
                    ? CLASSES["tab-active"]
                    : CLASSES["tab-inactive"]
            }`}
            onClick={() => setActiveTab("day-three")}
        >
            Day Three
        </div>
    </div>
);
