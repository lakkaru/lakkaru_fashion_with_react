import { Grid, Typography } from "@mui/material";
import React from "react";

export default function GridSpacing() {
  return (
    <Grid container spacing={2} sx={{ bgcolor: "teal" }}>
      <Grid item xs={6} sx={{ bgcolor: "green" }}>
        <Typography sx={{ bgcolor: "blue" }}>
          Content of the grid item
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{ bgcolor: "green" }}>
        <div style={{ backgroundColor: "blue" }}>
          {" "}
          Content of the div in grid item
        </div>
      </Grid>
      <Grid item xs={6} sx={{ bgcolor: "green" }}>
        <p style={{ backgroundColor: "blue" }}>Content of the p in the item</p>
      </Grid>
      <Grid item xs={6} sx={{ bgcolor: "green" }}>
        <span style={{ backgroundColor: "blue", display:'block' }}>Content of the fourth item</span>
      </Grid>
    </Grid>
  );
}
