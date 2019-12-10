import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BenchmarkSelection } from "./BenchmarkSelection";

describe("It renders the Benchmark selection section correctly", () => {
  it("Shows the text 'General Investing'", () => {
    const { getByText } = render(<BenchmarkSelection />);
    expect(getByText("General Investing")).toBeInTheDocument();
  });

  it("Shows the text 'StashAway Risk Index 14%'", () => {
    const { getByText } = render(<BenchmarkSelection />);
    expect(getByText("StashAway Risk Index 14%")).toBeInTheDocument();
  });

  it("Shows the text 'vs'", () => {
    const { getByText } = render(<BenchmarkSelection />);
    expect(getByText("vs")).toBeInTheDocument();
  });

  describe("Tests the clicking of the dropdown", () => {
    it("Selects the option for vanguard's ETF in the dropdown", () => {
      const { getByLabelText } = render(<BenchmarkSelection />);
      const vanguardEtf = getByLabelText("vanguard4060");
      fireEvent.change(vanguardEtf, {
        target: { value: "40% VTSMX (Stock) + 60% VBMFX (Bond)" }
      });
      expect(vanguardEtf.value).toBe("40% VTSMX (Stock) + 60% VBMFX (Bond)");
    });

    it("Selects the option for iShares's ETF in the dropdown", () => {
      const { getByLabelText } = render(<BenchmarkSelection />);
      const vanguardEtf = getByLabelText("ishares2080");
      fireEvent.change(vanguardEtf, {
        target: { value: "20% IVV (Stock) + 80% GOVT (Bond)" }
      });
      expect(vanguardEtf.value).toBe("20% IVV (Stock) + 80% GOVT (Bond)");
    });
  });
});
