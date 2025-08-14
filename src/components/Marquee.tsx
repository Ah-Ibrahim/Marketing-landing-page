import { useContext } from 'react';
import { PageContext } from '../context/PageContext';

function Marquee() {
    const context = useContext(PageContext);

    if (!context) throw new Error('Context for Marquee is null!');

    const { teamsLogoSrc } = context;

    const items = teamsLogoSrc.map((srcObj, index) => (
        <img
            key={`logo-${index}`}
            src={srcObj.src}
            alt={`Company's logo ${index + 1}`}
            className="shrink-0"
        />
    ));

    return (
        <section className="my-[6rem] w-full space-y-12 overflow-x-hidden">
            <div className="text-primary text-center">
                Used by teams that you love
            </div>

            <div className="marquee animate-marquee flex w-[max-content] gap-(--marquee-spacing) ps-(--marquee-spacing) hover:[animation-play-state:paused]">
                {items}
                {items} {/* Items duplicated for animation */}
            </div>
        </section>
    );
}
export default Marquee;
