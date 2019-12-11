export const calculatePortfolioValue = (
  netDepositsInSGD,
  purchasedPriceOfShareInUSD,
  currentPricePerShareInUSD,
  currencySelected
) => {
  const exchangeRateForUSDSGD = 1.36;
  const netDepositsInUSD = netDepositsInSGD / exchangeRateForUSDSGD;
  const numberOfSharesHeld = netDepositsInUSD / purchasedPriceOfShareInUSD;
  const portfolioValueInUSD = Number(
    (numberOfSharesHeld * currentPricePerShareInUSD).toFixed(2)
  );
  if (currencySelected === "USD") {
    return portfolioValueInUSD;
  } else if (currencySelected === "SGD") {
    return portfolioValueInUSD * exchangeRateForUSDSGD;
  }
};
