import { createChartData, findDateOfSharePurchase } from "./createChartData";

describe("Creates the chart data from raw API data", () => {
  const sampleiSharesData = {
    name: "URTH",
    history: {
      "2019-12-10": {
        open: "96.85",
        close: "96.71",
        high: "96.95",
        low: "96.45",
        volume: "100262"
      },
      "2019-12-09": {
        open: "97.03",
        close: "96.75",
        high: "97.23",
        low: "96.75",
        volume: "90409"
      },
      "2019-12-06": {
        open: "97.09",
        close: "97.10",
        high: "97.27",
        low: "97.00",
        volume: "134338"
      }
    }
  };
  it("should return the chart data in x and y coordinates", () => {
    expect(createChartData(sampleiSharesData, "SGD")).toEqual([
      { x: new Date("2019-12-10"), y: 99598.3488 },
      { x: new Date("2019-12-09"), y: 99639.5432 },
      { x: new Date("2019-12-06"), y: 99999.99760000002 }
    ]);
  });

  it("should find the date of the shares purchase", () => {
    expect(findDateOfSharePurchase(sampleiSharesData)).toBe("2019-12-06");
  });
});
