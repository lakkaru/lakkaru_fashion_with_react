import * as React from "react";
import Chip from "@mui/material/Chip";
import { Box, Typography } from "@mui/material";

export default function StockStatusChip({ availableQty }) {
  return (
    <Box>
      <Chip
        label={availableQty > 0 ? "In-Stock" : "Out Of-Stock"}
        color={availableQty > 0 ? "success" : "error"}
      />
      {availableQty < 10 ? (
        <Typography sx={{ fontSize: ".5rem", color: "red" }}>
          Only {availableQty} available.
        </Typography>
      ) : (
        ""
      )}
    </Box>
  );
}
