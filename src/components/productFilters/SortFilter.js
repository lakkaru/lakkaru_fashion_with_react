import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SortFilter({ products, setFilteredProducts }) {
  const [sort, setSort] = React.useState("select");
  // console.log(products);

  let sortType;
  let sorted;

  const handleChange = (event) => {
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
  // console.log(products);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort"
          onChange={handleChange}
        >
          {/* <MenuItem value={'dateAsc'}>DATE ASCENDING</MenuItem> */}
          <MenuItem value={"select"}>Select</MenuItem>
          <MenuItem value={"priceAsc"}>PRICE ASCENDING</MenuItem>
          <MenuItem value={"priceDesc"}>PRICE DESCENDING</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
