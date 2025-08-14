import NavBar from '../components/NavBar';
import PageDetails from '../components/PageDetails';
import HeroSection from '../components/HeroSection';

function LandingPage() {
    return (
        <div className="bg-bg-secondary page p-4">
            <NavBar />
            <PageDetails>
                <HeroSection />
            </PageDetails>
        </div>
    );
}

export default LandingPage;
