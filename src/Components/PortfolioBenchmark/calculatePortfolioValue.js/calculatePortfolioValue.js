export const calculatePortfolioValue = (
  netDeposits,
  purchasedPriceOfShare,
  currentPricePerShare
) => {
  const numberOfSharesHeld = netDeposits / purchasedPriceOfShare;
  return Number((numberOfSharesHeld * currentPricePerShare).toFixed(2));
};
