import React, { useState } from "react";
import { Box } from "@mui/material";

export default function ProductImage({images}) {
  

  const [image, setImage] = useState(images[0]);
  return (
    <Box sx={{ p: 3 }}>
      <img
        src={image}
        alt="product _image"
        width="100%"
        height="auto"
        onMouseEnter={() => setImage(images[1])}
        onMouseLeave={() => setImage(images[0])}
        style={{ borderRadius: "5px" }}
      />
    </Box>
  );
}
