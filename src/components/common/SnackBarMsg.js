import * as React from "react";
// import Button from "@mui/material/Button";
import { SnackbarProvider, useSnackbar } from "notistack";
import { useEffect } from "react";

function MyApp({ message, addCount, variant }) {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (addCount > 0) {
      enqueueSnackbar(message, { variant });
    }
  }, [addCount]);
}

export default function SnackBarMsg({ message, addCount, variant }) {
  return (
    <SnackbarProvider maxSnack={4} autoHideDuration={3000}>
      <MyApp message={message} variant={variant} addCount={addCount} />
    </SnackbarProvider>
  );
}
