import heroImageSrc from '../assets/images/prism.png';

function HeroSection() {
    return (
        <section className="grid max-w-(--max-width-content) gap-12 bg-transparent px-(--content-padding-side) lg:grid-cols-12">
            <div className="lg:col-span-6">
                <h1 className="mb-4 text-4xl font-semibold tracking-wide">
                    Well crafted abstract gradient
                </h1>
                <p className="text-primary mb-8 text-xl">
                    High quality abstract images for your projects, wallpaper
                    and presentations.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <a href="#" className="btn py-3">
                        Learn more
                    </a>
                    <a href="#" className="btn btn--primary py-3">
                        See pricing
                    </a>
                </div>
            </div>
            <div className="rounded-lg bg-[#f4f4f4] py-3 lg:col-span-6">
                <img src={heroImageSrc} alt="Hero abstract image" />
            </div>
        </section>
    );
}

export default HeroSection;
