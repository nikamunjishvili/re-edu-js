reduce
map,
filter

1)დავწეროთ function რომლის მიხედვითაც გადავურბენთ product მასივს map მეთოდით და id მიხედვით განვაახლებ category.მაგალითად Electronics;

function updateProductCategory(productId, newCategory) {
  return products.map((product) => {
    if (product.id === productId) {
      return { ...product, category: newCategory };
    } else {
      return product;
    }
  });
}

2)reduce data; დავაჯამოთ price

// const products = [
//   { name: "Laptop", price: 999.99, category: "Electronics" },
//   { name: "Coffee Maker", price: 49.99, category: "Kitchen Appliances" },
//   { name: "Running Shoes", price: 89.99, category: "Sportswear" },
//   { name: "Bluetooth Headphones", price: 199.99, category: "Electronics" },
//   { name: "Novel - 'The Great Gatsby'", price: 15.99, category: "Books" },
// ];


3)წამოვიღოთ დატა : const products = [
  { name: "Laptop", price: 999.99, category: "Electronics" },
  { name: "Coffee Maker", price: 49.99, category: "Books" },
  { name: "Running Shoes", price: 89.99, category: "Books" },
  { name: "Bluetooth Headphones", price: 199.99, category: "Electronics" },
  { name: "Novel - 'The Great Gatsby'", price: 15.99, category: "Books" },
];