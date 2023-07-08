import React from "react";
import CommonWrapperLayout from "../common/CommonWrapperLayout";
import { Box, Grid } from "@mui/material";
import ProductDetailsSection from "./innerLayouts/ProductDetailsSection";
import ImageSlider from "../../components/productDetails/ImageSlider";
import { useLocation } from "react-router-dom";

export default function ProductDetailLayout() {

  const location = useLocation();
   const product = location.state?.product;

  return (
    <CommonWrapperLayout> 
      <Box
        sx={{
          border: "4px solid #6A5ACD",
          borderRadius: "20px",
          margin: "10px ",
          padding: "15px",
        }}
      >
        <Grid container sx={{ justifyContent: "space-between" }} spacing={4}>
          <Grid item xs={12} md={5}>
            <ImageSlider images={product.images} />
          </Grid>
          <Grid item xs={12} md={7} sx={{ padding: "10px" }}>
            <ProductDetailsSection
              name={product.productName}
              type={product.productType}
              price={product.price}
              availableSizes={product.size}
              availableQty={product.availableQty}
              description={product.description}
            />
          </Grid>
        </Grid>
      </Box>
    </CommonWrapperLayout> 
  );
}
