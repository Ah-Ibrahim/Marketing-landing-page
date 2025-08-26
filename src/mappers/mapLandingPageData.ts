import LandingJSONData from '../data/data.json';
import {
    LandingPageJSONSchema,
    type LandingPageJSONType,
} from '../types/PageSchemas';

export function mapLandingPageData() {
    const data: LandingPageJSONType =
        LandingPageJSONSchema.parse(LandingJSONData);

    return {
        marqueeData: data.teamsLogoSrc,
        mainShowcaseData: data.mainShowcase,
        designShowcaseData: data.designShowcase,
        supportShowcaseData: data.supportShowcase,
        pricingSectionData: data.pricingSection,
        faqSectionData: data.faqSection,
        newsletterSectionData: data.newsletterSection,
        contactSectionData: data.contactSection,
    };
}
