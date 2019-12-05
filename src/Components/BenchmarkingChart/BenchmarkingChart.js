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
        <LineSeries data={this.props.data} />
        <XAxis />
        <YAxis />
      </XYPlot>
    );
  }
}
