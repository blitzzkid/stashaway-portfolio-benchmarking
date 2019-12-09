import React from "react";
import "./App.css";
import { BenchmarkingChart } from "../BenchmarkingChart/BenchmarkingChart";
import { createChartData } from "../createChartData/createChartData";
import { BenchmarkSelection } from "../BenchmarkSelection/BenchmarkSelection";
import { sampleiSharesData } from "../../sampleData/sampleiSharesData";
import { sampleVanguardData } from "../../sampleData/sampleVanguardData";
import { sampleSnP500Data } from "../../sampleData/sampleSnP500Data";
import { TimeFrameSelection } from "../TimeFrameSelection/TimeFrameSelection";
import {
  filterChartDataForOneMonth,
  returnAllChartData
} from "../filterChartData/filterChartData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      chartData: [],
      stashAwayPortfolioData: {},
      benchmarkPortfolio: "vanguard4060",
      benchmarkPortfolioName: "40% VTSMX (Stock) + 60% VBMFX (Bond)",
      benchmarkPortfolioStockName: "VTSMX - Vanguard Total Stock Market Index",
      benchmarkPortfolioBondName: "VTBMX - Vanguard Total Bond Market Index",
      benchmarkPortfolioData: {},
      timeFrame: "max"
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

  processStashAwayAndBenchmarkPortfolioData = async () => {
    const stashAwayRiskIndex14Data = createChartData(sampleSnP500Data);
    const dataOfBenchmarkPortfolioSelected = this.state.benchmarkPortfolioData;
    const benchmarkChartData = createChartData(
      dataOfBenchmarkPortfolioSelected
    );
    await this.filterChartDataBasedOnTimeFrame(
      "stashAwayPortfolioData",
      stashAwayRiskIndex14Data
    );
    await this.filterChartDataBasedOnTimeFrame(
      "benchmarkData",
      benchmarkChartData
    );
    const stashAwayRiskIndex14DataWithinSelectedTimeFrame = this.state
      .stashAwayPortfolioData;
    const benchmarkPortfolioDataWithinSelectedTimeFrame = this.state
      .benchmarkPortfolioData;
    const chartData = [
      stashAwayRiskIndex14DataWithinSelectedTimeFrame,
      benchmarkPortfolioDataWithinSelectedTimeFrame
    ];
    this.setState({ chartData });
  };

  handleBenchmarkPortfolioChange = benchmarkPortfolio => {
    const benchmarkPortfolioSelected = benchmarkPortfolio;
    this.setState({
      benchmarkPortfolio
    });
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

  setVanguard4060Data = async () => {
    await this.setState({
      benchmarkPortfolioName: "40% VTSMX (Stock) + 60% VBMFX (Bond)",
      benchmarkPortfolioStockName: "VTSMX - Vanguard Total Stock Market Index",
      benchmarkPortfolioBondName: "VTBMX - Vanguard Total Bond Market Index",
      benchmarkPortfolioData: sampleVanguardData
    });
    this.processStashAwayAndBenchmarkPortfolioData();
  };

  setiShares2080Data = async () => {
    await this.setState({
      benchmarkPortfolioName: "20% IVV (Stock) + 80% GOVT (Bond)",
      benchmarkPortfolioStockName: "IVV - iShares Core S&P 500 ETF",
      benchmarkPortfolioBondName: "GOVT - iShares U.S. Treasury Bond ETF",
      benchmarkPortfolioData: sampleiSharesData
    });
    this.processStashAwayAndBenchmarkPortfolioData();
  };

  handleTimeFrameSelected = timeFrame => {
    this.setState({
      timeFrame
    });
  };

  filterChartDataBasedOnTimeFrame = (portfolioName, etfData) => {
    const timeFrame = this.state.timeFrame;
    switch (timeFrame) {
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

  render() {
    return (
      <div className="app">
        <div className="portfolioBenchmark__container">
          <h2 className="portfolioBenchmark__heading">Portfolio benchmark</h2>
          <BenchmarkSelection
            handleBenchmarkPortfolioChange={this.handleBenchmarkPortfolioChange}
          />
          <TimeFrameSelection
            handleTimeFrameSelected={this.handleTimeFrameSelected}
            timeFrame={this.state.timeFrame}
          />
          <div>
            <BenchmarkingChart
              data={this.state.chartData}
              benchmarkPortfolioName={this.state.benchmarkPortfolioName}
              benchmarkPortfolioStockName={
                this.state.benchmarkPortfolioStockName
              }
              benchmarkPortfolioBondName={this.state.benchmarkPortfolioBondName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
