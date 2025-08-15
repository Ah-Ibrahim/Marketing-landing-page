import type { Currency } from './CurrencyTypes';

type PricingType = 'monthly' | 'annually';

export type PricingRecord = Record<PricingType, number> & {
    currency: Currency;
};
