import { FC } from "react";
import "./KeynoteSpeakers.scss";

const SPEAKERS = [
    {
        id: "speaker-1",
        name: "Ben Awad",
        topic: "States of React",
        image: "https://source.unsplash.com/320x180/?keynote-speakers,male",
    },
    {
        id: "speaker-2",
        name: "Dan Abromov",
        topic: "Redux Today, Tomorrow",
        image: "https://source.unsplash.com/320x180/?keynote-speakers,boy",
    },
    {
        id: "speaker-3",
        name: "Anjana Vakil",
        topic: "Moving forward with JS",
        image: "https://source.unsplash.com/320x180/?keynote-speakers,female",
    },
    {
        id: "speaker-4",
        name: "Ben Awad",
        topic: "States of React",
        image: "https://source.unsplash.com/320x180/?keynote-speakers,1",
    },
    {
        id: "speaker-5",
        name: "Dan Abromov",
        topic: "Redux Today, Tomorrow",
        image: "https://source.unsplash.com/320x180/?keynote-speakers,2",
    },
    {
        id: "speaker-6",
        name: "Anjana Vakil",
        topic: "Moving forward with JS",
        image: "https://source.unsplash.com/320x180/?keynote-speakers,3",
    },
];

export const KeynoteSpeaker = () => {
    return (
        <section
            id="keynote-speakers"
            className="w-full min-h-screen bg-teal-100 p-12 flex flex-col"
        >
            <h2 className="text-center text-7xl text-emerald-500 my-8">
                Keynote Speakers
            </h2>
            <div className="grid gap-20 items-center justify-center flex-1">
                {SPEAKERS.map((speaker) => (
                    <SpeakerCard key={speaker.id} {...speaker} />
                ))}
            </div>
        </section>
    );
};

type SpeakerCardProps = typeof SPEAKERS[number];

const SpeakerCard: FC<SpeakerCardProps> = ({ name, image, topic }) => (
    <article
        className="speaker-card aspect-video relative bg-cover bg-no-repeat rounded overflow-hidden"
        style={{
            backgroundImage: `url(${image})`,
        }}
    >
        <div className="overlay absolute bottom-0 left-0 right-0 text-center text-gray-50">
            <b>"{topic}"</b>
            <br />- <i>{name}</i>
        </div>
    </article>
);
