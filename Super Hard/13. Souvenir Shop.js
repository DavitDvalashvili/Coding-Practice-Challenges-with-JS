/*

Souvenir Shop
On a vacation abroad, you see a souvenir shop and decide to head inside. There are snow globes, postcards, fridge magnets and all the other goodies you'd typically find.
Given an array of prices of things in the store and the amount of money you have, return the maximum number of items you could possibly buy.

Examples
maxItems(["$1", "$1", "$2"], "$3") ➞ 2
maxItems(["$10", "$7", "$2", "$60"], "$20") ➞ 3
maxItems(["$15", "$5", "$30", "$30", "$10"], "$2") ➞ "Not enough funds!"

Notes
If you cannot afford anything, return "Not enough funds!"
Prices will be whole numbers.

*/

function maxItems(prices, budget) {
  let intBudget = budget.substring(1);
  let intPrices = prices
    .map((price) => +price.substring(1))
    .sort((a, b) => a - b);

  let result = [];

  intPrices.reduce((accumulator, current) => {
    accumulator += current;
    if (accumulator <= intBudget) {
      result.push(current);
    }
    return accumulator;
  }, 0);

  return result.length ? result.length : "Not enough funds!";
}
