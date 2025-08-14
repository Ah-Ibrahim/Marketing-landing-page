import data from '../data/data.json';

function MainFeatures() {
    const items = data['mainFeatures'].map((feature, index) => (
        <div className="text-center" key={index}>
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
        <section className="my-6.5 max-w-(--max-width-content) px-(--content-padding-side)">
            <div className="mb-11 text-center">
                <div className="text-brand text-md mb-3 tracking-wide">
                    Premium abstract images
                </div>
                <h2 className="mb-6 text-3xl font-bold">
                    Easy access to top quality images
                </h2>
                <p className="text-primary text-lg">
                    In a world where storytelling constantly evolves, we lead
                    with groundbreaking images designed for your presentation
                    excellence.
                </p>
            </div>
            <div className="grid gap-y-7.5">{items}</div>
        </section>
    );
}
export default MainFeatures;
