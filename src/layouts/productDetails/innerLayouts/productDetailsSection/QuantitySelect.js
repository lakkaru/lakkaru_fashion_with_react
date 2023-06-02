import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import QtyOfSelectedSizes from "../../../../components/productDetails/QtyOfSelectedSizes";
import { priceValueFormat } from "../../../../util/functions";

export default function QuantitySelect({ price, availableQty, qtySetting }) {
  // console.log(parseInt(price));

  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    if (type === "add") {
      if (quantity < availableQty) {
        setQuantity(quantity + 1);
        qtySetting(quantity+1);
      }
    }
    if (type === "remove") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
        qtySetting(quantity-1);
      }
    }
    
  };
  // console.log(quantity);

  return (
    <Grid container justifyContent={"space-between"}>
      <Grid item>
        <QtyOfSelectedSizes
          handleQuantity={handleQuantity}
          quantity={quantity}
        />
      </Grid>
      <Grid item>
        <Typography variant="h5">
          {priceValueFormat(quantity * price)}
        </Typography>
      </Grid>
    </Grid>
  );
}
