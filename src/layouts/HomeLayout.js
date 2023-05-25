import { Typography } from "@mui/material";
import React from "react";

import HomeCarousel from "./homeLayout/HomeCarousel";
import HomeBigButtons from "./homeLayout/HomeBigButtons";

import HeaderMenuLayout from "./common/HeaderMenuLayout";
import FooterLayout from "./common/FooterLayout";

export default function HomeLayout() {
  return (
    <>
      <HeaderMenuLayout/>
      <HomeCarousel />
      <Typography sx={{pt:2}}>Sri Lankan Largest Fashion center</Typography>
      <HomeBigButtons></HomeBigButtons>
      <FooterLayout/>
    </>
  );
}
