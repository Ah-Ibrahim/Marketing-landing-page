import { createContext } from 'react';

interface PageContextType {
    teamsLogoSrc: { src: string }[];
    mainFeatures: {
        iconSvgSrc: string;
        iconAlt: string;
        title: string;
        description: string;
    }[];
}

export const PageContext = createContext<PageContextType | null>(null);
