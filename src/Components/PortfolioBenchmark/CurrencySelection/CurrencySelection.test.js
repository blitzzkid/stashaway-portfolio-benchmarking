import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CurrencySelection } from "./CurrencySelection";

describe("It renders the currency selectors correctly", () => {
  it("Shows the currency 'SGD'", () => {
    const { getByText } = render(<CurrencySelection />);
    expect(getByText("SGD")).toBeInTheDocument();
  });

  it("Shows the currency 'USD'", () => {
    const { getByText } = render(<CurrencySelection />);
    expect(getByText("USD")).toBeInTheDocument();
  });
});
