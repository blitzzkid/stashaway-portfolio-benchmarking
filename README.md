# StashAway Portfolio Benchmarking

This is my solution to the front end assignment for StashAway's Portfolio Benchmarking

## Assumptions

1. Before the user selects any benchmark portfolio in the drop down there is already one benchmark portfolio (E.g. 40% VTSMX (Stock) + 60% VBMFX (Bond)) displayed in the chart by default, along with the StashAway Risk 14% portfolio.
2. The portfolio value on the crosshair is rounded up to the nearest whole number.
3. The user invested a sum of $100,000 in 2012 and did not make any further deposits
4. If the USD/SGD exchange rate data for a particular date is not available, a fixed number of 1.36 is used

## Incomplete features due to lack of time

1. Optimizing exchange rate function (Re-rending is slow because of the searching of exchange rate data) 
2. Constructing of portfolio using the weightages provided (i.e. 20% stocks and 80% bonds) 
3. Drop down for User profile, more actions, overview 
4. Separate pages for links on menu bar and navigation bar, Support on footer
5. Styling of crosshair in chart, other chart elements and dropdown selection
6. Responsiveness of CSS

## Application design

1. `index.js` is the entry point of the application.

2. The Portfolio Benchmark component is designed to allow the user to visualize the performance of their StashAway Portfolio with a few filters:
- Selecting the timeframe for the portfolio (1 month, 6 months, 1 year, 5 years, max)
- Selecting the currency for the data (SGD or USD)
- Selecting other portfolios as a benchmark (E.g. 20% stocks/80% bonds)

3. When the user selects a new option on the filters, the following happens:
- Selecting another timeframe
  - The timeframe selected is being updated in the state
  - The data for both the StashAway portfolio and benchmark portfolio (that is currently selected) is being reset to the original
  - The data is being filtered according to the timeframe selected
- Selecting another portfolio
  - The information relating to the selected portfolio is being updated (i.e. Name, stock name, bond name) in the state
  - The data for both the StashAway portfolio and benchmark portfolio (that is currently selected) is being reset to the original
  - The data is being filtered according to the timeframe selected
- Selecting another currency
  - The currency selected is being updated in the state
  - The data for both the StashAway portfolio and benchmark portfolio (that is currently selected) is being reset to the original
  - The createChartData function converts the portfolio value if the ETF is in USD and the user selects SGD.

## Running the application

1. Unzip the code to a folder on your computer

Before running any scripts, please install development dependencies:

```
npm install
```

You can now use the application with the following command:

```
npm run start
```

## Run unit tests and linter

You can now also run the following scripts:

Run linter

```
npm run lint
```

Run unit tests

```
npm test
```

Run unit tests in watch mode

```
npm run test:watch
```

Run both linter and unit tests

```
npm run test:all
```

Run test coverage

```
npm run test:coverage
```

Open coverage report

```
npm run test:report
```
