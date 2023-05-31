import { Typography } from "@mui/material";
import React from "react";

export default function SingleProductSizeBox({ size, isAvailable }) {
  console.log(size , isAvailable);
  // xs true s true m true l true xl true
  return (
    <div style={{
      textTransform: "uppercase",
      border: "2px solid #aaaaaa",
      borderRadius: "5px",
      color:isAvailable? 'white':'gray',
      backgroundColor: isAvailable? 'black': 'white'
    }}>
      <Typography
        
      >
        {size}
      </Typography>
    </div>
  );
}
