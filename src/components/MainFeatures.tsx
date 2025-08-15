import { useContext } from 'react';
import { PageContext } from '../context/PageContext';

function MainFeatures() {
    const context = useContext(PageContext);

    if (!context) throw new Error('Context for MainFeatures is null!');

    const { mainFeatures } = context;

    const items = mainFeatures.map((feature, index) => (
        <div className="py-3.75 text-center" key={index}>
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
            <div className="mb-6.5 text-center">
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
            <div className="grid">{items}</div>
        </section>
    );
}
export default MainFeatures;
