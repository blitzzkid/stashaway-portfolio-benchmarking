import React from "react";
import "./App.css";
import { BenchmarkingChart } from "../BenchmarkingChart/BenchmarkingChart";
import { createChartData } from "../createChartData/createChartData";
// import { fetchMsciWorldEtf } from "../../api/api";
import { sampleMsciData } from "../createChartData/sampleMsciData";
import { sampleVanguardData } from "../createChartData/sampleVanguardData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      msciApiData: {},
      chartData: []
    };
  }

  async componentDidMount() {
    try {
      // const msciApiData = await fetchMsciWorldEtf();
      // this.setState({ msciApiData });
      this.processEtfData();
    } catch (err) {
      return err.message;
    }
  }

  processEtfData() {
    // const msciChartData = msciWorldEtf(this.state.msciApiData);
    const msciChartData = createChartData(sampleMsciData);
    const vanguardChartData = createChartData(sampleVanguardData);
    const chartData = [msciChartData, vanguardChartData];
    this.setState({ chartData });
  }

  render() {
    console.log(this.state.chartData);
    return (
      <div className="app">
        <div className="portfolioBenchmark__container">
          <h2 className="portfolioBenchmark__heading">Portfolio benchmark</h2>
          <div>
            <BenchmarkingChart data={this.state.chartData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
