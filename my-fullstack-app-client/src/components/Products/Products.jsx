import { useContext, useEffect, useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import FiltersContext from "../../context/filtersContext";

export function Products({ minPrice, maxPrice }) {
  const [products, setProducts] = useState([]);

  const { productCondition, productCategory } = useContext(FiltersContext);

  const apiUrl = new URL("http://localhost:5000/products");
  productCategory && apiUrl.searchParams.append("category", productCategory);
  minPrice && apiUrl.searchParams.append("minPrice", minPrice);
  maxPrice && apiUrl.searchParams.append("maxPrice", maxPrice);
  productCondition && apiUrl.searchParams.append("condition", productCondition);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("condition", productCondition);
        console.log("category", productCategory);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
      });
    return () => {};
  }, [productCategory, minPrice, maxPrice, productCondition]);

  return (
    <main>
      <Sidebar />

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
                <h4>Condition: {product.condition}</h4>
              </div>
            );
          })}
      </div>
    </main>
  );
}
