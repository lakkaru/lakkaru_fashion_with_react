import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Grid, Typography } from "@mui/material";


export default function ProductPriceFilter({
  priceRange,
  setPriceRange
}) {
  
  const handleChange = (e, newRange) => {
    setPriceRange(newRange);
    // console.log(newRange);
   
  };

  

  return (
    <Box sx={{ width: "auto" }}>
      <Typography sx={{ fontWeight: "bold" }}>PRICE</Typography>
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Typography sx={{ color: "#808080" }}>Rs:{priceRange[0]} </Typography>
        <Typography sx={{ color: "#808080" }}>Rs:{priceRange[1]} </Typography>
      </Grid>

      <Slider
        max={10000}
        min={500}
        sx={{ color: "#6a5acd" }}
        step={100}
        getAriaLabel={() => "Price range"}
        value={priceRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
      
      />
    </Box>
  );
}
