import React from "react";
import "./App.css";
import { BenchmarkingChart } from "../BenchmarkingChart/BenchmarkingChart";
import { data } from "../StashAwayRiskIndex14/StashAwayRiskIndex14";
import { fetchMSCIWorldETF } from "../../api/api";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      msciApiData: {}
    };
  }

  async componentDidMount() {
    try {
      const msciApiData = await fetchMSCIWorldETF();
      this.setState({ msciApiData });
      console.log(this.state.msciApiData);
    } catch (err) {
      return err.message;
    }
  }

  render() {
    return (
      <div className="App">
        <BenchmarkingChart data={data} />
      </div>
    );
  }
}

export default App;
