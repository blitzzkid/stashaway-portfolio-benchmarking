import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TimeFrameSelection } from "./TimeFrameSelection";

describe("It renders the time frame selectors correctly", () => {
  it("Shows the time frame '1 month'", () => {
    const { getByText } = render(<TimeFrameSelection />);
    expect(getByText("1 month")).toBeInTheDocument();
  });

  it("Shows the time frame '6 months'", () => {
    const { getByText } = render(<TimeFrameSelection />);
    expect(getByText("6 months")).toBeInTheDocument();
  });

  it("Shows the time frame 'Year-to-date'", () => {
    const { getByText } = render(<TimeFrameSelection />);
    expect(getByText("Year-to-date")).toBeInTheDocument();
  });

  it("Shows the time frame '1 year'", () => {
    const { getByText } = render(<TimeFrameSelection />);
    expect(getByText("1 year")).toBeInTheDocument();
  });

  it("Shows the time frame '5 years'", () => {
    const { getByText } = render(<TimeFrameSelection />);
    expect(getByText("5 years")).toBeInTheDocument();
  });

  it("Shows the time frame 'Max'", () => {
    const { getByText } = render(<TimeFrameSelection />);
    expect(getByText("Max")).toBeInTheDocument();
  });
});
