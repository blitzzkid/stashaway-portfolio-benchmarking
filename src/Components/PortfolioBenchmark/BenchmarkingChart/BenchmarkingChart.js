import React from "react";
import "../../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
  DiscreteColorLegend,
  Crosshair
} from "react-vis";
import PropTypes from "prop-types";
import "./BenchmarkingChart.css";

export class BenchmarkingChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crosshairValues: []
    };
  }

  onMouseLeave = () => {
    this.setState({ crosshairValues: [] });
  };

  onNearestX = (value, { index }) => {
    this.setState({
      crosshairValues: this.props.data.map(data => data[index])
    });
  };

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
          onMouseLeave={this.onMouseLeave}
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
            onNearestX={this.onNearestX}
            curve={null}
            data={this.props.data[0]}
            opacity={1}
            strokeStyle="solid"
            stroke="#3BDCE3"
            style={{}}
          />
          <LineSeries
            onNearestX={this.onNearestX}
            curve={null}
            data={this.props.data[1]}
            opacity={1}
            strokeStyle="solid"
            stroke="#EFB83C"
            style={{}}
          />
          <Crosshair values={this.state.crosshairValues}>
            <div style={crosshairStyle}>
              <p>
                {this.state.crosshairValues.length !== 0 &&
                typeof this.state.crosshairValues[0] !== "undefined"
                  ? new Date(
                      this.state.crosshairValues[0].x
                    ).toLocaleDateString("en-SG", {
                      year: "numeric",
                      month: "short",
                      day: "numeric"
                    })
                  : 0}
              </p>
              <p>
                StashAway Risk Index 14%: $
                {this.state.crosshairValues.length !== 0 &&
                typeof this.state.crosshairValues[0] !== "undefined"
                  ? this.state.crosshairValues[0].y.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })
                  : 0}
              </p>
              <p>
                {this.props.benchmarkPortfolioName}: $
                {this.state.crosshairValues.length !== 0 &&
                typeof this.state.crosshairValues[1] !== "undefined"
                  ? this.state.crosshairValues[1].y.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })
                  : 0}
              </p>
            </div>
          </Crosshair>
          <DiscreteColorLegend
            colors={["#3BDCE3"]}
            items={["StashAway Risk Index 14%"]}
            orientation="vertical"
            style={customerPortfolioLegendStyle}
          />
          <DiscreteColorLegend
            colors={["#EFB83C"]}
            items={[`${this.props.benchmarkPortfolioName}`]}
            orientation="vertical"
            style={benchmarkPortfolioLegendStyle}
          />
        </XYPlot>
        <div className="chart__legendDescription">
          <p>{this.props.benchmarkPortfolioStockName}</p>
          <p>{this.props.benchmarkPortfolioBondName}</p>
        </div>
      </div>
    );
  }
}

BenchmarkingChart.propTypes = {
  data: PropTypes.array,
  benchmarkPortfolioName: PropTypes.string,
  benchmarkPortfolioStockName: PropTypes.string,
  benchmarkPortfolioBondName: PropTypes.string
};

const crosshairStyle = {
  background: "white",
  height: "100px",
  width: "280px",
  color: "black",
  borderRadius: "8px",
  paddingLeft: "5px",
  paddingTop: "5px"
};

const customerPortfolioLegendStyle = {
  position: "absolute",
  left: "30%",
  bottom: "-40px"
};

const benchmarkPortfolioLegendStyle = {
  position: "absolute",
  left: "50%",
  bottom: "-40px"
};
