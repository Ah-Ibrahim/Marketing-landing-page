import type { CurrencySymbol } from '../types/CurrencySchemas';

export default function mapCost(value: number, currencySymbol: CurrencySymbol) {
    return `${currencySymbol}${value}`;
}
