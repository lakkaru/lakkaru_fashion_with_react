import { Box, Grid } from "@mui/material";
import React from "react";
import SingleProduct from "../../../components/productList/SingleProduct";

export default function ProductList({products}) {
  // const products = [1, 2, 3, 4, 5,6,7,8,9];
  return (
    <Grid container spacing={2} >
      {products.map((val, key) => {
        return (
          <Grid item key={key} xs={12} sm={6} md={4} lg={3}>
            <Box sx={{}}><SingleProduct product={val}/></Box>
          </Grid>
        );
      })}
    </Grid>
  );
}
