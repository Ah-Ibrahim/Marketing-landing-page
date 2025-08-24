import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import useMediaQuery from '../hooks/useMediaQuery';
import type { ShowcaseType } from '../types/PageSchemas';

interface ShowcaseProps extends ShowcaseType {
    isLayoutReversed?: boolean;
}

function Showcase({
    opener,
    mainTitle,
    mainDescription,
    imgSrc,
    imgAlt,
    features,
    isLayoutReversed = false,
}: ShowcaseProps) {
    const isDesktop = useMediaQuery('(min-width: 80rem)');

    const items = features.map((feature) => (
        <div className="flex flex-row items-start gap-x-4" key={feature.id}>
            <img
                className="feature-icon mb-5"
                src={feature.iconSvgSrc}
                alt={feature.iconAlt}
            />
            <div className="py-3">
                <h3 className="mb-2 text-xl tracking-wide">{feature.title}</h3>
                <p className="text-primary">{feature.description}</p>
            </div>
        </div>
    ));
    let flexStyle = '';

    if (isDesktop) {
        if (isLayoutReversed) {
            flexStyle = 'flex-row-reverse';
        } else {
            flexStyle = 'flex-row';
        }
    } else {
        if (isLayoutReversed) {
            flexStyle = 'flex-col-reverse';
        } else {
            flexStyle = 'flex-col';
        }
    }

    return (
        <section className="mb-30 section">
            <div className="mb-11 text-center">
                <div className="text-brand text-md mb-3 tracking-wide">
                    {opener}
                </div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
                    {mainTitle}
                </h2>
                <p className="text-primary text-lg">{mainDescription}</p>
            </div>
            <div className={`flex ${flexStyle} gap-y-11 lg:gap-x-8`}>
                <div className="grid gap-9">{items}</div>
                <div className="aspect-[5/3] w-full rounded-lg overflow-hidden">
                    <LazyLoadImage
                        className="h-full w-full object-cover"
                        src={imgSrc}
                        alt={imgAlt}
                        effect="blur"
                    />
                </div>
            </div>
        </section>
    );
}
export default Showcase;
