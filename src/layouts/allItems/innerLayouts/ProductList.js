import { Box, Grid } from "@mui/material";
// import React, { useState } from "react";
import SingleProduct from "../../../components/productList/SingleProduct";
import { Link } from "react-router-dom";

export default function ProductList({ products }) {

  return (
    <Grid container spacing={2} pb={4}>
      {products.map((val, key) => {  
        return (
          <Grid item key={key} xs={12} sm={6} md={4} lg={3}>
            <Link to={`/details`} state={{ product: val }}>
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
