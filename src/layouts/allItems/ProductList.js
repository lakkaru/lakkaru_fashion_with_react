import { Box, Grid } from "@mui/material";
import React from "react";
import SingleProduct from "../../components/productList/SingleProduct";

export default function ProductList() {
  const products = [1, 2, 3, 4, 5,6,7,8,9];
  return (
    <Grid container spacing={2} sx={{}}>
      {products.map((val, key) => {
        return (
          <Grid item key={key} xs={3} sx={{}}>
            <Box sx={{}}><SingleProduct/></Box>
          </Grid>
        );
      })}
    </Grid>
  );
}
