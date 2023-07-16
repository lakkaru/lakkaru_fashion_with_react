import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import SortFilter from "../../../../components/productFilters/SortFilter";
import DressTypeFilter from "../../../../components/productFilters/DressTypeFilter";
import SizeFilter from "../../../../components/productFilters/SizeFilter";
import PriceFilter from "../../../../components/productFilters/PriceFilter";

export default function ProductFilters({products, originalProducts,  setFilteredProducts}) {
  const sizes = ["xs", "s", "m", "l", "xl"];
  const types=['t-shirt','dress', 'skinny','seasonal', 'top', 'frock']
  const range=[500, 10000]

  const [sort, setSort] = useState("select");
  const [filterSizeList, setFilterSizeList] = useState([]);
  const [filterTypeList, setFilterTypeList] = useState([]);

  // Sort filter
  
  
  let sortType;
  let sorted;

  const handleSortChange = (event) => {
    // setSort(event.target.value);
    sortType = event.target.value;
    // console.log(sortType);
    setSort(sortType);
    switch (sortType) {
      case "priceAsc":
        sorted = products.sort((a, b) => {
          return a.price - b.price;
        });
        // console.log(products);

        break;
      case "priceDesc":
        sorted = products.sort((a, b) => {
          return b.price - a.price;
        });
        // console.log(products);

        break;

      default:
        break;
    }
    setFilteredProducts([...sorted]);
  };
  // ------------ End of Sort filter --------------

  //Size filter
  let sizeList = filterSizeList;
  const handleSizeOnChange = (e) => {
    //getting selected sizes
    if (e.target.checked) {
      //when user select a size
      sizeList.push(e.target.name.toLowerCase());
      setFilterSizeList(sizeList);
      //initialize the list after deselecting and selecting
      if (sizeList.length > sizes.length) {
        sizeList = [];
        sizeList.push(e.target.name.toLowerCase());
        setFilterSizeList(sizeList);
      }
    } else {
      //when user deselect a size
      //removing the selected item from filterList arr
      const index = sizeList.indexOf(e.target.name.toLowerCase());
      if (index > -1) {
        sizeList.splice(index, 1);
        setFilterSizeList(sizeList);
      }
      //when user deselect all sizes
      if (sizeList.length === 0) {
        sizeList = [...sizes];
        setFilterSizeList(sizeList);
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
  // ----------------- End of size filter---------------------

  //Type filter
 
  let typeList = filterTypeList;
  const handleTypeOnChange = (e) => {
    //getting selected types
    if (e.target.checked) {
      //when user select a type
      typeList.push(e.target.name.toLowerCase());
      setFilterTypeList(typeList);
      //initialize the list after deselecting and selecting
      if (typeList.length > types.length) {
        typeList = [];
        typeList.push(e.target.name.toLowerCase());
        setFilterTypeList(typeList);
      }
    } else {
      //when user deselect a type
      //removing the selected item from filterList arr
      const index = typeList.indexOf(e.target.name.toLowerCase());
      if (index > -1) {
        typeList.splice(index, 1);
        setFilterTypeList(typeList);
      }
      //when user deselect all types
      if (typeList.length === 0) {
        typeList = [...types];
        setFilterTypeList(typeList);
      }
    }
    console.log(typeList);
    handleTypeFilter(typeList);
  };

  //getting filtered product list
  const handleTypeFilter = (typeList) => {
    // console.log(originalProducts);
    const filteredProductsSet = new Set();
    originalProducts.forEach((product) => {
      //checking product for user selected type
      typeList.forEach((sType) => {
        if (product.productType.includes(sType)) {
          filteredProductsSet.add(product);
        }
      });
    });

    setFilteredProducts(Array.from(filteredProductsSet));
    //  console.log(Array.from(filteredProductsSet));
  };
  // -------------- End of Type filter -------------

  return (
    <Box sx={{padding:'30px', textAlign:'left'}}>
      <Typography variant={'h6'} sx={{py:1}}>SEARCH WITH FILTERS</Typography>
      <hr />
      <SortFilter sort={sort} handleSortChange={handleSortChange}/>
      <hr />
      <DressTypeFilter types={types} handleTypeOnChange={handleTypeOnChange}/>
      <hr />
      <SizeFilter sizes={sizes} handleSizeOnChange={handleSizeOnChange}/>
      <hr />
      <PriceFilter range={range} products={products} originalProducts={originalProducts} setFilteredProducts={setFilteredProducts}/>
    </Box>
  );
}
