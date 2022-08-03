import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const {
    filtered_products: products,
    grid_view,
    list_view,
  } = useFilterContext();

  // if (products.lenght < 1) {
  //   return <h5 style={{ textTrans }}>No products found</h5>;
  // }

  return <GridView products={products} />;
};

export default ProductList;
