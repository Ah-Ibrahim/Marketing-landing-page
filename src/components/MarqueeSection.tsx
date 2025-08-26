import type { IconSrcArray } from '../types/PageSchemas';

interface MarqueeSectionProps {
    teamsLogoSrc: IconSrcArray;
}

function MarqueeSection({ teamsLogoSrc }: MarqueeSectionProps) {
    const items = teamsLogoSrc.map((srcObj, index) => (
        <img
            key={srcObj.id}
            src={srcObj.src}
            alt={`Company's logo ${index + 1}`}
            className="shrink-0"
        />
    ));

    return (
        <section className="mb-30.5 w-full space-y-12 overflow-x-hidden lg:mb-42.5">
            <div className="text-primary text-center">
                Used by teams that you love
            </div>
            <div className="inside-shadow">
                <div className="marquee animate-marquee flex w-[max-content] gap-(--marquee-spacing) ps-(--marquee-spacing) hover:[animation-play-state:paused]">
                    {items}
                    {items} {/* Items duplicated for animation */}
                </div>
            </div>
        </section>
    );
}
export default MarqueeSection;
