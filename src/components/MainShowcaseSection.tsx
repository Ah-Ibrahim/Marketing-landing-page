import type { ShowcaseType } from '../types/PageSchemas';

type MainShowcaseSectionProps = ShowcaseType;

function MainShowcaseSection({
    opener,
    mainTitle,
    mainDescription,
    features,
}: MainShowcaseSectionProps) {
    const items = features.map((feature) => (
        <div className="py-3.75 text-center" key={feature.id}>
            <img
                className="feature-icon mx-auto mb-5"
                src={feature.iconSvgSrc}
                alt={feature.iconAlt}
            />
            <h3 className="mb-2 text-xl tracking-wide">{feature.title}</h3>
            <p className="text-primary">{feature.description}</p>
        </div>
    ));

    return (
        <section className="mb-20.5 section lg:mb-28">
            <div className="mb-6.5 text-center">
                <div className="text-brand text-md mb-3 tracking-wide">
                    {opener}
                </div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
                    {mainTitle}
                </h2>
                <p className="text-primary text-lg">{mainDescription} </p>
            </div>
            <div className="grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                {items}
            </div>
        </section>
    );
}
export default MainShowcaseSection;
