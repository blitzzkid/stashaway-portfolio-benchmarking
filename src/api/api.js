import axios from "./axios";

export const fetchMSCIWorldETF = async () => {
  const ticker = "URTH";
  const response = await axios.get(
    `/history?symbol=${ticker}&sort=newest&api_token=${process.env.REACT_APP_MSCI_ETF_TICKER_TOKEN}`,
  );
  return response.data;
};
