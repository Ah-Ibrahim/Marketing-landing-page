import NavBar from '../components/NavBar';
import PageDetails from '../components/PageDetails';
import HeroSection from '../components/HeroSection';
import Marquee from '../components/Marquee';
import MainFeaturesShowcase from '../components/MainFeatures';
import Showcase from '../components/Showcase';

import { mapPageData } from '../mappers/mapPageData';

function LandingPage() {
    // TODO I need to add runtime validation system (like zod)
    const {
        marqueeData,
        mainFeaturesShowcaseData,
        designShowcaseData,
        supportShowcaseData,
    } = mapPageData();

    return (
        <div className="bg-bg-secondary page-layout p-4">
            <NavBar />
            <PageDetails>
                <HeroSection />
                <Marquee teamsLogoSrc={marqueeData} />
                <MainFeaturesShowcase {...mainFeaturesShowcaseData} />
                <Showcase {...designShowcaseData} />
                <Showcase {...supportShowcaseData} isLayoutReversed />
            </PageDetails>
        </div>
    );
}

export default LandingPage;
