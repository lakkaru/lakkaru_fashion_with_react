import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import ProductFilters from "./innerLayouts/productFilters/ProductFiltersLayout";
import ProductList from "./innerLayouts/ProductList";
import CommonWrapperLayout from "../common/CommonWrapperLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData, updateProductList } from "../../store/actions/productAction";

export default function AllItemsLayout() {
  // const [loadingStatus, setLoadingStatus] = useState("notStarted");
  // const [products, setProducts] = useState([]);
 

  const { productDataLoadingStatus: loadingStatus, productList: products } =
    useSelector((store) => store.productReducer);
  // console.log(loadingStatus, products);
  // const [filteredProducts, setFilteredProducts] = useState([products]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loadingStatus !== "completed") {
      dispatch(fetchProductData());
    }
  }, [loadingStatus]);
  const handleUpdateProductList=(filteredProductList)=>{
    dispatch(updateProductList(filteredProductList))
  }
  return (
    <Grid>
      <CommonWrapperLayout>
        <Grid container sx={{ p: 2 }}>
          <Grid item xs={12} md={3} lg={2}>
            <ProductFilters
              products={products}
              setFilteredProducts={handleUpdateProductList}
            />
          </Grid>
          <Grid item xs={12} md={9} lg={10}>
            {loadingStatus === "loading" ? (
              <Typography>Loading....</Typography>
            ) : loadingStatus === "completed" ? (
              products.length > 0 ? (
                <Box sx={{ pb: 5 }}>
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
      </CommonWrapperLayout>
    </Grid>
  );
}
