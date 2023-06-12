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
  if (cart.length === 0){
    throw Error("The Cart is Empty");
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
  // const result = [];
  // for (let product of products) {
  //   if (product.priceInCents >= min && product.priceInCents <= max) {
  //     result.push(product);
  //   }
      if (products.length === 0) {
        throw 'Array must not be empty';
      }
    
      if (typeof min !== 'number' || typeof max !== 'number') {
        throw 'Min and Max must be numbers';
      }
    
      if (max === 0) {
        throw 'Max must not be equal to 0';
      }
    
      if (min > max) {
        throw 'Min must not be greater than max';
      }
    
      if (min < 0 || max < 0) {
        throw 'Min and Max must be greater than 0';
      }
    
      for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (!product.hasOwnProperty('priceInCents')) {
          throw 'All products must have a priceInCents attribute';
    }
  }
  return result;
}


/*
  If any errors occur in this function, it should return `0`.
*/
function getTotalOfAllProductsByPriceRange(products, min, max) {
  const filteredProducts = products.filter((product) => {
    return product.priceInCents >= min && product.priceInCents <= max;
  });

  return filteredProducts;
}

  try {
    const filteredProducts = filterProductsByPriceRange(products, min, max);
    const total = getCartTotal(filteredProducts);
    return total;
  } catch (error) {
    console.error(error);
    return 0;
  }


module.exports = {
  getCartTotal,
  filterProductsByPriceRange,
  getTotalOfAllProductsByPriceRange,
};
