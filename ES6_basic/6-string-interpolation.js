export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,819',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `As of ${year}, it is estimated that ${budget.income} of San Francisco's workers are middle income, budget is ${budget.gdp} with a per capita output of ${budget.capita}.`;
}
