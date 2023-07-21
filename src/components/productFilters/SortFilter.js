import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SortFilter({ sort, handleSortChange}) {
 
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort"
          onChange={handleSortChange}
        >
          <MenuItem value={"select"}>Select</MenuItem>
          <MenuItem value={"priceAsc"}>PRICE ASCENDING</MenuItem>
          <MenuItem value={"priceDesc"}>PRICE DESCENDING</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
