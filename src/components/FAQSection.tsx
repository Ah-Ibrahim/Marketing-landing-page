import type { FAQSectionType } from '../types/PageSchemas';
import FAQCard from './FAQCard';

type FAQSectionProps = FAQSectionType;

function FAQSection({ mainTitle, mainDescription, FAQs }: FAQSectionProps) {
    // TODO: using index is a bad practice, need to use unique ids
    const cards = FAQs.map((FAQ, index) => <FAQCard key={index} {...FAQ} />);

    return (
        <section className="mt-16 max-w-(--max-width-content) px-(--content-padding-side)">
            <div className="mb-5 text-center">
                <h2 className="mb-5 text-3xl font-bold">{mainTitle}</h2>
                <p className="text-primary text-lg">{mainDescription}</p>
            </div>
            <div className="mb-5">{cards}</div>
            <div className="border-line-primary rounded-lg border px-3 py-5 shadow-xl">
                <h3 className="mb-2 text-xl font-semibold">
                    Can't find the answer you're looking for?
                </h3>
                <p className="text-primary mb-3">
                    Reach out to our{' '}
                    <a
                        href="#"
                        className="text-brand transition-colors hover:text-[color:#352c98]"
                    >
                        customer support
                    </a>{' '}
                    team.
                </p>
                <a href="#" className="btn btn--primary py-3">
                    Get in touch
                </a>
            </div>
        </section>
    );
}
export default FAQSection;
