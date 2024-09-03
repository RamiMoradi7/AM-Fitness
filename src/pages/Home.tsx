import '@fortawesome/fontawesome-free/css/all.min.css';
import { useTitle } from '../hooks/useTitle';
import About from '../Components/HomeArea/Home/About';
import ContactUs from "../Components/HomeArea/Home/ContactUs";
import HeroSection from "../Components/HomeArea/Home/HeroSection";
import PersonalTraining from '../Components/HomeArea/Home/PersonalTraining';
import HighlightsSection from '../Components/HomeArea/Home/HighlightsSection';


export default function Home(): JSX.Element {
    useTitle("AM Fitness");

    return (
        <div id='home' className="text-gray-800 antialiased overflow-x-hidden">
            <HeroSection />
            <About />
            <PersonalTraining />
            <HighlightsSection />
            <ContactUs />
        </div>
    );
}
