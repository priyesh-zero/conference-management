import keynote from "../../../assets/videos/keynote.mp4";

export const LandingSection = () => {
    return (
        <section
            id="landing-section"
            className="w-full h-screen flex flex-col items-center justify-center"
        >
            <article className=" z-10 text-center text-gray-100">
                <h1 className="title-text text-9xl my-4 shadow">
                    ACME Conference
                </h1>
                <p className="text-xl my-4">
                    <i>"Conference of the future"</i>
                </p>
                <button className="bg-emerald-500 p-4 rounded-xl">
                    Explore More
                </button>
            </article>
            <div className="underlay absolute top-0 bottom-0 left-0 right-0 overflow-hidden flex place-items-center">
                <video
                    className="w-full pointer-events-none h-screen object-cover"
                    src={keynote}
                    muted
                    autoPlay
                    loop
                />
                <div className="overlay  absolute top-0 bottom-0 left-0 right-0 bg-teal-500 opacity-25 z-10"></div>
            </div>
        </section>
    );
};
