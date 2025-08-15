import type { srcArr } from '../types/PageTypes';

interface MarqueeProps {
    teamsLogoSrc: srcArr;
}

function Marquee({ teamsLogoSrc }: MarqueeProps) {
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
