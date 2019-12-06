import React from "react";
import "../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
  DiscreteColorLegend
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
        <h5 className="chart__description">
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
            stroke="#3BDCE3"
            style={{}}
          />
          <DiscreteColorLegend
            colors={["#3BDCE3"]}
            items={["StashAway Risk Index 14%"]}
            orientation="vertical"
            style={{ position: "absolute", left: "30%", bottom: "-40px" }}
          />
          <DiscreteColorLegend
            colors={["#EFB83C"]}
            items={["40% VTSMX (Stock) + 60% VTBMX (Bond)"]}
            orientation="vertical"
            style={{ position: "absolute", left: "50%", bottom: "-40px" }}
          />
        </XYPlot>
        <div className="chart__legendDescription">
          <p>VTSMX - Vanguard Total Stock Market Index</p>
          <p>VTBMX - Vanguard Total Bond Market Index</p>
        </div>
      </div>
    );
  }
}

BenchmarkingChart.propTypes = {
  data: PropTypes.array
};
