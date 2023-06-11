const { error } = require("console");

/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleProducts = [
  { id: 1, name: "Panel Headboard", priceInCents: 12332 },
  { id: 2, name: "Low Profile Sleigh Bed", priceInCents: 22999 },
  { id: 3, name: "Oval 100% Cotton Solid Bath Rug", priceInCents: 1399 },
  { id: 4, name: "Abstract Light Gray Area Rug", priceInCents: 33999 },
  { id: 5, name: "Multi Game Table", priceInCents: 81743 },
];
// Do not change the line above.

/*
  This function should throw an error if:
  - The `cart` array is empty.
*/
function getCartTotal(cart) {
  if(!cart.length) {
    throw "Cart is empty.";
  }
 
  let result = 0;

  for (let product of cart) {
    result += product.priceInCents;
  }
  return result;
}

/*
  This function should throw an error if:
  - The `products` array is empty.
  - Either `min` or `max` is not a number.
  - `max` is equal to `0`.
  - `min` is greater than `max`.
  - Either `min` or `max` is less than `0`.
  - Any of the products in the `products` array does not have a `priceInCents` key.
*/
function filterProductsByPriceRange(products, min, max) {
  const result = [];

  if (typeof min !== "number" || typeof max !== "number") {
    throw new Error("Parameters 'min' and 'max' must be numbers.");
  }
  if (products.length === 0) {
    throw new Error("Products array is empty.");
  }
  if (max <= 0) {
    throw new Error("Max must be greater than zero.");
  }
  if (min > max) {
    throw new Error("Min must be less than or equal to max.");
  }
  if (min < 0 || max < 0) {
    throw new Error("min and max cannot be negative.");
  }

  for (let product of products) {
    if (!product.hasOwnProperty('priceInCents')) {
      throw new Error("Products have no price.");
    }
    if (product.priceInCents >= min && product.priceInCents <= max) {
      result.push(product);
    }
  }
  return result;
}

/*
  If any errors occur in this function, it should return `0`.
*/
function getTotalOfAllProductsByPriceRange(products, min, max) {
  let filteredProducts;
  try {
    filteredProducts = filterProductsByPriceRange(products, min, max);
  } catch (err) {
    return 0;
  }
  let total;
  try {
    total = getCartTotal(filteredProducts);
  } catch (err) {
    return 0;
  }
  return total || 0;
}

module.exports = {
  getCartTotal,
  filterProductsByPriceRange,
  getTotalOfAllProductsByPriceRange,
};
