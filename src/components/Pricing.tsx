import { useState } from 'react';
import type { PricingSectionType } from '../types/PageSchemas';
import type { PricingType } from '../types/PricingSchemas';
import PricingCard from './PricingCard';

type PricingProps = PricingSectionType;

function Pricing({ opener, mainDescription, mainTitle, plans }: PricingProps) {
    const [selectedPricingType, setSelectedPricingType] =
        useState<PricingType>('monthly');

    const selectPricingType = (type: PricingType) => {
        setSelectedPricingType(type);
    };

    const cards = plans.map((plan) => (
        <PricingCard
            key={plan.id}
            {...plan}
            pricingType={selectedPricingType}
        />
    ));

    return (
        <section className="my-6.5 max-w-(--max-width-content) px-(--content-padding-side)">
            <div className="mb-9.5 text-center">
                <div className="text-brand text-md mb-3 tracking-wide">
                    {opener}
                </div>
                <h2 className="mb-6 text-3xl font-bold">{mainTitle}</h2>
                <p className="text-primary text-lg">{mainDescription}</p>
            </div>
            <div className="mb-12 grid grid-cols-2 gap-x-4">
                <button
                    className="btn py-2"
                    onClick={() => selectPricingType('monthly')}
                    disabled={selectedPricingType === 'monthly'}
                >
                    Monthly
                </button>
                <button
                    className="btn py-2"
                    onClick={() => selectPricingType('annually')}
                    disabled={selectedPricingType === 'annually'}
                >
                    Annually
                </button>
            </div>
            <div className="space-y-7.5">{cards}</div>
        </section>
    );
}
export default Pricing;
