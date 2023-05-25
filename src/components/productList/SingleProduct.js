import React from "react";
import ProductImage from "./singleProduct/ProductImage";
import ProductName from "./singleProduct/ProductName";
import ProductPrice from "./singleProduct/ProductPrice";
import ProductSize from "./singleProduct/ProductSize";

export default function SingleProduct() {
  return (
    <div>
      <ProductImage/>
      <ProductName/>
      <ProductPrice/>
      <ProductSize/>
    </div>
  );
}
