import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import {Typography } from "@mui/material";

export default function StyleSizeRadio({ availableSizes }) {
  return (
    <FormControl>
      {/* <FormLabel id="demo-row-radio-buttons-group-label">STYLE SIZE</FormLabel> */}
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {availableSizes.map((val, key) => {
          return (
            <FormControlLabel
              key={key}
              value={val}
              control={<Radio />}
              label={
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "1.2rem",
                    bgcolor: "#afd7af",
                    border:'2px solid #6a5acd',
                    borderRadius:'5px',
                    width:'35px',
                    textAlign:'center',
                    textTransform:'uppercase'
                  }}
                >
                  {val}
                </Typography>
              }
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
