import FAQSection from '../components/FAQSection';
import HeroSection from '../components/HeroSection';
import MainFeaturesShowcase from '../components/MainFeatures';
import Marquee from '../components/Marquee';
import NavBar from '../components/NavBar';
import Newsletter from '../components/Newsletter';
import PageDetails from '../components/PageDetails';
import Pricing from '../components/Pricing';
import Showcase from '../components/Showcase';
import { mapLandingPageData } from '../mappers/mapLandingPageData';

function LandingPage() {
    const {
        marqueeData,
        mainFeaturesShowcaseData,
        designShowcaseData,
        supportShowcaseData,
        pricingSectionData,
        FAQSectionData,
        newsletterSectionData,
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
                <Newsletter {...newsletterSectionData} />
            </PageDetails>
        </div>
    );
}

export default LandingPage;
