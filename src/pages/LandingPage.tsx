import NavBar from '../components/NavBar';
import PageDetails from '../components/PageDetails';
import HeroSection from '../components/HeroSection';
import Marquee from '../components/Marquee';

function LandingPage() {
    return (
        <div className="bg-bg-secondary page p-4">
            <NavBar />
            <PageDetails>
                <HeroSection />
                <Marquee />
            </PageDetails>
        </div>
    );
}

export default LandingPage;
