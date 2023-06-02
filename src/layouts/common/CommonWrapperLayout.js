import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import HeaderMenuLayout from "./HeaderMenuLayout";
import FooterLayout from "./FooterLayout";
import { Box } from "@mui/material";

export default function CommonWrapperLayout({ children, isFromHome }) {
  const maxWidth1024 = useMediaQuery("(max-width:1024px)");
  return (
    <div>
      <HeaderMenuLayout />
      {maxWidth1024 ? (
        <Box sx={{ padding: isFromHome ? "0" : "0 1%" }}>{children}</Box>
      ) : (
        <Box sx={{ padding: isFromHome ? "0" : "0 4%" }}>{children}</Box>
      )}
      <FooterLayout />
    </div>
  );
}
