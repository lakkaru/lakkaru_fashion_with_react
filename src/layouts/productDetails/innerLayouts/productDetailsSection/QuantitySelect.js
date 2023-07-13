import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import QtySelectSection from "../../../../components/productDetails/QtySelectSection";
import { priceValueFormat } from "../../../../util/functions";

export default function QuantitySelect({
  price,
  availableQty,
  handleQtySelect,
}) {
  // console.log(parseInt(price));
  const [selectedQty, setSelectedQty] = useState(1);

  const handleQtyChange = (quantity) => {
    handleQtySelect(quantity);
    // console.log('qty 2', quantity)
    setSelectedQty(quantity);
  };

  return (
    <Grid container justifyContent={"space-between"}>
      <Grid item>
        <QtySelectSection
          handleQtyChange={handleQtyChange}
          availableQty={availableQty}
        />
      </Grid>
      <Grid item>
        <Typography variant="h5">
          {priceValueFormat(selectedQty * price)}
        </Typography>
      </Grid>
    </Grid>
  );
}
