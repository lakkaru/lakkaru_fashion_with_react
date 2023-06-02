import { Box } from "@mui/material";
import React from "react";

export default function SingleImage({ image }) {
  return (
    <Box >
    <img
      src={image}
      width="100%"
      style={{ borderRadius: "10px 0 0 10px" }}
      alt=""
    />
    </Box>
  );
}
