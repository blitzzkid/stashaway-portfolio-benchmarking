import moment from "moment";

export const returnAllChartData = etfData => etfData;

export const filterChartDataByTimeFrame = (timeFrame, etfData) => {
  let timeFrameBeforeCurrentDate;
  if (timeFrame === "1-month") {
    timeFrameBeforeCurrentDate = moment(new Date())
      .subtract(1, "months")
      .toISOString();
  } else if (timeFrame === "6-months") {
    timeFrameBeforeCurrentDate = moment(new Date())
      .subtract(6, "months")
      .toISOString();
  } else if (timeFrame === "year-to-date") {
    const currentYear = moment().year();
    timeFrameBeforeCurrentDate = moment(
      new Date(`${currentYear}-01-01`)
    ).toISOString();
  } else if (timeFrame === "1-year") {
    timeFrameBeforeCurrentDate = moment(new Date())
      .subtract(1, "years")
      .toISOString();
  } else if (timeFrame === "5-years") {
    timeFrameBeforeCurrentDate = moment(new Date())
      .subtract(5, "years")
      .toISOString();
  }
  const etfDataWithinTimeFrameArray = getArrayOfEtfDataWithinTimeFrame(
    etfData,
    timeFrameBeforeCurrentDate
  );
  const etfDataWithinTimeFrameObject = getObjectOfEtfDataWithinTimeFrame(
    etfDataWithinTimeFrameArray
  );
  return etfDataWithinTimeFrameObject;
};

export const getArrayOfEtfDataWithinTimeFrame = (
  etfData,
  timeFrameBeforeCurrentDate
) => {
  return Object.entries(etfData).filter(([, value]) => {
    return moment(value.x).isBetween(timeFrameBeforeCurrentDate, new Date());
  });
};

export const getObjectOfEtfDataWithinTimeFrame = etfDataWithinTimeFrameArray => {
  return etfDataWithinTimeFrameArray.map(array => array[1]);
};
