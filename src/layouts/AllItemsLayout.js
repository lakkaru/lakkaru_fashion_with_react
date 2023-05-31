import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import ProductFilters from "./allItems/ProductFilters";
import ProductList from "./allItems/ProductList";
import axios from "axios";
import CommonWraperLayout from "./common/CommonWraperLayout";

export default function AllItemsLayout() {
  const [loadingStatus, setLodingStatus] = useState("notStarted");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLodingStatus("loading");
    axios
      .get("https://cdn.radikadilanka.com:9000/getProducts")
      .then((responce) => {
        setLodingStatus("completed");
        setProducts(responce.data);
        // console.log(responce.data);
      })
      .catch((e) => {
        setLodingStatus("error");
        console.log(e);
      });
  }, []);
  return (
    <Grid>
      <CommonWraperLayout>
      <Grid container sx={{ p: 2 }}>
        <Grid item xs={2}>
          <ProductFilters />
        </Grid>
        <Grid item xs={10}>
          {loadingStatus === "loading" ? (
            <Typography>Loading....</Typography>
          ) : loadingStatus === "completed" ? (
            products.length > 0 ? (
              <Box sx={{pb:5}}>
                <ProductList products={products} />
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
      </CommonWraperLayout>
    </Grid>
  );
}
