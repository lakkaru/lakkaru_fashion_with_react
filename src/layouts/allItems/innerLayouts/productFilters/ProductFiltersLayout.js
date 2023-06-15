import { Box, Typography } from "@mui/material";
import React from "react";
import SortFilter from "../../../../components/productFilters/SortFilter";
import DressTypeFilter from "../../../../components/productFilters/DressTypeFilter";
import SizeFilter from "../../../../components/productFilters/SizeFilter";
import PriceFilter from "../../../../components/productFilters/PriceFilter";

export default function ProductFilters({products,  setFilteredProducts}) {
  return (
    <Box sx={{padding:'30px', textAlign:'left'}}>
      <Typography variant={'h6'} sx={{py:1}}>SEARCH WITH FILTERS</Typography>
      <hr />
      <SortFilter products={products} setFilteredProducts={setFilteredProducts}/>
      <hr />
      <DressTypeFilter/>
      <hr />
      <SizeFilter products={products} setFilteredProducts={setFilteredProducts}/>
      <hr />
      <PriceFilter/>
    </Box>
  );
}
