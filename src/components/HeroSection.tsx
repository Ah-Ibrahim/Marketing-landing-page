import heroImageSrc from '../assets/images/prism.png';

function HeroSection() {
    return (
        <section className="grid mb-24 gap-12 lg:items-center bg-transparent  lg:grid-cols-12 section lg:px-20 lg:gap-x-8 lg:mb-38">
            <div className="lg:col-span-5">
                <h1 className="mb-4 text-4xl font-semibold md:text-5xl lg:mb-8">
                    Well crafted abstract gradient
                </h1>
                <p className="text-primary mb-8 text-xl lg:mb-12">
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
            <div className="rounded-lg bg-[#f4f4f4] py-3 lg:col-span-7">
                <img src={heroImageSrc} alt="Hero abstract image" />
            </div>
        </section>
    );
}

export default HeroSection;
