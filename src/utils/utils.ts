const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const formatAsPrice = (price: number | string) => {
  if (typeof price === "string") {
    return price
  }

  return priceFormatter.format(price);
}