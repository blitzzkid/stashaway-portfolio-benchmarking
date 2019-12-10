import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Navigation } from "./Navigation";

describe("It renders the navigation section correctly", () => {
  it("Shows the navigation heading 'Overview'", () => {
    const { getByTestId } = render(<Navigation />);
    expect(getByTestId("overview-heading")).toBeInTheDocument();
  });

  it("Shows the navigation heading for 'General investing'", () => {
    const { getByText } = render(<Navigation />);
    expect(getByText("General investing")).toBeInTheDocument();
  });

  it("Shows the navigation link for 'Overview'", () => {
    const { getByTestId } = render(<Navigation />);
    expect(getByTestId("overview-link")).toBeInTheDocument();
  });

  it("Shows the navigation link for 'Assets'", () => {
    const { getByText } = render(<Navigation />);
    expect(getByText("Assets")).toBeInTheDocument();
  });

  it("Shows the navigation link for 'Projection'", () => {
    const { getByText } = render(<Navigation />);
    expect(getByText("Projection")).toBeInTheDocument();
  });

  it("Shows the navigation link for 'About portfolio'", () => {
    const { getByText } = render(<Navigation />);
    expect(getByText("About portfolio")).toBeInTheDocument();
  });

  it("Shows the navigation link for 'More actions'", () => {
    const { getByText } = render(<Navigation />);
    expect(getByText("More actions")).toBeInTheDocument();
  });
});
