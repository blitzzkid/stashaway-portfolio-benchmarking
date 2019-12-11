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
  filterChartDataByTimeFrame,
  returnAllChartData
} from "./filterChartDataByTimeFrame/filterChartDataByTimeFrame";

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
    const currency = this.state.currency;
    await this.setState({
      stashAwayPortfolioData: createChartData(sampleSnP500Data, currency),
      benchmarkPortfolioData: createChartData(sampleVanguardData, currency)
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
    const currency = this.state.currency;
    this.setState({
      stashAwayPortfolioData: createChartData(sampleSnP500Data, currency),
      benchmarkPortfolioName: "40% VTSMX (Stock) + 60% VBMFX (Bond)",
      benchmarkPortfolioStockName: "VTSMX - Vanguard Total Stock Market Index",
      benchmarkPortfolioBondName: "VTBMX - Vanguard Total Bond Market Index",
      benchmarkPortfolioData: createChartData(sampleVanguardData, currency)
    });
    this.updateStashAwayAndBenchmarkPortfolioData();
  };

  setiShares2080Data = () => {
    const currency = this.state.currency;
    this.setState({
      stashAwayPortfolioData: createChartData(sampleSnP500Data, currency),
      benchmarkPortfolioName: "20% IVV (Stock) + 80% GOVT (Bond)",
      benchmarkPortfolioStockName: "IVV - iShares Core S&P 500 ETF",
      benchmarkPortfolioBondName: "GOVT - iShares U.S. Treasury Bond ETF",
      benchmarkPortfolioData: createChartData(sampleiSharesData, currency)
    });
    this.updateStashAwayAndBenchmarkPortfolioData();
  };

  handleTimeFrameSelected = async timeFrame => {
    const currency = this.state.currency;
    await this.setState({
      timeFrame
    });
    switch (this.state.benchmarkPortfolioName) {
      case "40% VTSMX (Stock) + 60% VBMFX (Bond)":
        this.setState({
          stashAwayPortfolioData: createChartData(sampleSnP500Data, currency),
          benchmarkPortfolioData: createChartData(sampleVanguardData, currency)
        });
        break;
      case "20% IVV (Stock) + 80% GOVT (Bond)":
        this.setState({
          stashAwayPortfolioData: createChartData(sampleSnP500Data, currency),
          benchmarkPortfolioData: createChartData(sampleiSharesData, currency)
        });
        break;
      default:
        this.setState({
          stashAwayPortfolioData: createChartData(sampleSnP500Data, currency),
          benchmarkPortfolioData: createChartData(sampleVanguardData, currency)
        });
    }
    this.updateStashAwayAndBenchmarkPortfolioData();
  };

  filterChartDataBasedOnTimeFrame = (portfolioName, etfData) => {
    switch (this.state.timeFrame) {
      case "1-month":
        this.setState({
          [portfolioName]: filterChartDataByTimeFrame("1-month", etfData)
        });
        break;
      case "6-months":
        this.setState({
          [portfolioName]: filterChartDataByTimeFrame("6-months", etfData)
        });
        break;
      case "year-to-date":
        this.setState({
          [portfolioName]: filterChartDataByTimeFrame("year-to-date", etfData)
        });
        break;
      case "1-year":
        this.setState({
          [portfolioName]: filterChartDataByTimeFrame("1-year", etfData)
        });
        break;
      case "5-years":
        this.setState({
          [portfolioName]: filterChartDataByTimeFrame("5-years", etfData)
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

  handleCurrencyChange = async currency => {
    this.setState({ currency });
    switch (this.state.benchmarkPortfolioName) {
      case "40% VTSMX (Stock) + 60% VBMFX (Bond)":
        await this.setState({
          stashAwayPortfolioData: createChartData(sampleSnP500Data, currency),
          benchmarkPortfolioData: createChartData(sampleVanguardData, currency)
        });
        break;
      case "20% IVV (Stock) + 80% GOVT (Bond)":
        await this.setState({
          stashAwayPortfolioData: createChartData(sampleSnP500Data, currency),
          benchmarkPortfolioData: createChartData(sampleiSharesData, currency)
        });
        break;
      default:
        await this.setState({
          stashAwayPortfolioData: createChartData(sampleSnP500Data, currency),
          benchmarkPortfolioData: createChartData(sampleVanguardData, currency)
        });
    }
    this.updateStashAwayAndBenchmarkPortfolioData();
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
          currency={this.state.currency}
          benchmarkPortfolioName={this.state.benchmarkPortfolioName}
          benchmarkPortfolioStockName={this.state.benchmarkPortfolioStockName}
          benchmarkPortfolioBondName={this.state.benchmarkPortfolioBondName}
        />
      </div>
    );
  }
}
