import NavBar from '../components/NavBar';
import PageDetails from '../components/PageDetails';
import HeroSection from '../components/HeroSection';
import Marquee from '../components/Marquee';
import MainFeaturesShowcase from '../components/MainFeatures';
import Showcase from '../components/Showcase';

import { mapLandingPageData } from '../mappers/mapLandingPageData';
import Pricing from '../components/Pricing';
import FAQSection from '../components/FAQSection';

function LandingPage() {
    const {
        marqueeData,
        mainFeaturesShowcaseData,
        designShowcaseData,
        supportShowcaseData,
        pricingSectionData,
        FAQSectionData,
    } = mapLandingPageData();

    return (
        <div className="bg-bg-secondary page-layout p-4">
            <NavBar />
            <PageDetails>
                <HeroSection />
                <Marquee teamsLogoSrc={marqueeData} />
                <MainFeaturesShowcase {...mainFeaturesShowcaseData} />
                <Showcase {...designShowcaseData} />
                <Showcase {...supportShowcaseData} isLayoutReversed />
                <Pricing {...pricingSectionData} />
                <FAQSection {...FAQSectionData} />
            </PageDetails>
        </div>
    );
}

export default LandingPage;
