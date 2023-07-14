import React from "react";
import { ShoppingCart as CartIcon } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import SnackBarMsg from "../../../../components/common/SnackBarMsg";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddToCartButtonSection({
  handleClick,
  productName,
  selectedQty,
  selectedSize,
  availableQty,
}) {
  // console.log(productName);
  // const [cart, setCart] = useState(0);
  const [addCount, setAddCount]= useState(0);


  const handleButtonClick = () => {
    // setCart(cart + 1);
    handleClick(addCount);
    setAddCount(addCount+1);
  };
  let showButton;
  // console.log(selectedSize);
  
  availableQty < 1 || selectedSize===undefined ? (showButton = true) : (showButton = false);
  // console.log(showButton);
  return (
    <Box>
      {/* <Link to={'/cart'}> */}
      <Button
        variant="contained"
        startIcon={<CartIcon />}
        sx={{ bgcolor: "#6a5acd", color: "white", px: 5, borderRadius: "20px" }}
        onClick={handleButtonClick}
        disabled={showButton}
      >
        Add To Cart
      </Button>
      {/* </Link> */}
      <SnackBarMsg
        message={
          productName
            ? selectedQty +
              " items of " +
              productName +
              " added to cart."
            : "empty"
        }
        addCount={addCount}
        variant={"success"}
      />
    </Box>
  );
}
