import React, { useState } from "react";
import CommonWrapperLayout from "../common/CommonWrapperLayout";
import { Box, Grid } from "@mui/material";
import ProductDetailsSection from "./innerLayouts/ProductDetailsSection";
import ImageSlider from "../../components/productDetails/ImageSlider";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/actions/cartAction";

export default function ProductDetailLayout() {
  const location = useLocation();
  const product = location.state?.product;
  // const [productsCart, setProductsCart] = useState([]);

  const dispatch = useDispatch();

  const addToCartHandle = (selectedQty, selectedSize) => {
    // console.log({
    //   product: product,
    //   quantity: selectedQty,
    //   selectedSize: selectedSize,
    // });
    dispatch(
      addProductToCart({
        product: product,
        quantity: selectedQty,
        selectedSize: selectedSize,
      })
    );
  };

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
              product={product}
              addToCartHandle={addToCartHandle}
            />
          </Grid>
        </Grid>
      </Box>
    </CommonWrapperLayout>
  );
}
