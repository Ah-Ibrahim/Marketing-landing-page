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
        <section className="mb-6.5 section lg:mt-28 lg:mb-8">
            <div className="mb-9.5 text-center">
                <div className="text-brand text-md mb-3 tracking-wide">
                    {opener}
                </div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
                    {mainTitle}
                </h2>
                <p className="text-primary text-lg">{mainDescription}</p>
            </div>
            <div className="mb-12 space-x-4 mx-auto flex w-max">
                <button
                    className="btn py-2.5 px-7.5"
                    onClick={() => selectPricingType('monthly')}
                    disabled={selectedPricingType === 'monthly'}
                >
                    Monthly
                </button>
                <button
                    className="btn py-2.5 px-7.5"
                    onClick={() => selectPricingType('annually')}
                    disabled={selectedPricingType === 'annually'}
                >
                    Annually
                </button>
            </div>
            <div className="max-md:space-y-7.5 lg:grid lg:grid-cols-3 lg:gap-x-8">
                {cards}
            </div>
        </section>
    );
}
export default Pricing;
