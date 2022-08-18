import { EventsSection } from "../../../components/home/events-section";
import { KeynoteSpeaker } from "../../../components/home/keynote-speakers";
import { LandingSection } from "../../../components/home/landing-section";

const Home = () => {
    return (
        <>
            <LandingSection />
            <KeynoteSpeaker />
            <EventsSection />
            <footer className="p-12 text-gray-100 bg-teal-900">
                &copy; 2022 - ACME Organization
            </footer>
        </>
    );
};

export default Home;
