const { calculatePortfolioValue } = require("./calculatePortfolioValue");

describe("Calculates the portfolio value with principal sum and current ETF values", () => {
  it("should return 989.57 with net deposit of 1000, purchase price of 95.9 and current price of 94.9", () => {
    expect(calculatePortfolioValue(1000, 95.9, 94.9)).toBe(989.57);
  });
});
