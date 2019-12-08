import moment from "moment";

export const filterChartDataForOneMonth = etfData => {
  console.log("here");
  const etfDataWithinTimeFrame = moment(new Date()).subtract(1, "months");
  // const etfDataWithinTimeFrameBoolean = moment(new Date()).isBetween(
  //   etfDataWithinTimeFrame,
  //   new Date()
  // );
  return Object.entries(etfData).filter(([key, value]) => {
    return moment(key.x).isBetween(etfDataWithinTimeFrame, new Date());
  });
};

export const returnAllChartData = etfData => etfData;
