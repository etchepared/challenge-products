import { createContext, useState } from "react";

const FiltersContext = createContext();

const FiltersProvider = ({ children }) => {
  const [productCondition, setProductCondition] = useState("");
  const [productCategory, setProductCategory] = useState("");

  const handleProductCondition = (event) => {
    if (event.target.checked) {
      if (event.target.value === "used") {
        setProductCondition("used");
      }
      if (event.target.value === "new") {
        setProductCondition("new");
      }
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

  const data = {
    productCondition,
    handleProductCondition,
    productCategory,
    handleProductCategory,
  };

  return (
    <FiltersContext.Provider value={data}>{children}</FiltersContext.Provider>
  );
};

export { FiltersProvider };
export default FiltersContext;
