import React from "react";
import HeaderMenuLayout from "./common/HeaderMenuLayout";
import FooterLayout from "./common/FooterLayout";
import { Grid } from "@mui/material";
import ProductFilters from "./allItems/ProductFilters";
import ProductList from "./allItems/ProductList";

export default function AllItems() {
  return (
    <Grid>
      <HeaderMenuLayout />
      <Grid container>
        <Grid item xs={2}>
          <ProductFilters />
        </Grid>
        <Grid item xs={10}>
          <ProductList />
        </Grid>
      </Grid>
      <FooterLayout />
    </Grid>
  );
}
