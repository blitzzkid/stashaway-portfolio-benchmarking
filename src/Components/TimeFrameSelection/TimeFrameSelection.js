import React from "react";
import PropTypes from "prop-types";
import "./TimeFrameSelection.css";

export class TimeFrameSelection extends React.Component {
  render() {
    return (
      <div>
        <div
          onClick={() => this.props.handleTimeFrameSelected("1-month")}
          className={
            this.props.timeFrame === "1-month"
              ? "timeFrame__selected"
              : "timeFrame__unselected"
          }
        >
          <span>1 month</span>
        </div>
        <div
          onClick={() => this.props.handleTimeFrameSelected("max")}
          className={
            this.props.timeFrame === "max"
              ? "timeFrame__selected"
              : "timeFrame__unselected"
          }
        >
          <span>Max</span>
        </div>
      </div>
    );
  }
}

TimeFrameSelection.propTypes = {
  handleTimeFrameSelected: PropTypes.func,
  timeFrame: PropTypes.string
};
