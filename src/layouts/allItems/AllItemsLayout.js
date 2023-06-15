import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import ProductFilters from "./innerLayouts/productFilters/ProductFiltersLayout";
import ProductList from "./innerLayouts/ProductList";
import axios from "axios";
import CommonWrapperLayout from "../common/CommonWrapperLayout";

export default function AllItemsLayout() {
  const [loadingStatus, setLoadingStatus] = useState("notStarted");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setLoadingStatus("loading");
    axios
      .get("https://cdn.radikadilanka.com:9000/getProducts")
      .then((response) => {
        setLoadingStatus("completed");
        // setProducts((response.data).slice(0, 10));
        // setFilteredProducts((response.data).slice(0, 10));
        setProducts((response.data));
        setFilteredProducts((response.data));
        // console.log(response.data);
      })
      .catch((e) => {
        setLoadingStatus("error");
        console.log(e);
      });
  }, []);
  return (
    <Grid>
      <CommonWrapperLayout>
      <Grid container sx={{ p: 2 }}>
        <Grid item xs={12} md={3} lg={2}>
          <ProductFilters products={products}  setFilteredProducts={setFilteredProducts} />
        </Grid>
        <Grid item xs={12} md={9} lg={10}>
          {loadingStatus === "loading" ? (
            <Typography>Loading....</Typography>
          ) : loadingStatus === "completed" ? (
            products.length > 0 ? (
              <Box sx={{pb:5}}>
                <ProductList products={filteredProducts} />
              </Box>
            ) : (
              <Typography>No Products</Typography>
            )
          ) : loadingStatus === "error" ? (
            <Typography>Error</Typography>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
      </CommonWrapperLayout>
    </Grid>
  );
}
