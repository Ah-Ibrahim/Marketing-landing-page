import z from 'zod';

export const CurrencySchema = z.literal(['USD', 'EGP']);

// Types

export type Currency = z.infer<typeof CurrencySchema>;
export type CurrencySymbol = '$' | 'EGP.';

export type CurrencySymbolMap = Record<Currency, CurrencySymbol>;

export const currencySymbolMapper: CurrencySymbolMap = {
    USD: '$',
    EGP: 'EGP.',
};
