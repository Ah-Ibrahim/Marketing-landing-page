import NavBar from '../components/NavBar';
import PageDetails from '../components/PageDetails';
import HeroSection from '../components/HeroSection';
import Marquee from '../components/Marquee';
import MainFeatures from '../components/MainFeatures';
import data from '../data/data.json';
import { PageContext } from '../context/PageContext';
import Showcase from '../components/Showcase';

function LandingPage() {
    return (
        <div className="bg-bg-secondary page-layout p-4">
            <NavBar />
            <PageDetails>
                <PageContext value={data}>
                    <HeroSection />
                    <Marquee />
                    <MainFeatures />
                    <Showcase {...data.designShowcase} />
                    <Showcase {...data.supportShowcase} isReversed={true} />
                </PageContext>
            </PageDetails>
        </div>
    );
}

export default LandingPage;
