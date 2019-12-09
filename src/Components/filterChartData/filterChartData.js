import moment from "moment";

export const filterChartDataForOneMonth = etfData => {
  const timeFrameBeforeCurrentDate = moment(new Date())
    .subtract(1, "months")
    .toISOString();
  const etfDataWithinTimeFrameArray = Object.entries(etfData).filter(
    ([, value]) => {
      return moment(value.x).isBetween(timeFrameBeforeCurrentDate, new Date());
    }
  );
  const etfDataWithinTimeFrameObject = etfDataWithinTimeFrameArray.map(
    array => array[1]
  );
  return etfDataWithinTimeFrameObject;
};

export const returnAllChartData = etfData => etfData;
