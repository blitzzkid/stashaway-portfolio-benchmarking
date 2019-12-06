import { calculatePortfolioValue } from "../calculatePortfolioValue.js/calculatePortfolioValue";

export const msciWorldEtf = msciApiData => {
  const data = [];
  const dateOfSharePurchase = findDateOfSharePurchase(msciApiData);
  const purchasedPriceOfShare = msciApiData.history[dateOfSharePurchase].close;
  Object.entries(msciApiData.history).forEach(([key, value]) =>
    data.push({
      x: new Date(key),
      y: calculatePortfolioValue(1000, purchasedPriceOfShare, value.close)
    })
  );
  return data;
};

const findDateOfSharePurchase = msciApiData => {
  return Object.keys(msciApiData.history)[
    Object.keys(msciApiData.history).length - 1
  ];
};
