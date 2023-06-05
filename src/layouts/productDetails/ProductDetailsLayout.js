import React from "react";
import CommonWrapperLayout from "../common/CommonWrapperLayout";
import { Box, Grid } from "@mui/material";
import ProductDetailsSection from "./innerLayouts/ProductDetailsSection";
import ImageSlider from "../../components/productDetails/ImageSlider";
import { useLocation, useParams } from "react-router-dom";

export default function ProductDetailLayout() {
const {productName}=useParams();
// console.log(productName);

  const location = useLocation();
  const products = location.state?.products;
  console.log(products);
  const productData = products.find(item => item.productName === productName);
  // console.log(productData);
  
  // const productData = {
  //   images: [
  //     "https://radikadilanka.com/rdfashion/static/media/product7.930e47ba.jpg",
  //     "	https://radikadilanka.com/rdfashion/static/media/product107.39094bc5.jpg",
  //   ],
  //   productName: "Product 01",
  //   productType: "Dress",
  //   price: "7700",
  //   availableSizes: ["xs", "m", "l"],
  //   availableQty: 10,
  // };
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
            <ImageSlider images={productData.images} />
          </Grid>
          <Grid item xs={12} md={7} sx={{ padding: "10px" }}>
            <ProductDetailsSection
              name={productData.productName}
              type={productData.productType}
              price={productData.price}
              availableSizes={productData.size}
              availableQty={productData.availableQty}
              description={productData.description}
            />
          </Grid>
        </Grid>
      </Box>
    </CommonWrapperLayout> 
  );
}
