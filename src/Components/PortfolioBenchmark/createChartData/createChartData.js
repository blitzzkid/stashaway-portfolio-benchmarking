import { calculatePortfolioValue } from "../calculatePortfolioValue.js/calculatePortfolioValue";

export const createChartData = etfApiData => {
  const chartData = [];
  const dateOfSharePurchase = findDateOfSharePurchase(etfApiData);
  const purchasedPriceOfShare = etfApiData.history[dateOfSharePurchase].close;
  Object.entries(etfApiData.history).forEach(([key, value]) =>
    chartData.push({
      x: new Date(key),
      y: calculatePortfolioValue(100000, purchasedPriceOfShare, value.close)
    })
  );
  return chartData;
};

export const findDateOfSharePurchase = etfApiData => {
  return Object.keys(etfApiData.history)[
    Object.keys(etfApiData.history).length - 1
  ];
};
