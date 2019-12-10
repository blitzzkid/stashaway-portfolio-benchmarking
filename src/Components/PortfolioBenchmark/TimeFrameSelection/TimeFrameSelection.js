import React from "react";
import PropTypes from "prop-types";
import "./TimeFrameSelection.css";

export const TimeFrameSelection = ({ timeFrame, handleTimeFrameSelected }) => {
  return (
    <div>
      <div
        onClick={() => handleTimeFrameSelected("1-month")}
        className={
          timeFrame === "1-month"
            ? "timeFrame__selected"
            : "timeFrame__unselected"
        }
      >
        <span>1 month</span>
      </div>
      <div
        onClick={() => handleTimeFrameSelected("max")}
        className={
          timeFrame === "max" ? "timeFrame__selected" : "timeFrame__unselected"
        }
      >
        <span>Max</span>
      </div>
    </div>
  );
};

TimeFrameSelection.propTypes = {
  handleTimeFrameSelected: PropTypes.func,
  timeFrame: PropTypes.string
};
