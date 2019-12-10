import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from "./Header";

describe("It renders the header correctly", () => {
  it("Shows the StashAway logo", () => {
    const { getByAltText } = render(<Header />);
    expect(getByAltText("stashaway-logo")).toBeInTheDocument();
  });

  it("Shows the menu link 'Home'", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Home")).toBeInTheDocument();
  });

  it("Shows the menu link 'Manage deposits'", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Manage deposits")).toBeInTheDocument();
  });

  it("Shows the menu link 'Refer a friend'", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Refer a friend")).toBeInTheDocument();
  });

  it("Shows the menu link 'Support'", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Support")).toBeInTheDocument();
  });

  it("Shows the menu link 'Oliver'", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Oliver")).toBeInTheDocument();
  });
});
