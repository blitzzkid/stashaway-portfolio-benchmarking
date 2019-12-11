import { calculatePortfolioValue } from "../calculatePortfolioValue.js/calculatePortfolioValue";

export const createChartData = (etfApiData, currency) => {
  const dateOfSharePurchase = findDateOfSharePurchase(etfApiData);
  const purchasedPriceOfShare = etfApiData.history[dateOfSharePurchase].close;
  const chartData = fillInChartData(
    etfApiData.history,
    purchasedPriceOfShare,
    currency
  );
  return chartData;
};

export const findDateOfSharePurchase = etfApiData => {
  return Object.keys(etfApiData.history)[
    Object.keys(etfApiData.history).length - 1
  ];
};

const fillInChartData = (
  etfApiDataHistory,
  purchasedPriceOfShare,
  currency
) => {
  const chartData = [];
  Object.entries(etfApiDataHistory).forEach(([key, value]) =>
    chartData.push({
      x: new Date(key),
      y: calculatePortfolioValue(
        100000,
        purchasedPriceOfShare,
        value.close,
        currency,
        key
      )
    })
  );
  return chartData;
};
