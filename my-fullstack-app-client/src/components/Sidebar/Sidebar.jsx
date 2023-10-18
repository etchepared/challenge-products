import { useContext } from "react";
import "./sidebar.css";
import FiltersContext from "../../context/filtersContext";

export function Sidebar(params) {
  const {
    handleProductCondition,
    handleProductCategory,
    handleProductOrderByPrice,
    handleProductTitleChange,
  } = useContext(FiltersContext);

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

  return (
    <div className="filters">
      <h2>Filters</h2>
      <ul>
        <div className="categories">
          Categories:
          {categories.map((category) => {
            return (
              <li key={category}>
                <input
                  type="checkbox"
                  value={category}
                  onClick={handleProductCategory}
                />
                {category}
              </li>
            );
          })}
        </div>
      </ul>
      <label>
        Top 10 Low to High Price{" "}
        <input
          type="checkbox"
          value="low"
          onClick={handleProductOrderByPrice}
        />
      </label>
      <br />
      <label>
        Top 10 High to Low Price{" "}
        <input
          type="checkbox"
          value="high"
          onClick={handleProductOrderByPrice}
        />
      </label>
      <ul>
        Condition:
        <li>
          New
          <input type="checkbox" value="new" onClick={handleProductCondition} />
        </li>
        <li>
          Used
          <input
            type="checkbox"
            value="used"
            onClick={handleProductCondition}
          />
        </li>
      </ul>
      <>
        <label>
          SearchBar:{" "}
          <input
            type="search"
            placeholder="Search by name"
            onChange={handleProductTitleChange}
          />
        </label>
      </>
    </div>
  );
}
