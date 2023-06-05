import * as React from "react";
// import Button from "@mui/material/Button";
import { SnackbarProvider, useSnackbar } from "notistack";
import { useEffect } from "react";

function MyApp({ message, cart, variant }) {
  const { enqueueSnackbar } = useSnackbar();
 
  useEffect(() => {
    enqueueSnackbar(message, { variant });
  }, [message, variant, enqueueSnackbar]);

}

export default function SnackBarMsg({ message, cart, variant }) {
  return (
    <SnackbarProvider maxSnack={4} autoHideDuration={3000}>
      <MyApp message={message} cart={cart} variant={variant} />
    </SnackbarProvider>
  );
}
