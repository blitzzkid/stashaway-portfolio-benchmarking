import axios from "./axios";

export const fetchHistoricalEtfDataOfTicker = async ticker => {
  const response = await axios.get(
    `/history?symbol=${ticker}&sort=newest&api_token=${process.env.REACT_APP_TRADING_DATA_TOKEN}`
  );
  return response.data;
};

export const fetchHistoricalCurrencyExchangeRateData = async (
  baseCurrency,
  targetCurrency
) => {
  const response = await axios.get(
    `/forex_history?base=${baseCurrency}&convert_to=${targetCurrency}&sort=newest&api_token=${process.env.REACT_APP_TRADING_DATA_TOKEN}`
  );
  return response.data;
};
