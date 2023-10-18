export const orderByPrice = (productOrderByPrice, products) => {
  if (productOrderByPrice === "low") {
    products &&
      products.sort(function (a, b) {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    products.length = 10;
  }

  if (productOrderByPrice === "high") {
    products &&
      products.sort(function (a, b) {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    products.length = 10;
  } else {
    return;
  }
};
