import moment from "moment";

export const returnAllChartData = etfData => etfData;

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

export const filterChartDataForSixMonths = etfData => {
  const timeFrameBeforeCurrentDate = moment(new Date())
    .subtract(6, "months")
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

export const filterChartDataForYearToDate = etfData => {
  const currentYear = moment().year();
  const firstDayOfCurrentYear = moment(
    new Date(`${currentYear}-01-01`)
  ).toISOString();
  const etfDataWithinTimeFrameArray = Object.entries(etfData).filter(
    ([, value]) => {
      return moment(value.x).isBetween(firstDayOfCurrentYear, new Date());
    }
  );
  const etfDataWithinTimeFrameObject = etfDataWithinTimeFrameArray.map(
    array => array[1]
  );
  return etfDataWithinTimeFrameObject;
};

export const filterChartDataForOneYear = etfData => {
  const timeFrameBeforeCurrentDate = moment(new Date())
    .subtract(1, "years")
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

export const filterChartDataForFiveYears = etfData => {
  const timeFrameBeforeCurrentDate = moment(new Date())
    .subtract(5, "years")
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
