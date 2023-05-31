import React from "react";
import HeaderMenuLayout from "./HeaderMenuLayout";
import FooterLayout from "./FooterLayout";
import { Box } from "@mui/material";

export default function CommonWraperLayout({ children }) {
  return (
    <div>
      <HeaderMenuLayout />
      <Box sx={{ margin: "0 8%" }}>{children}</Box>
      <FooterLayout />
    </div>
  );
}
