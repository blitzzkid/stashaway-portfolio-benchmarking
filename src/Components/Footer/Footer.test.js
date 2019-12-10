import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Footer } from "./Footer";

describe("It renders the footer correctly", () => {
  it("Shows the footer text '© 2019 Asia Wealth Platform Pte Ltd'", () => {
    const { getByText } = render(<Footer />);
    expect(
      getByText("© 2019 Asia Wealth Platform Pte Ltd")
    ).toBeInTheDocument();
  });

  it("Shows the footer text 'Licensed by the Monetary Authority of Singapore'", () => {
    const { getByText } = render(<Footer />);
    expect(
      getByText("Licensed by the Monetary Authority of Singapore")
    ).toBeInTheDocument();
  });

  it("Shows the footer link 'Privacy'", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Privacy")).toBeInTheDocument();
  });

  it("Shows the footer link 'Platform Agreement'", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Platform Agreement")).toBeInTheDocument();
  });

  it("Shows the footer link 'Support'", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Support")).toBeInTheDocument();
  });
});
