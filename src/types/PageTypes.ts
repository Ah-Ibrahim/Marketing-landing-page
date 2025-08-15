import type { PricingRecord } from './PricingTypes';

export type IconSrcArray = { src: string }[];

interface Feature {
    iconSvgSrc: string;
    iconAlt: string;
    title?: string;
    description: string;
}

export interface SectionType {
    opener: string;
    mainTitle: string;
    mainDescription: string;
}

export interface ShowcaseType extends SectionType {
    imgSrc?: string;
    imgAlt?: string;
    features: Feature[];
}

export interface LandingPageJSONType {
    teamsLogoSrc: IconSrcArray;
    mainFeaturesShowcase: ShowcaseType;
    designShowcase: ShowcaseType;
    supportShowcase: ShowcaseType;
}

interface Plan {
    title: string;
    description: string;
    features: Feature[];
    pricing: PricingRecord;
    isFeatured: boolean;
}
export interface PricingSectionType extends SectionType {
    plans: Plan[];
}
