const prices = [1045.0, 234, 456.98, 238.98, 3455, 234, 1045.0, 234];

const results = {
  average: 0,
  maxValue: 0,
  mode: 0,
  total: 0,
  totalLess: 0,
};

let modeCount = {};

function startOperations() {
  prices.forEach((price) => {
    getAverage(price);
    getMaxValue(price);
    getMode(price);
    getTotal(price);
    getTotalLess(price);
  });
}

function showUpResults() {
  Object.keys(results).forEach((resultKey) => {
    console.log(`${resultKey}: ${results[resultKey]}`);
  });
}

startOperations();
showUpResults();

// operation functions

function getAverage(price) {
  results.average += price;

  if (lastPrice(price)) {
    results.average = Math.ceil(results.average / prices.length);
  }
}

function getMaxValue(price) {
  if (results.maxValue < price) results.maxValue = price;
}

function getMode(price) {
  if (!modeCount[price]) modeCount[price] = 0;
  modeCount[price] += 1;

  if (lastPrice(price)) {
    Object.keys(modeCount).forEach((modeCountKey) => {
      modeCountKey = parseInt(modeCountKey);
      if (!modeCount[results.mode]) results.mode = modeCountKey;
      if (modeCount[results.mode] < modeCount[modeCountKey])
        results.mode = modeCountKey;
    });
  }
}

function getTotal(price) {
  results.total += price;
}

function getTotalLess(price, lessThan = 1500) {
  if (price < lessThan) results.totalLess += price;
}

// utils

function lastPrice(price) {
  if (prices[prices.length - 1] === price) return true;
  return false;
}
