import React from "react";
import "../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries
} from "react-vis";

export class BenchmarkingChart extends React.Component {
  render() {
    return (
      <XYPlot width={300} height={300}>
        <HorizontalGridLines />
        <LineSeries
          data={[
            { x: 1, y: 10 },
            { x: 2, y: 5 },
            { x: 3, y: 15 }
          ]}
        />
        <XAxis />
        <YAxis />
      </XYPlot>
    );
  }
}
