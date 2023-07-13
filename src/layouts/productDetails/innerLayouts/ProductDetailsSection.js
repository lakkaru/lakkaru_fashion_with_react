import React from "react";
import { Grid, Typography } from "@mui/material";
import RatingComponent from "../../../components/productDetails/RatingComponent";
import StockStatusChip from "../../../components/productDetails/StockStatusChip";
import PriceComponent from "../../../components/productDetails/PriceComponent";
import ProductSizeRadio from "../../../components/productDetails/ProductSizeRadio";
import ProductNameInDetails from "../../../components/productDetails/ProductNameInDetails";
import ProductDescription from "../../../components/productDetails/ProductDescription";
import QuantitySelect from "./productDetailsSection/QuantitySelect";
import AddToCartButtonSection from "./productDetailsSection/AddToCartButtonSection";
import { useState } from "react";

export default function ProductDetailsSection({ product, addProductToCart }) {
  // const availableSizes = ["xs", "s", "m"];

  const [selectedQty, setSelectedQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState();

  const handleQtySelect = (qty) => {
    setSelectedQty(qty);
    // console.log("selected qty 3", qty);
  };

  const handleSizeSelect = (size) => {
    // console.log('size ' ,size);
    setSelectedSize(size);
  };
  const handleClick = () => {
    // addProductToCart(selectedQty, selectedSize);
  };

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
          <ProductNameInDetails
            name={product.productName}
            type={product.type}
          />
        </Grid>
        <Grid item>
          <StockStatusChip availableQty={product.availableQty} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <RatingComponent />
      </Grid>
      <Grid item xs={12}>
        <PriceComponent price={product.price} />
      </Grid>
      <Grid item xs={12} sx={{ my: 3 }}>
        <ProductDescription description={product.description} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
          Style Size
        </Typography>
        <ProductSizeRadio
          availableSizes={product.size}
          handleSizeSelect={handleSizeSelect}
        />
        <hr />
      </Grid>

      <Grid item xs={12}>
        <Grid item>
          <Typography>Quantity of the selected item</Typography>
        </Grid>
        <Grid item>
          <QuantitySelect
            price={product.price}
            availableQty={product.availableQty}
            handleQtySelect={handleQtySelect}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} textAlign={"right"} sx={{ py: 3 }}>
        <AddToCartButtonSection
          handleClick={handleClick}
          productName={product.productName}
          selectedQty={selectedQty}
          selectedSize={selectedSize}
          availableQty={product.availableQty}
        />
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
