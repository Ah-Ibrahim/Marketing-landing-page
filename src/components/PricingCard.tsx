import mapCost from '../mappers/mapCost';
import { currencySymbolMapper } from '../types/CurrencySchemas';
import type { PlanType } from '../types/PageSchemas';
import type { PricingType } from '../types/PricingSchemas';

type PricingCardProps = PlanType & {
    pricingType: PricingType;
};

function PricingCard({
    title,
    description,
    features,
    pricing,
    isFeatured,
    pricingType,
}: PricingCardProps) {
    const currencySymbol = currencySymbolMapper[pricing.currency];
    const cost = `${pricingType === 'monthly' ? mapCost(pricing.monthly, currencySymbol) : mapCost(pricing.annually, currencySymbol)}`;
    const perPeriod = pricingType.slice(0, -2);

    const items = features.map((feature) => (
        <div key={feature.id} className="flex flex-row items-center gap-x-2">
            <div className="icon bg-icon-brand-background w-6.25 shrink-0 rounded-full">
                <img
                    src={feature.iconSvgSrc}
                    alt={feature.iconAlt}
                    className="h-full w-full"
                />
            </div>
            <div className="text-primary">{feature.description}</div>
        </div>
    ));

    return (
        <div
            className={`overflow-hidden rounded-lg border ${isFeatured ? 'border-line-brand-solid shadow-2xl' : 'border-line-primary shadow'} lg:flex lg:flex-col`}
        >
            {isFeatured && (
                <div className="text-brand bg-bg-brand-subtle mb-4.5 py-3 text-center text-xl font-semibold">
                    Most Popular
                </div>
            )}
            <div className="px-3 py-4 md:px-6 md:py-8 lg:flex lg:flex-col lg:grow-1">
                <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
                <p className="text-primary mb-8">{description}</p>
                <div className={`my-2 ${isFeatured && 'text-brand'}`}>
                    <span className="text-5xl font-semibold">{cost}</span> /
                    {perPeriod}
                </div>
                {pricingType === 'annually' && (
                    <div className="text-primary text-xl line-through">
                        {mapCost(
                            Number((pricing.monthly * 12).toFixed(2)),
                            currencySymbol,
                        )}
                    </div>
                )}
                <div className="text-primary mb-7.75">
                    Prices in {pricing.currency}
                </div>
                <div className="mb-7.5 grid gap-y-5">{items}</div>
                <button
                    className={`btn w-full py-3.5 font-medium ${isFeatured && 'btn--primary'} lg:mt-auto`}
                >
                    Buy now
                </button>
            </div>
        </div>
    );
}

export default PricingCard;
