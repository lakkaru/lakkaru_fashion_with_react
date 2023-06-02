import { Typography } from "@mui/material";
import React from "react";
import HomeCarousel from "./innerLayouts/HomeCarousel";
import HomeBigButtons from "./innerLayouts/HomeBigButtons";
import CommonWrapperLayout from "../common/CommonWrapperLayout";
import { Grid } from "swiper";

export default function HomeLayout() {
  return (
    <CommonWrapperLayout isFromHome>
      <HomeCarousel />
      <Typography sx={{ pt: 2 }}>Sri Lankan Largest Fashion center</Typography>
      <HomeBigButtons/>
    </CommonWrapperLayout>
  );
}
