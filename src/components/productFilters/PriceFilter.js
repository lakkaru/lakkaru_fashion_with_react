import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Grid, Typography } from "@mui/material";

// function valuetext(value) {
//   // console.log(value);

//   return `${value}°C`;
// }

export default function ProductPriceFilter({
  range,
  products,
  originalProducts,
  setFilteredProducts,
}) {
  // const valueRange=[500, 10000];
  const displayProducts=[...originalProducts];
  const [priceRange, setPriceRange] = React.useState(range);

  const handleChange = (event, newRange) => {
    setPriceRange(newRange);
    console.log(newRange);
    productFilter(newRange);
  };

  const productFilter = (priceRange) => {
    const filteredProducts = [];
    displayProducts.map((val) => {
      if (priceRange[0] <= val.price &  priceRange[1]>=val.price) {
      filteredProducts.push(val);
      }
      // console.log(filteredProducts);
      
      return '';
    });
    setFilteredProducts(filteredProducts);
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
        // getAriaValueText={valuetext}
      />
    </Box>
  );
}
