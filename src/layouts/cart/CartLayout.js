import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CommonWrapperLayout from "../common/CommonWrapperLayout";
import { useSelector } from "react-redux";

export default function CartLayout() {
  const cartReducer=useSelector(store=>store.cartReducer);
  console.log(cartReducer);
  
  return (
    <CommonWrapperLayout>
      <Grid item p={4}>
        <Grid item container justifyContent={"flex-end"}>
          <Grid item>
            <Typography p={2} sx={{ fontSize: "1rem", fontWeight: "600" }}>
              Total LKR: 19,500.00
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justifyContent={"space-between"} spacing={5}>
          <Grid item xs={4}>
            <img
              src="https://radikadilanka.com/rdfashion/static/media/product17.70b5949b.jpg"
              alt=""
              width={"100%"}
              style={{ paddingLeft: "20px" }}
            />
          </Grid>
          <Grid item xs={8}>
            <Grid container justifyContent={"space-between"}>
              <Grid item xs={8}>
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                  Product 0
                </Typography>
                <Typography sx={{ textAlign: "left" }}>
                  This is the sample product description.
                </Typography>
                <Typography sx={{ textAlign: "left" }}>L</Typography>
                <Typography sx={{ textAlign: "left" }}>5</Typography>
                <Typography sx={{ textAlign: "left", color: "red" }}>
                  LKR: 19,500.00
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
                    size="large"
                    sx={{ color: "white",bgcolor:'teal',  borderBottom: "1px solid teal", borderRadius:'0 0 0 50px' }}
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
    </CommonWrapperLayout>
  );
}
