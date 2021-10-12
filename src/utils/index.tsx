export const formatCurrency = (currency: string) =>
  new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency,
  }).format;
