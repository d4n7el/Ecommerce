export const mapProductsNewOrder = (products) => {
  let data = [];
  products.map((product) => {
    data = [
      ...data,
      {
        description: product.description,
        product: product._id,
        price: product.price,
        discount: product.discount,
        quantity: product.quantity,
      },
    ];
  });
  return data;
};
