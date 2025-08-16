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
    const items = features.map((feature, index) => (
        <div className="flex flex-row items-start gap-x-4" key={index}>
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

    return (
        <section className="my-14 max-w-(--max-width-content) px-(--content-padding-side)">
            <div className="mb-11 text-center">
                <div className="text-brand text-md mb-3 tracking-wide">
                    {opener}
                </div>
                <h2 className="mb-6 text-3xl font-bold">{mainTitle}</h2>
                <p className="text-primary text-lg">{mainDescription}</p>
            </div>
            <div
                className={`flex ${isLayoutReversed ? 'flex-col-reverse' : 'flex-col'} gap-y-11`}
            >
                <div className="grid gap-9">{items}</div>
                <div className="aspect-[5/3] w-full rounded-lg">
                    <img
                        className="h-full w-full object-cover"
                        src={imgSrc}
                        alt={imgAlt}
                    />
                </div>
            </div>
        </section>
    );
}
export default Showcase;
