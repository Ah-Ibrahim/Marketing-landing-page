import z from 'zod';
import { CurrencySchema } from './CurrencySchemas';

export const PricingRecordSchema = z.object({
    monthly: z.number().gte(0),
    annually: z.number().gte(0),
    currency: CurrencySchema,
});

// Types

export type PricingRecord = z.infer<typeof PricingRecordSchema>;
export type PricingType = 'monthly' | 'annually';
