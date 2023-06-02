import React from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function QtyOfSelectedSizes({handleQuantity, quantity}) {
  const qtyButtons = [
    { type: "add", icon: <AddIcon /> },
    { type: "remove", icon: <RemoveIcon /> },
  ];
  return (
    <Grid container alignItems={"center"} spacing={1}>
      <Grid item>
        <Typography variant="h4" sx={{ borderBottom: "1px solid black" }}>
          {quantity<10?`0${quantity}`:quantity}
        </Typography>
      </Grid>
      {qtyButtons.map((val, key) => {
        return (
          <Grid item key={key}>
            <IconButton
              size="small"
              sx={{ border: "1px solid gray", borderRadius: "10px" }}
            onClick={()=>handleQuantity(val.type)}
            >
              {val.icon}
            </IconButton>
          </Grid>
        );
      })}
    </Grid>
  );
}
