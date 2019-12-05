import React from "react";
import "./App.css";
import { BenchmarkingChart } from "../BenchmarkingChart/BenchmarkingChart";
import { data } from "../StashAwayRiskIndex14/StashAwayRiskIndex14";

function App() {
  return (
    <div className="App">
      <BenchmarkingChart data={data} />
    </div>
  );
}

export default App;
