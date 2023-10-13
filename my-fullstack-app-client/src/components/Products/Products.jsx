import { useEffect, useState } from "react";

export function Products({ category, minPrice, maxPrice, condition }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const apiUrl = new URL("http://localhost:5000/products");
  category && apiUrl.searchParams.append("category", category);
  minPrice && apiUrl.searchParams.append("minPrice", minPrice);
  maxPrice && apiUrl.searchParams.append("maxPrice", maxPrice);
  condition && apiUrl.searchParams.append("condition", condition);

  const categories = [
    "cell_phone",
    "clock",
    "headphone",
    "ipad",
    "iphone",
    "memory",
    "printer",
    "tablet",
  ];

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
      });
    return () => {};
  }, [category, minPrice, maxPrice, condition]);

  return (
    <main>
      <h2>Filters</h2>
      <ul>
        Categories:
        {categories.map((c) => {
          return (
            <li key={c}>
              <input type="checkbox" />
              {c}
            </li>
          );
        })}
      </ul>
      <label>
        Top 10 Low to High Price <input type="checkbox" />
      </label>
      <br />
      <label>
        Top 10 High to Low Price <input type="checkbox" />
      </label>
      <ul>
        Condition:
        <li>
          New
          <input type="checkbox" />
        </li>
        <li>
          Used
          <input type="checkbox" />
        </li>
      </ul>
      <>
        <label>
          SearchBar: <input type="search" placeholder="Search by name" />
        </label>
      </>
      <h1>Products</h1>
      <div className="product">
        {products &&
          products.map((product) => {
            return (
              <div key={product.id}>
                <h2>{product.title}</h2>
                <img src={product.image} alt={product.id} width={"300px"} />
                <h4>Category: {product.category}</h4>
                <h3>$ {product.price}</h3>
              </div>
            );
          })}
      </div>
    </main>
  );
}
