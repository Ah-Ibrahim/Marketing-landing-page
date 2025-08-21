import type { ShowcaseType } from '../types/PageSchemas';

function MainFeaturesShowcase({
    opener,
    mainTitle,
    mainDescription,
    features,
}: ShowcaseType) {
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
        <section className="my-6.5 section">
            <div className="mb-6.5 text-center">
                <div className="text-brand text-md mb-3 tracking-wide">
                    {opener}
                </div>
                <h2 className="mb-6 text-3xl font-bold">{mainTitle}</h2>
                <p className="text-primary text-lg">{mainDescription} </p>
            </div>
            <div className="grid">{items}</div>
        </section>
    );
}
export default MainFeaturesShowcase;
