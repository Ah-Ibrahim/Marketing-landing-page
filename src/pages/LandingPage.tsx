import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import MainShowcaseSection from '../components/MainShowcaseSection';
import MarqueeSection from '../components/MarqueeSection';
import NavBar from '../components/NavBar';
import NewsletterSection from '../components/NewsletterSection';
import PageWrapper from '../components/PageWrapper';
import PricingSection from '../components/PricingSection';
import ShowcaseSection from '../components/ShowcaseSection';
import { mapLandingPageData } from '../mappers/mapLandingPageData';

function LandingPage() {
    const {
        marqueeData,
        mainShowcaseData,
        designShowcaseData,
        supportShowcaseData,
        pricingSectionData,
        faqSectionData,
        newsletterSectionData,
        contactSectionData,
    } = mapLandingPageData();

    return (
        <div className="bg-bg-secondary page-layout p-4">
            <NavBar />
            <PageWrapper>
                <HeroSection />
                <MarqueeSection teamsLogoSrc={marqueeData} />
                <MainShowcaseSection {...mainShowcaseData} />
                <ShowcaseSection {...designShowcaseData} />
                <ShowcaseSection {...supportShowcaseData} isLayoutReversed />
                <PricingSection {...pricingSectionData} />
                <FAQSection {...faqSectionData} />
                <NewsletterSection {...newsletterSectionData} />
                <ContactSection {...contactSectionData} />
            </PageWrapper>
            <Footer />
        </div>
    );
}

export default LandingPage;
