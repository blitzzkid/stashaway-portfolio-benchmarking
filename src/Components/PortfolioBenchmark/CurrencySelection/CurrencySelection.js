import React from "react";
import PropTypes from "prop-types";
import "./CurrencySelection.css";

export const CurrencySelection = ({ currency, handleCurrencyChange }) => {
  return (
    <div className="currency_selectors">
      <div
        onClick={() => handleCurrencyChange("SGD")}
        className={
          currency === "SGD" ? "currency__selected" : "currency__unselected"
        }
      >
        <span>SGD</span>
      </div>
      <div
        onClick={() => handleCurrencyChange("USD")}
        className={
          currency === "USD" ? "currency__selected" : "currency__unselected"
        }
      >
        <span>USD</span>
      </div>
    </div>
  );
};

CurrencySelection.propTypes = {
  handleCurrencyChange: PropTypes.func,
  currency: PropTypes.string
};
