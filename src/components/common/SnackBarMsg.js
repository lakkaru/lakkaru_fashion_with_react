import * as React from "react";
// import Button from "@mui/material/Button";
import { SnackbarProvider, useSnackbar } from "notistack";
import { useEffect } from "react";

function MyApp({ message, variant }) {
  const { enqueueSnackbar } = useSnackbar();
 
  useEffect(() => {
    enqueueSnackbar(message, { variant });
  }, [message]);

}

export default function SnackBarMsg({ message, variant }) {
  return (
    <SnackbarProvider maxSnack={4} autoHideDuration={3000}>
      <MyApp message={message} variant={variant} />
    </SnackbarProvider>
  );
}
