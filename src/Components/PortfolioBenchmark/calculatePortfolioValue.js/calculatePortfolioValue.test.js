const { calculatePortfolioValue } = require("./calculatePortfolioValue");

describe("Calculates the portfolio value with principal sum and current ETF values", () => {
  it("should return 989.57 with net deposit of SGD1000, currency of USD, purchase price of 95.9 and current price of 94.9", () => {
    expect(calculatePortfolioValue(1000, 95.9, 94.9, "USD")).toBe(727.63);
  });

  it("should return 706.84 with net deposit of SGD1000, currency of SGD, purchase price of 95.9 and current price of 94.9", () => {
    expect(
      Number(calculatePortfolioValue(1000, 95.9, 94.9, "SGD").toFixed(2))
    ).toBe(989.58);
  });
});
