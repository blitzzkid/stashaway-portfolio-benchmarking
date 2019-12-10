import { calculatePortfolioValue } from "../calculatePortfolioValue.js/calculatePortfolioValue";

export const createChartData = etfApiData => {
  const chartData = [];
  const dateOfSharePurchase = findDateOfSharePurchase(etfApiData);
  const purchasedPriceOfShare = etfApiData.history[dateOfSharePurchase].close;
  Object.entries(etfApiData.history).forEach(([key, value]) =>
    chartData.push({
      x: new Date(key),
      y: calculatePortfolioValue(1000, purchasedPriceOfShare, value.close)
    })
  );
  return chartData;
};

const findDateOfSharePurchase = etfApiData => {
  return Object.keys(etfApiData.history)[
    Object.keys(etfApiData.history).length - 1
  ];
};
