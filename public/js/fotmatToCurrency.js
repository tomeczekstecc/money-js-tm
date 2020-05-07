export function formatToCurrency(amount, charset, style, currency) {
  const formatter = new Intl.NumberFormat(charset, {
    style: style,
    currency: currency,
  });

  const res = formatter.format(amount);
  return res;
}
