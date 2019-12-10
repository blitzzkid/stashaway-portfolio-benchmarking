import React from "react";
import PropTypes from "prop-types";

export class BenchmarkSelection extends React.Component {
  onBenchmarkPortfolioChange = event => {
    this.props.handleBenchmarkPortfolioChange(event.target.value);
  };

  render() {
    return (
      <div>
        <div>
          <p>General Investing</p>
          <p>StashAway Risk Index 14%</p>
        </div>
        <p>vs</p>
        <section>
          <select
            id="benchmarkPorfolio"
            name="benchmarkPortfolio"
            onChange={this.onBenchmarkPortfolioChange}
            type="text"
          >
            <option value="">Which benchmark do you want to compare?</option>
            <option value="vanguard4060">
              40% VTSMX (Stock) + 60% VBMFX (Bond)
            </option>
            <option value="ishares2080">
              20% IVV (Stock) + 80% GOVT (Bond)
            </option>
          </select>
        </section>
      </div>
    );
  }
}

BenchmarkSelection.propTypes = {
  handleBenchmarkPortfolioChange: PropTypes.func
};
