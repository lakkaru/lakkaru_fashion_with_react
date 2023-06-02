import React from "react";
import { Grid, Typography } from "@mui/material";
import RatingComponent from "../../components/productDetails/RatingComponent";
import StockStatusChip from "../../components/productDetails/StockStatusChip";
import PriceComponent from "../../components/productDetails/PriceComponent";
import StyleSizeRadio from "../../components/productDetails/StyleSizeRadio";
import ProductNameInDetails from "../../components/productDetails/ProductNameInDetails";
import ProductDescription from "../../components/productDetails/ProductDescription";
import QuantitySelect from "./productDetailsSection/QuantitySelect";
import AddToCartButtonSection from "./productDetailsSection/AddToCartButtonSection";
import { useState } from "react";

export default function ProductDetailsSection({
  name,
  type,
  price,
  availableSizes,
  availableQty,
}) {
  // const availableSizes = ["xs", "s", "m"];
  const [productsCart, setProductsCart] = useState({});
  const [selectedQty, setSelectedQty] = useState(1);

  const addProductToCart = () => {
    setProductsCart({ name: name, quantity: selectedQty });
    // console.log(productsCart);
  };

  const qtySetting=(qty)=>{
    // console.log(qty);
    
    setSelectedQty(qty);    
  }
  // console.log(qty);
  return (
    <Grid container textAlign={"left"}>
      <Grid
        item
        container
        justifyContent="space-between"
        sx={{ pt: 2 }}
        xs={12}
      >
        <Grid item>
          <ProductNameInDetails name={name} type={type} />
        </Grid>
        <Grid item>
          <StockStatusChip availableQty={availableQty} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <RatingComponent />
      </Grid>
      <Grid item xs={12}>
        <PriceComponent price={price} />
      </Grid>
      <Grid item xs={12} sx={{ my: 3 }}>
        <ProductDescription
          description={"This is the sample product description."}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
          Style Size
        </Typography>
        <StyleSizeRadio availableSizes={availableSizes} />
        <hr />
      </Grid>

      <Grid item xs={12}>
        <Grid item>
          <Typography>Quantity of the selected size</Typography>
        </Grid>
        <Grid item>
          <QuantitySelect price={price} availableQty={availableQty} qtySetting={qtySetting}/>
        </Grid>
      </Grid>
      <Grid item xs={12} textAlign={"right"} sx={{ py: 3 }}>
        <AddToCartButtonSection addProductToCart={addProductToCart} productsCart={productsCart} availableQty={availableQty}/>
        <hr />
      </Grid>

      <Grid item>
        <Typography>
          Note: Product color may slightly vary due to photographic lighting
          sources or your monitor settings.
        </Typography>
      </Grid>
    </Grid>
  );
}
