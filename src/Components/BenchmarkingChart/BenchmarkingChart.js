import React from "react";
import "../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries
} from "react-vis";
import PropTypes from "prop-types";
import "./BenchmarkingChart.css";

export class BenchmarkingChart extends React.Component {
  render() {
    return (
      <div className="chart__container">
        <h5 className="chart__heading">
          Portfolio Value Based on gross returns
        </h5>
        <h5 className="chart_description">
          Gross returns and exchange rates sourced from Bloomberg as of 2th May
          2019
        </h5>
        <XYPlot
          width={1200}
          height={600}
          margin={{
            left: 100,
            right: 20
          }}
        >
          <XAxis
            attr="x"
            attrAxis="y"
            orientation="bottom"
            tickFormat={function tickFormat(d) {
              return new Date(d).toLocaleDateString("en-SG", {
                year: "2-digit",
                month: "short"
              });
            }}
          />
          <YAxis attr="y" attrAxis="x" orientation="left" left={-20} />
          <HorizontalGridLines />
          <LineSeries
            curve={null}
            data={this.props.data}
            opacity={1}
            strokeStyle="solid"
            style={{}}
          />
        </XYPlot>
      </div>
    );
  }
}

BenchmarkingChart.propTypes = {
  data: PropTypes.array
};
