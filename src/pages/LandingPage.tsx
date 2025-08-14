import NavBar from '../components/NavBar';
import PageDetails from '../components/PageDetails';
import HeroSection from '../components/HeroSection';
import Marquee from '../components/Marquee';
import MainFeatures from '../components/MainFeatures';

function LandingPage() {
    return (
        <div className="bg-bg-secondary page-layout p-4">
            <NavBar />
            <PageDetails>
                <HeroSection />
                <Marquee />
                <MainFeatures />
            </PageDetails>
        </div>
    );
}

export default LandingPage;
