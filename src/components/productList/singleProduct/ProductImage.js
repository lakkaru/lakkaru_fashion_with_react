import React, { useState } from "react";
import { Box } from "@mui/material";

export default function ProductImage() {
  const images = [
    "https://radikadilanka.com/rdfashion/static/media/product7.930e47ba.jpg",
    "https://radikadilanka.com/rdfashion/static/media/product107.39094bc5.jpg",
  ];

  const [image, setImage] = useState(images[0]);
  return (
    <Box sx={{ p: 1 }}>
      <img
        src={image}
        alt="product _image"
        width="75%"
        height="auto"
        onMouseEnter={() => setImage(images[1])}
        onMouseLeave={() => setImage(images[0])}
        style={{ borderRadius: "5px" }}
      />
    </Box>
  );
}
