import { createContext, useState } from "react";

const FiltersContext = createContext();

const FiltersProvider = ({ children }) => {
  const [productCondition, setProductCondition] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productOrderByPrice, setProductOrderByPrice] = useState("");

  const handleProductCondition = (event) => {
    if (event.target.checked) {
      setProductCondition(event.target.value);
    } else {
      setProductCondition("");
    }
  };

  const handleProductCategory = (event) => {
    if (event.target.checked) {
      setProductCategory(event.target.value);
    } else {
      setProductCategory("");
    }
  };

  const handleProductOrderByPrice = (event) => {
    if (event.target.checked) {
      setProductOrderByPrice(event.target.value);
    } else {
      setProductOrderByPrice("");
    }
  };

  const data = {
    productCondition,
    handleProductCondition,
    productCategory,
    handleProductCategory,
    productOrderByPrice,
    handleProductOrderByPrice,
  };

  return (
    <FiltersContext.Provider value={data}>{children}</FiltersContext.Provider>
  );
};

export { FiltersProvider };
export default FiltersContext;
