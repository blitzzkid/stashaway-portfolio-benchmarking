import React from "react";
import "./App.css";
import { BenchmarkingChart } from "../BenchmarkingChart/BenchmarkingChart";
import { createChartData } from "../createChartData/createChartData";
import { BenchmarkSelection } from "../BenchmarkSelection/BenchmarkSelection";
import { sampleiSharesData } from "../createChartData/sampleiSharesData";
import { sampleVanguardData } from "../createChartData/sampleVanguardData";
import { sampleSnP500Data } from "../createChartData/sampleSnP500Data";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      chartData: [],
      benchmarkPortfolio: "",
      benchmarkPortfolioName: "",
      benchmarkData: {}
    };
  }

  async componentDidMount() {
    try {
      this.processStashAwayPortfolioData();
    } catch (err) {
      return err.message;
    }
  }

  processStashAwayPortfolioData = () => {
    const stashAwayRiskIndex14Data = createChartData(sampleSnP500Data);
    const chartData = [stashAwayRiskIndex14Data];
    this.setState({ chartData });
  };

  processStashAwayAndBenchmarkPortfolioData = () => {
    const stashAwayRiskIndex14Data = createChartData(sampleSnP500Data);
    const dataOfBenchmarkPortfolioSelected = this.state.benchmarkData;
    const benchmarkChartData = createChartData(
      dataOfBenchmarkPortfolioSelected
    );
    const chartData = [stashAwayRiskIndex14Data, benchmarkChartData];
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
        this.processStashAwayPortfolioData();
    }
  };

  setVanguard4060Data = async () => {
    await this.setState({
      benchmarkPortfolioName: "40% VTSMX (Stock) + 60% VBMFX (Bond)",
      benchmarkData: sampleVanguardData
    });
    this.processStashAwayAndBenchmarkPortfolioData();
  };

  setiShares2080Data = async () => {
    await this.setState({
      benchmarkPortfolioName: "20% IVV (Stock) + 80% GOVT (Bond)",
      benchmarkData: sampleiSharesData
    });
    this.processStashAwayAndBenchmarkPortfolioData();
  };

  render() {
    return (
      <div className="app">
        <div className="portfolioBenchmark__container">
          <h2 className="portfolioBenchmark__heading">Portfolio benchmark</h2>
          <BenchmarkSelection
            handleBenchmarkPortfolioChange={this.handleBenchmarkPortfolioChange}
          />
          <div>
            <BenchmarkingChart
              data={this.state.chartData}
              benchmarkPortfolioName={this.state.benchmarkPortfolioName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
