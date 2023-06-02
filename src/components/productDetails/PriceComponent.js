import React from "react";
import { Typography } from "@mui/material";
import { priceValueFormat } from "../../util/functions";

export default function PriceComponent({price}) {
  // console.log(price);
  
  return (
    <Typography variant={'h5'} sx={{ fontWeight: "bold", color:'red' }}>
      {priceValueFormat(price)}
    </Typography>
  );
}
