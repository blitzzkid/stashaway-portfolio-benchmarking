import { sampleUSDSGDData } from "../../../assets/sampleData/sampleUSDSGDData";
const FIXED_USD_SGD_EXCHANGE_RATE = 1.36;

export const calculatePortfolioValue = (
  netDepositsInSGD,
  purchasedPriceOfShareInUSD,
  currentPricePerShareInUSD,
  currencySelected,
  dateOfDataPoint
) => {
  const exchangeRateForUSDSGD = findExchangeRateOfThatDate(dateOfDataPoint);
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

const findExchangeRateOfThatDate = date => {
  if (typeof date !== "undefined") {
    return Object.entries(sampleUSDSGDData.history).find(
      ([key]) => key === date
    )[1];
  } else {
    return FIXED_USD_SGD_EXCHANGE_RATE;
  }
};
