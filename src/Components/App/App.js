import React from "react";
import "./App.css";
import { BenchmarkingChart } from "../BenchmarkingChart/BenchmarkingChart";
import { msciWorldEtf } from "../msciWorldEtf/msciWorldEtf";
// import { fetchMsciWorldEtf } from "../../api/api";
import { sampleData } from "../msciWorldEtf/sampleData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      msciApiData: {},
      msciChartData: []
    };
  }

  async componentDidMount() {
    try {
      // const msciApiData = await fetchMsciWorldEtf();
      // this.setState({ msciApiData });
      this.processMsciWorldEtfData();
    } catch (err) {
      return err.message;
    }
  }

  processMsciWorldEtfData() {
    // const msciChartData = msciWorldEtf(this.state.msciApiData);
    const msciChartData = msciWorldEtf(sampleData);
    this.setState({ msciChartData });
    console.log(this.state.msciChartData);
  }

  render() {
    return (
      <div className="app">
        <div className="portfolioBenchmark__container">
          <h2 className="portfolioBenchmark__heading">Portfolio benchmark</h2>
          <div>
            <BenchmarkingChart data={this.state.msciChartData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
