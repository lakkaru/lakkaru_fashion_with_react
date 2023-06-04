import React from "react";
import ProductImage from "./singleProduct/ProductImage";
import ProductName from "./singleProduct/ProductName";
import ProductPrice from "./singleProduct/ProductPrice";
import ProductSize from "./singleProduct/ProductSize";
import { Box } from "@mui/material";

export default function SingleProduct({product}) {
  // const images = [
  //   "https://radikadilanka.com/rdfashion/static/media/product7.930e47ba.jpg",
  //   "https://radikadilanka.com/rdfashion/static/media/product107.39094bc5.jpg",
  // ];
  return (
    <Box sx={{pb:2,'& :hover':{cursor:"pointer"}}}>
      <ProductImage images={product.images}/>
      <ProductName name={product.productName} type={product.productType}/>
      <ProductPrice price={product.price}/>
      <ProductSize sizes={product.size}/>
    </Box>
  );
}
