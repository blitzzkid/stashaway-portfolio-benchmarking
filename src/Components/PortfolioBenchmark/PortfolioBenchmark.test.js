import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { PortfolioBenchmark } from "./PortfolioBenchmark";

describe("It renders the heading correctly", () => {
  it("Shows the heading 'Portfolio benchmark'", () => {
    const { getByText } = render(<PortfolioBenchmark />);
    expect(getByText("Portfolio benchmark")).toBeInTheDocument();
  });
});
