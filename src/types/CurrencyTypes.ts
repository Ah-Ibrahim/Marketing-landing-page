export type Currency = 'USD' | 'EGP';
export type CurrencySymbol = '$' | 'EGP.';
export type CurrencySymbolMap = Record<Currency, CurrencySymbol>;

export const currencyMapper: CurrencySymbolMap = {
    USD: '$',
    EGP: 'EGP.',
};
