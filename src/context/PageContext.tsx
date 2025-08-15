import { createContext } from 'react';

interface Feature {
    iconSvgSrc: string;
    iconAlt: string;
    title: string;
    description: string;
}

export interface ShowcaseType {
    opener: string;
    mainTitle: string;
    mainDescription: string;
    imgSrc: string;
    imgAlt: string;
    features: Feature[];
}

interface PageContextType {
    teamsLogoSrc: { src: string }[];
    mainFeatures: Feature[];
    designShowcase: ShowcaseType;
    supportShowcase: ShowcaseType;
}

export const PageContext = createContext<PageContextType | null>(null);
