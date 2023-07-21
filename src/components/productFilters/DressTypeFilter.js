// import React, { useEffect, useState } from "react";
import {
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";

export default function DressTypeFilter({types, handleTypeOnChange}) {

  return (
    <Box>
      <Typography sx={{ fontWeight: "bold" }}>DRESS TYPE</Typography>
      <FormGroup>
        {types.map((val, key) => {
          return (
            <FormControlLabel
              sx={{ color: "#808080" }}
              key={key}
              control={<Checkbox name={val} onChange={handleTypeOnChange} sx={{color:'black',  '&.Mui-checked': {
                color: '#6A5ACD',
              },}}/>}
              label={val.toUpperCase()}
              // onSelect={handleSelect}
            />
          );
        })}
      </FormGroup>
    </Box>
  );
}
