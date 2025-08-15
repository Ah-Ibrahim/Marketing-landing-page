export type srcArr = { src: string }[];

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
    imgSrc?: string;
    imgAlt?: string;
    features: Feature[];
}

export interface JSONDataType {
    teamsLogoSrc: srcArr;
    mainFeaturesShowcase: ShowcaseType;
    designShowcase: ShowcaseType;
    supportShowcase: ShowcaseType;
}
