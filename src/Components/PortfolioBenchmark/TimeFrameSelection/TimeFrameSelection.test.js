import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TimeFrameSelection } from "./TimeFrameSelection";

describe("It renders the time frame selectors correctly", () => {
  it("Shows the time frame '1 month'", () => {
    const { getByText } = render(<TimeFrameSelection />);
    expect(getByText("1 month")).toBeInTheDocument();
  });

  it("Shows the time frame 'Max'", () => {
    const { getByText } = render(<TimeFrameSelection />);
    expect(getByText("Max")).toBeInTheDocument();
  });
});
