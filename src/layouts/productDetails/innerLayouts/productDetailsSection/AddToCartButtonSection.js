import React from "react";
import { ShoppingCart as CartIcon } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import SnackBarMsg from "../../../../components/common/SnackBarMsg";
import { useState } from "react";

export default function AddToCartButtonSection({ addProductToCart, productsCart, availableQty }) {
    console.log(availableQty);
    const [cart, setCart] = useState(0);
  const handleClick = () => {
    
    setCart(cart + 1);
    addProductToCart(cart )
  };
  let showButton;
  availableQty <1? showButton=true:showButton=false;
  return (
    <Box>
      <Button
        variant="contained"
        startIcon={<CartIcon />}
        sx={{ bgcolor: "#6a5acd", color: "white", px: 5, borderRadius: "20px" }}
        onClick={handleClick}
        disabled={showButton}
      >
        Add To Cart
      </Button>
      <SnackBarMsg message={productsCart.name?(productsCart.quantity+' items of ' + productsCart.name + ' added to cart.'):'empty'} cart={cart} variant={"success"} />
    </Box>
  );
}
