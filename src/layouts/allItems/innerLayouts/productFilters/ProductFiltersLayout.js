import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SortFilter from "../../../../components/productFilters/SortFilter";
import DressTypeFilter from "../../../../components/productFilters/DressTypeFilter";
import SizeFilter from "../../../../components/productFilters/SizeFilter";
import PriceFilter from "../../../../components/productFilters/PriceFilter";

export default function ProductFilters({
  products,
  originalProducts,
  setFilteredProducts,
}) {
  const sizes = ["xs", "s", "m", "l", "xl"];
  const types = ["t-shirt", "dress", "skinny", "seasonal", "top", "frock"];
  const range = [500, 10000];

  // let isTypeSelected = false;

  const [sort, setSort] = useState("select");
  const [filterSizeList, setFilterSizeList] = useState([]);
  const [filterTypeList, setFilterTypeList] = useState([]);
  const [priceRange, setPriceRange] = React.useState(range);

  // Sort filter -----------------------------
  const handleSortChange = (event) => {
    const sortType = event.target.value;
    // console.log(sortType);
    setSort(sortType);
  };
  // ------------ End of Sort filter --------------

  //Type filter ----------------------

  const handleTypeOnChange = (e) => {
    let typeList = [...filterTypeList];
    // console.log('handleTypeOnChange')
    //getting selected types
    if (e.target.checked) {
      //when user select a type
      typeList.push(e.target.name.toLowerCase());
      setFilterTypeList(typeList);
      // console.log('checked ' , typeList)
      //initialize the list after deselecting all and selecting one
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
        // console.log('Unchecked ' , typeList)
      }
      //when user deselect all types
      if (typeList.length === 0) {
        typeList = [...types];
        setFilterTypeList(typeList);
      }
    }
    // console.log(typeList);
  };

  const typeFilter = (typeList, products) => {
    console.log("type filter");
    const filteredProductsSet = new Set();
    products?.forEach((product) => {
      //checking product for user selected type
      typeList.forEach((sType) => {
        if (product.productType.includes(sType)) {
          filteredProductsSet.add(product);
        }
      });
    });
    return filteredProductsSet;
  };

  // -------------- End of Type filter -------------

  //Size filter -------------------------------
  const handleSizeOnChange = (e) => {
    let sizeList = [...filterSizeList];
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
    // console.log(sizeList);
  };

  // //getting size filtered product list
  const sizeFilter = (sizeList, products) => {
    const filteredProductsSet = new Set();
    products?.forEach((product) => {
      //checking product for user selected size
      sizeList.forEach((sSize) => {
        if (product.size.includes(sSize)) {
          filteredProductsSet.add(product);
        }
      });
    });
    return filteredProductsSet;
  };
  // ----------------- End of size filter---------------------
  
  // console.log('Type selected', filterTypeList);
  useEffect(() => {
    // console.log('Type selected', filterTypeList);
    const filteredProducts = () => {
      const isTypeSelected = !(
        filterTypeList.length === 0 || filterTypeList.length === types.length
      );
      const isSizeSelected = !(
        filterSizeList.length === 0 || filterSizeList.length === sizes.length
      );

      if (isTypeSelected && isSizeSelected) {
        //size and type filter applied
        const result1 = typeFilter(filterTypeList, originalProducts);
        const result = sizeFilter(filterSizeList, result1);
        return result;
      } else if (isTypeSelected) {
        //type filter applied
        const result = typeFilter(filterTypeList, originalProducts);
        return result;
      } else if (isSizeSelected) {
        //size filter applied
        const result = sizeFilter(filterSizeList, originalProducts);
        return result;
      } else {
        //size or type filter not applied
        return originalProducts;
      }
    };
    const filterProductsArray = Array.from(filteredProducts());

    let finalProductsArray = [];
    switch (sort) {
      case "priceAsc":
        finalProductsArray = filterProductsArray.sort((a, b) => {
          return a.price - b.price;
        });
        // console.log('priceAsc');
        break;
      case "priceDesc":
        finalProductsArray = filterProductsArray.sort((a, b) => {
          return b.price - a.price;
        });
        // console.log('priceDesc');
        break;
      default:
        finalProductsArray = filterProductsArray;
        break;
    }

    const priceFilteredProducts = [];
    finalProductsArray.map((val) => {
      if (priceRange[0] <= val.price &  priceRange[1]>=val.price) {
        priceFilteredProducts.push(val);
      }
      return '';
    });

    setFilteredProducts(priceFilteredProducts);
  }, [sort, filterSizeList, filterTypeList, priceRange]);

  return (
    <Box sx={{ padding: "30px", textAlign: "left" }}>
      <Typography variant={"h6"} sx={{ py: 1 }}>
        SEARCH WITH FILTERS
      </Typography>
      <hr />
      <SortFilter sort={sort} handleSortChange={handleSortChange} />
      <hr />
      <DressTypeFilter types={types} handleTypeOnChange={handleTypeOnChange} />
      <hr />
      <SizeFilter sizes={sizes} handleSizeOnChange={handleSizeOnChange} />
      <hr />
      <PriceFilter
        range={range}
        products={products}
        originalProducts={originalProducts}
        setFilteredProducts={setFilteredProducts}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
    </Box>
  );
}
