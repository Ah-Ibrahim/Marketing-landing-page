import LandingJSONData from '../data/data.json';
import type { LandingPageJSONType } from '../types/PageTypes';

export function mapLandingPageData() {
    const data: LandingPageJSONType = LandingJSONData;

    return {
        marqueeData: data.teamsLogoSrc,
        mainFeaturesShowcaseData: data.mainFeaturesShowcase,
        designShowcaseData: data.designShowcase,
        supportShowcaseData: data.supportShowcase,
    };
}
