import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CommonWrapperLayout from "../common/CommonWrapperLayout";
import { useDispatch, useSelector } from "react-redux";
import { priceValueFormat } from "../../util/functions";
import { Link } from "react-router-dom";
import { delProductFromCart } from "../../store/actions/cartAction";

export default function CartLayout() {
  const [totalPrice, setTotalPrice] = useState(0);
  let totPrice = 0;
  const productsCart = useSelector((store) => store.cartReducer);
  // console.log(productsCart.cart);
const dispatch = useDispatch();
  useEffect(() => {
    setTotalPrice(totPrice);
  }, [totPrice, productsCart.cart]);


  const handleRemove=(index)=>{
    // console.log(index);
    dispatch(delProductFromCart(index));
  }
  return (
    <CommonWrapperLayout>
      <Grid
        container
        sx={{ textAlign: "left", pl: 6, pt: 6 }}
        // visibility={productsCart.cart.length==0 ? "visible" : "hidden"}
        display={productsCart.cart.length === 0 ? "block" : "none"}
      >
        <Typography
          variant="h4"
          sx={{ color: "#808080", display: "inline-block" }}
        >
          Your cart is empty!{" "}
        </Typography>
        <Link to={`/allItems`}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#6A5ACD", ml: 2, borderRadius: "10px" }}
        >
          Let's Shopping
        </Button>
        </Link>
      </Grid>
      <Grid
        item
        container
        justifyContent={"flex-end"}
        visibility={productsCart.cart.length === 0 ? "hidden" : "visible"}
      >
        <Grid item>
          <Typography p={2} sx={{ fontSize: "1rem", fontWeight: "600" }}>
            Total LKR: {priceValueFormat(totalPrice)}
          </Typography>
        </Grid>
      </Grid>
      {productsCart.cart.map((val, key) => {
        // setTotalPrice(totPrice+ (val.quantity * val.product.price));
        totPrice += val.quantity * val.product.price;

        return (
          <Grid item p={4} key={key}>
            <Grid item container justifyContent={"space-between"} spacing={1} px={1} py={3} className="px-md-3">
              <Grid item xs={4}>
                <img
                  src={val.product.images[0]}
                  alt=""
                  width={"80%"}
                  // height={"200px"}
                  style={{borderRadius: "5px" }}
                />
              </Grid>
              <Grid item xs={8}  className="px-1, px-md-3">
                <Grid container justifyContent={"space-between"}>
                  <Grid item xs={8}>
                    <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                      {val.product.productName}
                    </Typography>
                    <Typography sx={{ textAlign: "left" }}>
                      {val.product.description}
                    </Typography>
                    <Typography sx={{ textAlign: "left" }}>
                      {val.selectedSize.toUpperCase()}
                    </Typography>
                    <Typography sx={{ textAlign: "left" }}>
                      {val.quantity}
                    </Typography>
                    <Typography sx={{ textAlign: "left", color: "red" }}>
                      {priceValueFormat(val.product.price*val.quantity)}
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sx={{}}>
                    <Box
                      sx={{
                        textAlign: "right",
                        // width: "40px",
                        // borderLeft: "40px solid teal",
                        // borderBottom: "40px solid teal",
                        // borderRadius: "0 0 0 40px",
                      }}
                    >
                      <IconButton
                        aria-label="delete"
                        onClick={()=>handleRemove(key)}
                        size="large"
                        sx={{
                          color: "white",
                          bgcolor: "teal",
                          borderBottom: "1px solid teal",
                          borderRadius: "0 0 0 50px",
                          '&:hover': {
                            bgcolor: 'red',
                            }
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <hr />
          </Grid>
        );
      })}
    </CommonWrapperLayout>
  );
}
