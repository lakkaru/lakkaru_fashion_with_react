// import React, { useEffect, useState } from "react";
import {
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";

export default function DressTypeFilter({types, handleTypeOnChange}) {

  // useEffect(()=>{

  // })
  // const [filterList, setFilterList] = useState([]);
  // let typeList = filterList;
  // const handleOnChange = (e) => {
  //   //getting selected types
  //   if (e.target.checked) {
  //     //when user select a type
  //     typeList.push(e.target.name.toLowerCase());
  //     setFilterList(typeList);
  //     //initialize the list after deselecting and selecting
  //     if (typeList.length > types.length) {
  //       typeList = [];
  //       typeList.push(e.target.name.toLowerCase());
  //       setFilterList(typeList);
  //     }
  //   } else {
  //     //when user deselect a type
  //     //removing the selected item from filterList arr
  //     const index = typeList.indexOf(e.target.name.toLowerCase());
  //     if (index > -1) {
  //       typeList.splice(index, 1);
  //       setFilterList(typeList);
  //     }
  //     //when user deselect all types
  //     if (typeList.length === 0) {
  //       typeList = [...types];
  //       setFilterList(typeList);
  //     }
  //   }
  //   console.log(typeList);
  //   handleTypeFilter(typeList);
  // };

  // //getting filtered product list
  // const handleTypeFilter = (typeList) => {
  //   // console.log(originalProducts);
  //   const filteredProductsSet = new Set();
  //   originalProducts.forEach((product) => {
  //     //checking product for user selected type
  //     typeList.forEach((sType) => {
  //       if (product.productType.includes(sType)) {
  //         filteredProductsSet.add(product);
  //       }
  //     });
  //   });

  //   setFilteredProducts(Array.from(filteredProductsSet));
  //   //  console.log(Array.from(filteredProductsSet));
  // };

  return (
    <Box>
      <Typography sx={{ fontWeight: "bold" }}>DRESS TYPE</Typography>
      <FormGroup>
        {types.map((val, key) => {
          return (
            <FormControlLabel
              sx={{ color: "#808080" }}
              key={key}
              control={<Checkbox name={val} onChange={handleTypeOnChange} />}
              label={val.toUpperCase()}
              // onSelect={handleSelect}
            />
          );
        })}
      </FormGroup>
    </Box>
  );
}
