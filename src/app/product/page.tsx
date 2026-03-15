import React from "react";
import Link from "next/link";

// Example: list of products (replace with your real data or fetch from DB/API)
const products = [
  { id: "1", name: "Dog Food" },
  { id: "2", name: "Cat Toy" },
  { id: "3", name: "Bird Cage" },
];

const ProductsPage = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Our Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/product/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;