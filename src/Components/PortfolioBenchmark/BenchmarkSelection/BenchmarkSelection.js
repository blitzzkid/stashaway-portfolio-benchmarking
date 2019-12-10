import React from "react";
import PropTypes from "prop-types";
import "./BenchmarkSelection.css";

export class BenchmarkSelection extends React.Component {
  onBenchmarkPortfolioChange = event => {
    this.props.handleBenchmarkPortfolioChange(event.target.value);
  };

  render() {
    return (
      <div className="benchmarkSelection__container">
        <div className="benchmarkSelection__label">
          <p>General Investing</p>
          <span>StashAway Risk Index 14%</span>
        </div>
        <span className="benchmarkSelection__vs">vs</span>
        <div className="benchmarkSelection__dropdown">
          <div className="benchmarkSelection__dropdownBox">
            <select
              id="benchmarkPorfolio"
              name="benchmarkPortfolio"
              onChange={this.onBenchmarkPortfolioChange}
            >
              <option value="">Which benchmark do you want to compare?</option>
              <option value="vanguard4060">
                40% VTSMX (Stock) + 60% VBMFX (Bond)
              </option>
              <option value="ishares2080">
                20% IVV (Stock) + 80% GOVT (Bond)
              </option>
            </select>
            <div className="dropdown__arrow"></div>
          </div>
        </div>
      </div>
    );
  }
}

BenchmarkSelection.propTypes = {
  handleBenchmarkPortfolioChange: PropTypes.func
};
