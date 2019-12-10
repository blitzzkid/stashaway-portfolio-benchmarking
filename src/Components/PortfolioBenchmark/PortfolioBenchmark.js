import React from "react";
import "./PortfolioBenchmark.css";
import { BenchmarkingChart } from "./BenchmarkingChart/BenchmarkingChart";
import { createChartData } from "./createChartData/createChartData";
import { BenchmarkSelection } from "./BenchmarkSelection/BenchmarkSelection";
import { sampleiSharesData } from "../../assets/sampleData/sampleiSharesData";
import { sampleVanguardData } from "../../assets/sampleData/sampleVanguardData";
import { sampleSnP500Data } from "../../assets/sampleData/sampleSnP500Data";
import { TimeFrameSelection } from "./TimeFrameSelection/TimeFrameSelection";
import { CurrencySelection } from "./CurrencySelection/CurrencySelection";
import {
  filterChartDataForOneMonth,
  returnAllChartData
} from "./filterChartData/filterChartData";

export class PortfolioBenchmark extends React.Component {
  constructor() {
    super();
    this.state = {
      chartData: [],
      stashAwayPortfolioData: {},
      benchmarkPortfolioName: "40% VTSMX (Stock) + 60% VBMFX (Bond)",
      benchmarkPortfolioStockName: "VTSMX - Vanguard Total Stock Market Index",
      benchmarkPortfolioBondName: "VTBMX - Vanguard Total Bond Market Index",
      benchmarkPortfolioData: {},
      timeFrame: "max",
      currency: "SGD"
    };
  }

  async componentDidMount() {
    try {
      this.processDefaultChartData();
    } catch (err) {
      return err.message;
    }
  }

  processDefaultChartData = async () => {
    await this.setState({
      stashAwayPortfolioData: createChartData(sampleSnP500Data),
      benchmarkPortfolioData: createChartData(sampleVanguardData)
    });
    const chartData = [
      this.state.stashAwayPortfolioData,
      this.state.benchmarkPortfolioData
    ];
    this.setState({ chartData });
  };

  updateStashAwayAndBenchmarkPortfolioData = async () => {
    await this.filterChartDataBasedOnTimeFrame(
      "stashAwayPortfolioData",
      this.state.stashAwayPortfolioData
    );
    await this.filterChartDataBasedOnTimeFrame(
      "benchmarkPortfolioData",
      this.state.benchmarkPortfolioData
    );
    const chartData = [
      this.state.stashAwayPortfolioData,
      this.state.benchmarkPortfolioData
    ];
    this.setState({ chartData });
  };

  handleBenchmarkPortfolioChange = benchmarkPortfolioSelected => {
    switch (benchmarkPortfolioSelected) {
      case "vanguard4060":
        this.setVanguard4060Data();
        break;
      case "ishares2080":
        this.setiShares2080Data();
        break;
      default:
        this.setVanguard4060Data();
    }
  };

  setVanguard4060Data = () => {
    this.setState({
      stashAwayPortfolioData: createChartData(sampleSnP500Data),
      benchmarkPortfolioName: "40% VTSMX (Stock) + 60% VBMFX (Bond)",
      benchmarkPortfolioStockName: "VTSMX - Vanguard Total Stock Market Index",
      benchmarkPortfolioBondName: "VTBMX - Vanguard Total Bond Market Index",
      benchmarkPortfolioData: createChartData(sampleVanguardData)
    });
    this.updateStashAwayAndBenchmarkPortfolioData();
  };

  setiShares2080Data = () => {
    this.setState({
      stashAwayPortfolioData: createChartData(sampleSnP500Data),
      benchmarkPortfolioName: "20% IVV (Stock) + 80% GOVT (Bond)",
      benchmarkPortfolioStockName: "IVV - iShares Core S&P 500 ETF",
      benchmarkPortfolioBondName: "GOVT - iShares U.S. Treasury Bond ETF",
      benchmarkPortfolioData: createChartData(sampleiSharesData)
    });
    this.updateStashAwayAndBenchmarkPortfolioData();
  };

  handleTimeFrameSelected = async timeFrame => {
    await this.setState({
      timeFrame
    });
    switch (this.state.benchmarkPortfolioName) {
      case "40% VTSMX (Stock) + 60% VBMFX (Bond)":
        this.setState({
          stashAwayPortfolioData: createChartData(sampleSnP500Data),
          benchmarkPortfolioData: createChartData(sampleVanguardData)
        });
        break;
      case "20% IVV (Stock) + 80% GOVT (Bond)":
        this.setState({
          stashAwayPortfolioData: createChartData(sampleSnP500Data),
          benchmarkPortfolioData: createChartData(sampleiSharesData)
        });
        break;
      default:
        this.setState({
          stashAwayPortfolioData: createChartData(sampleSnP500Data),
          benchmarkPortfolioData: createChartData(sampleVanguardData)
        });
    }
    this.updateStashAwayAndBenchmarkPortfolioData();
  };

  filterChartDataBasedOnTimeFrame = (portfolioName, etfData) => {
    switch (this.state.timeFrame) {
      case "1-month":
        this.setState({
          [portfolioName]: filterChartDataForOneMonth(etfData)
        });
        break;
      case "max":
        this.setState({
          [portfolioName]: returnAllChartData(etfData)
        });
        break;
      default:
        this.setState({
          [portfolioName]: returnAllChartData(etfData)
        });
    }
  };

  handleCurrencyChange = currency => {
    this.setState({ currency });
  };

  render() {
    return (
      <div className="portfolioBenchmark__container">
        <h2 className="portfolioBenchmark__heading">Portfolio benchmark</h2>
        <BenchmarkSelection
          handleBenchmarkPortfolioChange={this.handleBenchmarkPortfolioChange}
        />
        <div className="portfolioBenchmark__selectors">
          <TimeFrameSelection
            handleTimeFrameSelected={this.handleTimeFrameSelected}
            timeFrame={this.state.timeFrame}
          />
          <CurrencySelection
            handleCurrencyChange={this.handleCurrencyChange}
            currency={this.state.currency}
          />
        </div>
        <BenchmarkingChart
          data={this.state.chartData}
          benchmarkPortfolioName={this.state.benchmarkPortfolioName}
          benchmarkPortfolioStockName={this.state.benchmarkPortfolioStockName}
          benchmarkPortfolioBondName={this.state.benchmarkPortfolioBondName}
        />
      </div>
    );
  }
}
