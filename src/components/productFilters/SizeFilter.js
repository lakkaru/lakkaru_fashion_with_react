import React, { useState } from "react";
import {
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";

export default function SizeFilter({
  sizes,
  products,
  originalProducts,
  setFilteredProducts,
}) {
  
  const [filterList, setFilterList] = useState([]);
  let sizeList = filterList;
  const handleOnChange = (e) => {
    //getting selected sizes
    if (e.target.checked) {
      //when user select a size
      sizeList.push(e.target.name.toLowerCase());
      setFilterList(sizeList);
      //initialize the list after deselecting and selecting
      if (sizeList.length > sizes.length) {
        sizeList = [];
        sizeList.push(e.target.name.toLowerCase());
        setFilterList(sizeList);
      }
    } else {
      //when user deselect a size
      //removing the selected item from filterList arr
      const index = sizeList.indexOf(e.target.name.toLowerCase());
      if (index > -1) {
        sizeList.splice(index, 1);
        setFilterList(sizeList);
      }
      //when user deselect all sizes
      if (sizeList.length === 0) {
        sizeList = [...sizes];
        setFilterList(sizeList);
      }
    }
    // console.log(sizeList);
    handleSizeFilter(sizeList);
  };

  //getting filtered product list
  const handleSizeFilter = (sizeList) => {
    // console.log(sizeList);
    const filteredProductsSet = new Set();
    originalProducts.forEach((product) => {
      //checking product for user selected size
      sizeList.forEach((sSize) => {
        if (product.size.includes(sSize)) {
          filteredProductsSet.add(product);
        }
      });
    });

    setFilteredProducts(Array.from(filteredProductsSet));
    //  console.log(Array.from(filteredProductsSet));
  };

  return (
    <Box>
      <Typography sx={{ fontWeight: "bold" }}>Size</Typography>
      <FormGroup>
        {sizes.map((val, key) => {
          return (
            <FormControlLabel
              sx={{ color: "#808080" }}
              key={key}
              control={<Checkbox name={val} onChange={handleOnChange} />}
              label={val.toUpperCase()}
              // onSelect={handleSelect}
            />
          );
        })}
      </FormGroup>
    </Box>
  );
}
