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
        mainFeaturesShowcaseData: data.mainFeaturesShowcase,
        designShowcaseData: data.designShowcase,
        supportShowcaseData: data.supportShowcase,
    };
}
