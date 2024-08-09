/*

Got Enough Money?
Create a function that returns any of the items you can afford in the store with the money you have in your wallet. Sort the list in alphabetical order.

Examples
itemsPurchased({
  Water: "$1",
  Bread: "$3",
  TV: "$1,000",
  Fertilizer: "$20"
}, "$300") ➞ ["Bread", "Fertilizer", "Water"]

itemsPurchased({
  Apple: "$4",
  Honey: "$3",
  Fan: "$14",
  Bananas: "$4",
  Pan: "$100",
  Spoon: "$2"
  }, "$100") ➞ ["Apple", "Bananas", "Fan", "Honey", "Pan", "Spoon"]

itemsPurchased({
  Phone: "$999",
  Speakers: "$300",
  Laptop: "$5,000",
  PC: "$1200"},
"$1") ➞ "Nothing"

Notes
Return "Nothing" if you can't afford anything from the store.

*/

function itemsPurchased(store, wallet) {
  let items = Object.keys(store);
  let prices = Object.values(store);

  let result = [];

  for (let index in prices) {
    let price = parseInt(prices[index].replace(/,/g, "").substring(1));
    price <= parseInt(wallet.substring(1)) ? result.push(items[index]) : "";
  }

  return result.length ? result.sort() : "Nothing";
}
