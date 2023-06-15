import React from "react";
import {
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";

export default function DressTypeFilter({types, products, setFilteredProducts }) {

  let filterList = [];

  const handleOnChange = (e) => {
    if (e.target.checked) {
      //when user select a size

      //checking if the filter reset with unchecking
      if (filterList.length !== types.length) {
        filterList.push(e.target.name.toLowerCase());
      } else {
        filterList = [];
        filterList.push(e.target.name.toLowerCase());
      }
      // console.log(filterList.length);
    } else {
      //when user deselect a size
      //removing the selected item from filterList arr
      const index = filterList.indexOf(e.target.name.toLowerCase());
      if (index > -1) {
        filterList.splice(index, 1);
      }
      // console.log(filterList);
      // console.log(filterList.length);
      if (filterList.length === 0) {
        filterList = [...types];
      }
    }
    // console.log(filterList);
    productFilter(filterList);
  };

  const productFilter = (filterList) => {
    // console.log(filterList);
    const filteredProducts = [];
    products.map((val) => {
      console.log(val);

      if (filterList.includes(val.productType)) {
        filteredProducts.push(val);
      }
      
        // console.log(filteredProducts)
      
      return "";
    });
    setFilteredProducts(filteredProducts);
  };

  return (
    <Box>
      <Typography sx={{ fontWeight: "bold" }}>DRESS TYPE</Typography>
      <FormGroup>
        {types.map((val, key) => {
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
