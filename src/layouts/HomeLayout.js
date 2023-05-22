import { Typography } from "@mui/material";
import React from "react";
import HeaderMenuLayout from "./homeLayout/HeaderMenuLayout";
import HomeCarousel from "./homeLayout/HomeCarousel";
import HomeBigButtons from "./homeLayout/HomeBigButtons";
import FooterLayout from "./homeLayout/FooterLayout";

export default function HomeLayout() {
  return (
    <>
      <HeaderMenuLayout />
      <HomeCarousel />
      <Typography sx={{pt:2}}>Sri Lankan Largest Fashion center</Typography>
      <HomeBigButtons></HomeBigButtons>
      <FooterLayout />
    </>
  );
}
