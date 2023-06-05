import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import SingleProduct from "../../../components/productList/SingleProduct";
import { Link } from "react-router-dom";

export default function ProductList({ products }) {
  // const products = [1, 2, 3, 4, 5,6,7,8,9];
  const [productList, setProductList] = useState(products);
  //  setProduct(productList);
  // console.log(productList);
  
  return (
    <Grid container spacing={2} pb={4}>
      {products.map((val, key) => {  
       let productName=val.productName;
        return (
          <Grid item key={key} xs={12} sm={6} md={4} lg={3}>
            <Link to={`/details/${productName}`} state={{ products: productList }}>
             
              <Box sx={{}} component="button">
                <SingleProduct product={val} />
              </Box>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}
