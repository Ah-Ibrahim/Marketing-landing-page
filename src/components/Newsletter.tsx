import type { SubscriptionType } from '../types/PageSchemas';

type NewsletterProps = SubscriptionType;

function Newsletter({ mainTitle, imgSrc, imgAlt, features }: NewsletterProps) {
    const items = features.map((feature) => (
        <div key={feature.id} className="flex flex-row items-center gap-x-2">
            <div className="icon bg-icon-brand-background w-6.25 shrink-0 rounded-full">
                <img
                    src={feature.iconSvgSrc}
                    alt={feature.iconAlt}
                    className="h-full w-full"
                />
            </div>
            <div className="text-primary text-lg">{feature.description}</div>
        </div>
    ));

    return (
        <section className="flex section flex-col gap-y-4 mb-22.5">
            <div>
                <div>
                    <h2 className="mb-8.5 text-3xl font-semibold">
                        {mainTitle}
                    </h2>
                </div>
                <div className="mb-12 space-y-5">{items}</div>
                <form
                    action=""
                    className="grid gap-y-3"
                    method="POST"
                    // Preventing submitting form
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        className="bg-form-background border-form-border focus:border-brand caret-brand rounded-sm border-2 p-2 text-sm outline-0"
                        type="email"
                        name="userEmail"
                        placeholder="Enter your email"
                    />
                    <div className="text-primary">
                        We only send you the best! No spam.
                    </div>
                    <button className="btn btn--primary py-3 text-sm">
                        Subscribe
                    </button>
                </form>
            </div>
            <div className="aspect-[9/8] overflow-hidden rounded-lg">
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    className="h-full w-full object-cover"
                />
            </div>
        </section>
    );
}
export default Newsletter;
