import { Box, Typography } from "@mui/material";
import React from "react";
import SortFilter from "../../../../components/productFilters/SortFilter";
import DressTypeFilter from "../../../../components/productFilters/DressTypeFilter";
import SizeFilter from "../../../../components/productFilters/SizeFilter";
import PriceFilter from "../../../../components/productFilters/PriceFilter";

export default function ProductFilters({products, originalProducts,  setFilteredProducts}) {
  const sizes = ["xs", "s", "m", "l", "xl"];
  const types=['t-shirt','dress', 'skinny','seasonal', 'top', 'frock']
  const range=[500, 10000]
  return (
    <Box sx={{padding:'30px', textAlign:'left'}}>
      <Typography variant={'h6'} sx={{py:1}}>SEARCH WITH FILTERS</Typography>
      <hr />
      <SortFilter products={products} setFilteredProducts={setFilteredProducts}/>
      <hr />
      <DressTypeFilter types={types} products={products} originalProducts={originalProducts} setFilteredProducts={setFilteredProducts}/>
      <hr />
      <SizeFilter sizes={sizes} products={products} originalProducts={originalProducts} setFilteredProducts={setFilteredProducts}/>
      <hr />
      <PriceFilter range={range} products={products} setFilteredProducts={setFilteredProducts}/>
    </Box>
  );
}
