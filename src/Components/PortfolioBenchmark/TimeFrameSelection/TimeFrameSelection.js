import React from "react";
import PropTypes from "prop-types";
import "./TimeFrameSelection.css";

export const TimeFrameSelection = ({ timeFrame, handleTimeFrameSelected }) => {
  return (
    <div className="timeFrame_selectors">
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
        onClick={() => handleTimeFrameSelected("6-months")}
        className={
          timeFrame === "6-months"
            ? "timeFrame__selected"
            : "timeFrame__unselected"
        }
      >
        <span>6 months</span>
      </div>
      <div
        onClick={() => handleTimeFrameSelected("year-to-date")}
        className={
          timeFrame === "year-to-date"
            ? "timeFrame__selected"
            : "timeFrame__unselected"
        }
      >
        <span>Year-to-date</span>
      </div>
      <div
        onClick={() => handleTimeFrameSelected("1-year")}
        className={
          timeFrame === "1-year"
            ? "timeFrame__selected"
            : "timeFrame__unselected"
        }
      >
        <span>1 year</span>
      </div>
      <div
        onClick={() => handleTimeFrameSelected("5-years")}
        className={
          timeFrame === "5-years"
            ? "timeFrame__selected"
            : "timeFrame__unselected"
        }
      >
        <span>5 years</span>
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
