import JSONData from '../data/data.json';
import type { JSONDataType } from '../types/PageTypes';

export function mapPageData() {
    const data: JSONDataType = JSONData;

    return {
        marqueeData: data.teamsLogoSrc,
        mainFeaturesShowcaseData: data.mainFeaturesShowcase,
        designShowcaseData: data.designShowcase,
        supportShowcaseData: data.supportShowcase,
    };
}
