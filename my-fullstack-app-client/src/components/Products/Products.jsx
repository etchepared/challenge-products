import { useContext, useEffect, useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import FiltersContext from "../../context/filtersContext";
import { orderByPrice } from "../../utils/utils";
import "./products.css";

export function Products() {
  const [products, setProducts] = useState([]);

  const {
    productCondition,
    productCategory,
    productOrderByPrice,
    productTitle,
  } = useContext(FiltersContext);

  const apiUrl = new URL("http://localhost:5000/products");
  productCategory && apiUrl.searchParams.append("category", productCategory);
  productCondition && apiUrl.searchParams.append("condition", productCondition);

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
  }, [productCategory, productCondition, productTitle]);

  orderByPrice(productOrderByPrice, products);

  const filteredProducts =
    products.length > 0
      ? products.filter((product) => {
          return product.title
            .toLowerCase()
            .includes(productTitle.toLowerCase());
        })
      : [];

  return (
    <main>
      <Sidebar />
      <h1>Products</h1>
      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            return (
              <div className="product" key={product.id}>
                <h2>{product.title}</h2>
                <img src={product.image} alt={product.id} />
                <h4>Category: {product.category}</h4>
                <h3>$ {product.price}</h3>
                <h4>Condition: {product.condition}</h4>
              </div>
            );
          })
        ) : (
          <div>No match</div>
        )}
      </div>
    </main>
  );
}
