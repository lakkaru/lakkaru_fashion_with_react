import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import SingleProductSizeBox from "./productSize/SingleProductSizeBox";

export default function ProductSize({ sizes }) {
  // console.log(sizes); //(4) ['s', 'm', 'l', 'xl']
  useEffect(()=>{

  },[sizes]);
  const defaultSizes = ["xs", "s", "m", "l", "xl"];
  let isAvailable;
  return (
    <Grid container spacing={1}>
      <Grid item xs={1}></Grid>
      {defaultSizes.map((val, key) => {
        sizes.includes(val) ? (isAvailable = true) : (isAvailable = false);
        return (
          <Grid key={key} item xs={2}>
            {/* {console.log(val, isAvailable)}  */}
            {/* xs false s true m true l true xl true */}
            <SingleProductSizeBox size={val} isAvailable={isAvailable} />
          </Grid>
        );
      })}
      <Grid item xs={1}></Grid>
    </Grid>
  );
}
