import "@testing-library/jest-dom/extend-expect";
import {
  filterChartDataByTimeFrame,
  getArrayOfEtfDataWithinTimeFrame,
  getObjectOfEtfDataWithinTimeFrame,
  returnAllChartData
} from "./filterChartDataByTimeFrame";

describe("Filters chart data according to timeframe", () => {
  const etfData = [
    { x: new Date("2019-12-06"), y: 1027.61 },
    { x: new Date("2019-11-12"), y: 1027.61 },
    { x: new Date("2019-11-11"), y: 1027.61 },
    { x: new Date("2019-11-10"), y: 1027.61 },
    { x: new Date("2019-11-09"), y: 1027.61 },
    { x: new Date("2019-11-05"), y: 1018.54 },
    { x: new Date("2019-10-04"), y: 1017.63 },
    { x: new Date("2019-09-03"), y: 1009.98 },
    { x: new Date("2019-08-02"), y: 1015.3 },
    { x: new Date("2019-07-29"), y: 1022.56 },
    { x: new Date("2019-06-27"), y: 1028.91 },
    { x: new Date("2019-05-26"), y: 1024.76 },
    { x: new Date("2019-04-25"), y: 1023.85 },
    { x: new Date("2018-11-22"), y: 1016.07 },
    { x: new Date("2017-11-21"), y: 1013.87 },
    { x: new Date("2016-11-20"), y: 1015.04 },
    { x: new Date("2015-11-19"), y: 1020.09 },
    { x: new Date("2014-11-18"), y: 1019.83 },
    { x: new Date("2013-11-15"), y: 1019.45 },
    { x: new Date("2012-11-14"), y: 1012.32 }
  ];
  it("Returns all data for Max timeframe selected", () => {
    expect(returnAllChartData(etfData)).toEqual(etfData);
  });

  it("Returns last month's data for 1-month timeframe selected", () => {
    expect(filterChartDataByTimeFrame("1-month", etfData)).toEqual([
      { x: new Date("2019-12-06"), y: 1027.61 },
      { x: new Date("2019-11-12"), y: 1027.61 }
    ]);
  });

  it("Returns last 6 month's data for 6-months timeframe selected", () => {
    expect(filterChartDataByTimeFrame("6-months", etfData)).toEqual([
      { x: new Date("2019-12-06"), y: 1027.61 },
      { x: new Date("2019-11-12"), y: 1027.61 },
      { x: new Date("2019-11-11"), y: 1027.61 },
      { x: new Date("2019-11-10"), y: 1027.61 },
      { x: new Date("2019-11-09"), y: 1027.61 },
      { x: new Date("2019-11-05"), y: 1018.54 },
      { x: new Date("2019-10-04"), y: 1017.63 },
      { x: new Date("2019-09-03"), y: 1009.98 },
      { x: new Date("2019-08-02"), y: 1015.3 },
      { x: new Date("2019-07-29"), y: 1022.56 },
      { x: new Date("2019-06-27"), y: 1028.91 }
    ]);
  });

  it("Returns year to date's data for year-to-date timeframe selected", () => {
    expect(filterChartDataByTimeFrame("year-to-date", etfData)).toEqual([
      { x: new Date("2019-12-06"), y: 1027.61 },
      { x: new Date("2019-11-12"), y: 1027.61 },
      { x: new Date("2019-11-11"), y: 1027.61 },
      { x: new Date("2019-11-10"), y: 1027.61 },
      { x: new Date("2019-11-09"), y: 1027.61 },
      { x: new Date("2019-11-05"), y: 1018.54 },
      { x: new Date("2019-10-04"), y: 1017.63 },
      { x: new Date("2019-09-03"), y: 1009.98 },
      { x: new Date("2019-08-02"), y: 1015.3 },
      { x: new Date("2019-07-29"), y: 1022.56 },
      { x: new Date("2019-06-27"), y: 1028.91 },
      { x: new Date("2019-05-26"), y: 1024.76 },
      { x: new Date("2019-04-25"), y: 1023.85 }
    ]);
  });

  it("Returns 1 year's data for 1 year timeframe selected", () => {
    expect(filterChartDataByTimeFrame("1-year", etfData)).toEqual([
      { x: new Date("2019-12-06"), y: 1027.61 },
      { x: new Date("2019-11-12"), y: 1027.61 },
      { x: new Date("2019-11-11"), y: 1027.61 },
      { x: new Date("2019-11-10"), y: 1027.61 },
      { x: new Date("2019-11-09"), y: 1027.61 },
      { x: new Date("2019-11-05"), y: 1018.54 },
      { x: new Date("2019-10-04"), y: 1017.63 },
      { x: new Date("2019-09-03"), y: 1009.98 },
      { x: new Date("2019-08-02"), y: 1015.3 },
      { x: new Date("2019-07-29"), y: 1022.56 },
      { x: new Date("2019-06-27"), y: 1028.91 },
      { x: new Date("2019-05-26"), y: 1024.76 },
      { x: new Date("2019-04-25"), y: 1023.85 }
    ]);
  });

  it("Returns 5 years data for 5 years timeframe selected", () => {
    expect(filterChartDataByTimeFrame("5-years", etfData)).toEqual([
      { x: new Date("2019-12-06"), y: 1027.61 },
      { x: new Date("2019-11-12"), y: 1027.61 },
      { x: new Date("2019-11-11"), y: 1027.61 },
      { x: new Date("2019-11-10"), y: 1027.61 },
      { x: new Date("2019-11-09"), y: 1027.61 },
      { x: new Date("2019-11-05"), y: 1018.54 },
      { x: new Date("2019-10-04"), y: 1017.63 },
      { x: new Date("2019-09-03"), y: 1009.98 },
      { x: new Date("2019-08-02"), y: 1015.3 },
      { x: new Date("2019-07-29"), y: 1022.56 },
      { x: new Date("2019-06-27"), y: 1028.91 },
      { x: new Date("2019-05-26"), y: 1024.76 },
      { x: new Date("2019-04-25"), y: 1023.85 },
      { x: new Date("2018-11-22"), y: 1016.07 },
      { x: new Date("2017-11-21"), y: 1013.87 },
      { x: new Date("2016-11-20"), y: 1015.04 },
      { x: new Date("2015-11-19"), y: 1020.09 }
    ]);
  });

  describe("Format data for use in chart plotting", () => {
    it("Returns only data points within the time frame specified", () => {
      const etfDataWithinTimeFrameArray = [
        { x: new Date("2019-12-06"), y: 1027.61 },
        { x: new Date("2019-11-12"), y: 1027.61 },
        { x: new Date("2019-11-11"), y: 1027.61 },
        { x: new Date("2019-11-10"), y: 1027.61 },
        { x: new Date("2019-11-09"), y: 1027.61 },
        { x: new Date("2019-11-05"), y: 1018.54 }
      ];
      expect(
        getArrayOfEtfDataWithinTimeFrame(
          etfDataWithinTimeFrameArray,
          new Date("2019-11-11")
        )
      ).toEqual([
        ["0", { x: new Date("2019-12-06"), y: 1027.61 }],
        ["1", { x: new Date("2019-11-12"), y: 1027.61 }]
      ]);
    });

    it("Returns only objects of x,y data points in an array", () => {
      const etfDataWithinTimeFrameArray = [
        ["0", { x: new Date("2019-12-06"), y: 1027.61 }],
        ["1", { x: new Date("2019-12-05"), y: 1018.54 }],
        ["2", { x: new Date("2019-12-04"), y: 1017.63 }],
        ["3", { x: new Date("2019-12-03"), y: 1009.98 }]
      ];
      expect(
        getObjectOfEtfDataWithinTimeFrame(etfDataWithinTimeFrameArray)
      ).toEqual([
        { x: new Date("2019-12-06"), y: 1027.61 },
        { x: new Date("2019-12-05"), y: 1018.54 },
        { x: new Date("2019-12-04"), y: 1017.63 },
        { x: new Date("2019-12-03"), y: 1009.98 }
      ]);
    });
  });
});
